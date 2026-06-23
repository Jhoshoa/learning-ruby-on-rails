const fs = require('fs');
const path = require('path');

const src = path.join(__dirname, '..', 'build', 'search-index.json');
const dest = path.join(__dirname, '..', 'static', 'search-index.json');

if (fs.existsSync(src)) {
  fs.copyFileSync(src, dest);
  console.log('Copied search-index.json to static/ for dev server.');
} else {
  console.log('No search-index.json found in build/. Run build first.');
}
