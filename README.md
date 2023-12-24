# write-module 

Create modular structure for Express TypeScript app.

## Install globally

```bash
npm install -g write-module 
```

## Basic Usage
To create a new module, run the following command:

```bash
 write-module <module-name>
```
- `<module-name>`: Specify the name of the module.

- `[target-directory]` (optional): Specifies the target directory where the module will be created. Default is set to `src/modules`.

## Examples
Create a module named **foo** in the default directory:

```bash
 write-module foo
```

Create a module named **bar** in the `src/bar` directory:

```bash
 write-module bar src/bar
```