# create-module

Create modular structure for Express TypeScript app.

## Install globally

```bash
npm install -g create-module
```
Or you can run the executable using `npx`

## Basic Usage
To create a new module, run the following command:

```bash
create-module <module-name>
```
- `<module-name>`: Specify the name of the module.

- `[target-directory]` (optional): Specifies the target directory where the module will be created. Default is set to `src/modules`.

## Examples
Create a module named **foo** in the default directory:

```bash
create-module foo
```

Create a module named **bar** in the `src/bar` directory:

```bash
create-module bar src/bar
```