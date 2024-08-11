const {installSWIProlog} = require('./installer');

main().catch(err => {
  core.setFailed(err.message);
});

async function main() {
  checkPlatform();

  const branch  = process.env.SWI_PROLOG_BRANCH;
  const version = process.env.SWI_PROLOG_VERSION;

  console.log(`##[group]Installing SWI-Prolog ${version}`);
  await installSWIProlog(branch, version);
  console.log(`##[endgroup]`);
}

function checkPlatform() {
  if (process.platform !== 'linux')
    throw new Error(
      '@logtalk-actions/setup-swi-prolog only supports Ubuntu Linux at this time'
    );
}
