type EnvValue = string | number | boolean | undefined | null;

type NodeEnv =
    | "development"
    | "test"
    | "e2e"
    | "storybook"
    | "staging"
    | "production";
