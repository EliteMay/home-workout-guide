import fs from 'node:fs';
import path from 'node:path';

const root = path.resolve(new URL('..', import.meta.url).pathname);
const read = (relative) => fs.readFileSync(path.join(root, relative), 'utf8');
const fail = (message) => { console.error(`FAIL: ${message}`); process.exitCode = 1; };
const ok = (message) => console.log(`OK: ${message}`);
let exercises; let basics;
try { exercises = JSON.parse(read('data/exercises.json')); basics = JSON.parse(read('data/basics.json')); ok('JSON parse'); } catch (error) { fail(`JSON parse: ${error.message}`); process.exit(1); }
const requiredExercise = ['id','name','bodyPart','muscles','difficulty','equipment','image','imageAlt','reps','sets','rest','startPosition','steps','breathing','cues','mistakes','feel','stopSigns','easier','harder','lightDumbbellProgression','next'];
if (exercises.length < 15 || exercises.length > 20) fail(`exercise count must be 15-20, got ${exercises.length}`); else ok(`exercise count ${exercises.length}`);
const ids = new Set(); const bodyParts = new Set();
for (const exercise of exercises) {
  for (const key of requiredExercise) { const value = exercise[key]; if (value === undefined || value === null || value === '' || (Array.isArray(value) && value.length === 0)) fail(`${exercise.id || exercise.name || 'unknown'} missing ${key}`); }
  if (ids.has(exercise.id)) fail(`duplicate exercise id: ${exercise.id}`); ids.add(exercise.id); bodyParts.add(exercise.bodyPart);
  if (!['やさしい','標準','むずかしい'].includes(exercise.difficulty)) fail(`${exercise.id}: invalid difficulty`);
  if (!Array.isArray(exercise.steps) || exercise.steps.length < 3) fail(`${exercise.id}: steps must have at least 3 items`);
  if (!Array.isArray(exercise.cues) || exercise.cues.length < 2) fail(`${exercise.id}: cues too short`);
  if (!Array.isArray(exercise.mistakes) || exercise.mistakes.length < 2) fail(`${exercise.id}: mistakes too short`);
  if (!fs.existsSync(path.join(root, exercise.image))) fail(`${exercise.id}: missing image ${exercise.image}`);
}
for (const part of ['胸','背中','肩','腕','腹','脚']) if (!bodyParts.has(part)) fail(`missing body part: ${part}`); ok('all six body parts covered');
if (basics.length < 16) fail(`basics count expected >=16, got ${basics.length}`);
for (const item of basics) for (const key of ['id','title','summary','why','action']) if (!item[key]) fail(`basic ${item.id || 'unknown'} missing ${key}`); ok(`basics count ${basics.length}`);
const html = read('index.html');
for (const ref of ['styles.css','theme.js','app.js']) if (!html.includes(ref)) fail(`index.html missing reference ${ref}`);
const idsInHtml = [...html.matchAll(/\sid="([^"]+)"/g)].map((match) => match[1]);
const duplicateHtmlIds = idsInHtml.filter((id,index) => idsInHtml.indexOf(id) !== index); if (duplicateHtmlIds.length) fail(`duplicate HTML ids: ${[...new Set(duplicateHtmlIds)].join(', ')}`);
for (const localRef of [...html.matchAll(/(?:src|href)="([^"]+)"/g)].map((match) => match[1])) { if (/^(?:https?:|#|mailto:|tel:)/.test(localRef)) continue; const clean = localRef.split(/[?#]/)[0]; if (clean && !fs.existsSync(path.join(root,clean))) fail(`broken local reference: ${localRef}`); }
if (!html.includes('data-theme-toggle')) fail('theme toggle missing'); if (!html.includes('data-exercise-grid')) fail('exercise library mount missing'); if (!html.includes('id="safety"')) fail('safety section missing'); if (!html.includes('id="basics"')) fail('basics section missing');
if (!process.exitCode) console.log('Validation passed.');
