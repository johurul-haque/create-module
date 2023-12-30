#!/usr/bin/env node

import fs from 'fs';
import { createSpinner } from 'nanospinner';
import path from 'path';
import { fileURLToPath } from 'url';

const moduleName = process.argv[2];
const targetDirectory = process.argv[3] || 'src/modules';

if (!moduleName) {
  console.error('Please provide a module name');
  process.exit(1);
}

const modulePath = path.join(targetDirectory, moduleName);

if (fs.existsSync(modulePath)) {
  console.error(`Module ${moduleName} already exists in ${targetDirectory}`);
  process.exit(1);
}

const spinner = createSpinner(`Creating module ${moduleName}`);

try {
  spinner.start({ color: 'blue' });

  fs.mkdirSync(modulePath);

  const templatePath = path.join(
    fileURLToPath(new URL('template', import.meta.url))
  );

  fs.readdirSync(templatePath).forEach((file) => {
    const content = fs.readFileSync(path.join(templatePath, file), 'utf-8');
    fs.writeFileSync(
      path.join(modulePath, file.replace('foo', moduleName)),
      content
    );
  });

  spinner.success({
    text: `Module ${moduleName} created successfully`,
  });
} catch (error) {
  spinner.error(`Error creating module: ${error.message}`);
  process.exit(1);
}
