import { exec } from '@actions/exec';
import { join } from 'path';

export default { installSWIProlog };

/**
 * Install SWI-Prolog.
 *
 * @param {string} branch
 * @param {string} version
 */
async function installSWIProlog(branch, version) {
  await exec(join(__dirname, 'install-swi-prolog-ubuntu'), [branch, version]);
}
