// eslint-disable-next-line @typescript-eslint/no-require-imports
module.exports = {
  apps: [
    {
      name: "richoil@production",
      port: "3014",
      script: "node_modules/next/dist/bin/next",
      args: "start",
    },
  ],
};
