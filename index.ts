import {Command} from "commander";
import replace = require("replace")

const program = new Command();

program
    .requiredOption("--randomstring <randomstring>", "The random hash that file path was changed to")
    .requiredOption("--workspacepath <workspacepath>", "The directory where instrumented files contained")
    .action(function (env){
        const from = `dist/js/${env.randomstring}.windows.js`;
        const to = "dist/source/concat/js/windows.js";
        replace({
            regex: from,
            replacement: to,
            paths: [env.workspacepath],
            recursive: true,
            include: '*.js',
            count: true
        });
    });
program.parse(process.argv)
