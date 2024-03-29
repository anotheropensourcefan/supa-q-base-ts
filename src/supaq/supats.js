let fullPath = `./config.ts`;
import * as util from 'util';
import { exec as exec_base } from 'child_process';
const exec = util.promisify(exec_base);
import { program } from 'commander';
import { getPath } from "./lib/path.js";
// import bonus, { queriesStarter } from './lib/bonus.js'
// import imports, { dots } from './lib/imports.js'
// import { getUserQueries, justTables } from './lib/tinkering.js'
// import { genBaseQueries, parseSchema } from './lib/jsc.js'
program.option("-c, --config <file>", "relative path to SupaQ config file: -c ./supaconfig.ts or ./config ...");
console.log(process.argv[2]);
async function getConfig(fullPath) {
    let config;
    let { path, command } = await getPath(fullPath);
    if (command) {
        try {
            // console.log(`command ${command} will be executed`)
            const { stdout, stderr } = await exec(command);
            // console.log(`command ${command} has been executed, stdout: ${stdout}, stderr: ${stderr}`)
        }
        catch (error) {
            console.error(error);
        }
    }
    path = `${path}.js`;
    try {
        console.log(`will import ${path}`);
        const imported = await import(path);
        config = imported.default;
        // console.log(config)
        return config;
    }
    catch (error) {
        console.error(error);
    }
}
async function main() {
    const config = await getConfig(fullPath);
    if (config) {
    }
}
async function test() {
}
main();
// test()
