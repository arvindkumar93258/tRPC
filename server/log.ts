import pino from "pino";
import logger from "pino-http";
import noir from "pino-noir";
import config from "../config";



export function stdWarn(text: string, n?: boolean) {
    const warning = `   ${text}    `;
    const spacemount = warning.length + 1;
    const magentaCode = "\x1b[45m";
    const italicsCode = "\x1b[3m";
    const resetCode = "\x1b[0m";

    const newLine = `   ${magentaCode}${new Array(spacemount).join(" ")}${resetCode}`;
    console.info();

    const warningText = `  ${magentaCode}${italicsCode}${warning}${resetCode}`;
    [0, 0, 0].forEach((_, i) => {
        console.warn(i === 1 ? warningText : newLine);
    });
    if (n) console.info();
}

const COLORS = {
    yellow: 33,
    green: 32,
    blue: 34,
    red: 31,
    grey: 90,
    magenta: 35,
    clear: 39,
};

export const colorize = (color: keyof typeof COLORS, string?: string) => {
    `\u001b[${COLORS[color]}m${string}\u001b[${COLORS.clear}m`;
}

const redactedKeys = noir([]);

const log = pino({
    transport: {
        target: config.env === 'develpment' ? "pino-pretty" : "",
        options: {
            colorize: config.env === "development",
        }
    },
    serializers: redactedKeys,
});

export const attachLogger = logger({
    logger: log,
    useLevel: config.env === "development" ? "debug" : "info",
});


