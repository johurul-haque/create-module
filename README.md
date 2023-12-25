# write-module 

If you use the modular pattern for an express application, each module in the modules directory needs to have at least **five** files (controller, route, service, interface, model). This package is a CLI tool to create those files easily.

## Install globally

```bash
$ npm install -g write-module 
```

## Usage

```bash
$ write-module hello-world
```
This command will create a `hello-world` directory with the following files in the `src/modules` directory.

```bash
├── user.interface.ts
├── user.route.ts
├── user.controller.ts
├── user.model.ts
└── user.service.ts
```

You can change the output directory path by using the following command

```bash
$ write-module hello-world src/app/modules
```

Now the directory with the file will be created in `src/app/modules`
