import { CodegenConfig } from "@graphql-codegen/cli";

const config: CodegenConfig = {
  schema: "schema.graphql",
  documents: "src/**/*.tsx",
  generates: {
    "src/gql/": { preset: "client" },
  },
  noSilentErrors: true,
};

export default config;
