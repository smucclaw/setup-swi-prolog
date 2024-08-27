import { exec } from '@actions/exec';
import { join } from 'path';

/**
 * Install SWI-Prolog.
 *
 * @param {string} branch
 * @param {string} version
 */
export async function installSWIProlog(branch, version) {
  await exec(join(__dirname, 'install-swi-prolog-ubuntu'), [branch, version]);
}
