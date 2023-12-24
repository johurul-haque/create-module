#!/usr/bin/env node

import fs from 'fs';
import ora from 'ora';
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

const spinner = ora(`Creating module ${moduleName}`).start();

try {
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

  spinner.succeed(`${moduleName} created successfully`);
} catch (error) {
  spinner.fail(`Error creating module: ${error.message}`);
  process.exit(1);
}
