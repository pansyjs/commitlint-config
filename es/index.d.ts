declare const config: {
    parserPreset: string;
    rules: {
        'body-leading-blank': (string | number)[];
        'body-max-line-length': (string | number)[];
        'footer-leading-blank': (string | number)[];
        'footer-max-line-length': (string | number)[];
        'header-max-length': (string | number)[];
        'subject-case': (string | number | string[])[];
        'subject-empty': (string | number)[];
        'subject-full-stop': (string | number)[];
        'type-case': (string | number)[];
        'type-empty': (string | number)[];
        'type-enum': (string | number | string[])[];
    };
    prompt: {
        questions: {
            type: {
                description: string;
                enum: {
                    feat: {
                        description: string;
                        title: string;
                        emoji: string;
                    };
                    fix: {
                        description: string;
                        title: string;
                        emoji: string;
                    };
                    docs: {
                        description: string;
                        title: string;
                        emoji: string;
                    };
                    style: {
                        description: string;
                        title: string;
                        emoji: string;
                    };
                    refactor: {
                        description: string;
                        title: string;
                        emoji: string;
                    };
                    perf: {
                        description: string;
                        title: string;
                        emoji: string;
                    };
                    test: {
                        description: string;
                        title: string;
                        emoji: string;
                    };
                    build: {
                        description: string;
                        title: string;
                        emoji: string;
                    };
                    ci: {
                        description: string;
                        title: string;
                        emoji: string;
                    };
                    chore: {
                        description: string;
                        title: string;
                        emoji: string;
                    };
                    revert: {
                        description: string;
                        title: string;
                        emoji: string;
                    };
                };
            };
            scope: {
                description: string;
            };
            subject: {
                description: string;
            };
            body: {
                description: string;
            };
            isBreaking: {
                description: string;
            };
            breakingBody: {
                description: string;
            };
            breaking: {
                description: string;
            };
            isIssueAffected: {
                description: string;
            };
            issuesBody: {
                description: string;
            };
            issues: {
                description: string;
            };
        };
    };
};
export default config;
//# sourceMappingURL=index.d.ts.map