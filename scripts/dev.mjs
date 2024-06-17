/*
 * SPDX-FileCopyrightText: syuilo and misskey-project
 * SPDX-License-Identifier: AGPL-3.0-only
 */

import { dirname } from 'node:path';
import { fileURLToPath } from 'node:url';
import { execa } from 'execa';

import { $ } from "bun";

const _filename = fileURLToPath(import.meta.url);
const _dirname = dirname(_filename);

// await execa('pnpm', ['clean'], {
// 	cwd: _dirname + '/../',
// 	stdout: process.stdout,
// 	stderr: process.stderr,
// });

await $`cd ${_dirname}/../ && bun clean`;

// await execa('pnpm', ['build-pre'], {
// 	cwd: _dirname + '/../',
// 	stdout: process.stdout,
// 	stderr: process.stderr,
// });

await $`cd ${_dirname}/../ && bun run --bun build-pre`;


await execa('bun', ['run','build-assets'], {
	cwd: _dirname + '/../',
	stdout: process.stdout,
	stderr: process.stderr,
});

// await $`cd ${_dirname}/../ && bun run --bun build-assets`;

// await execa('pnpm', ['--filter', 'misskey-js', 'ts'], {
// 	cwd: _dirname + '/../',
// 	stdout: process.stdout,
// 	stderr: process.stderr,
// });

await $`cd ${_dirname}/../ && bun --filter misskey-js ts`;


await $`cd ${_dirname}/../ && bun run --bun megalodon build`;

await $`cd ${_dirname}/../ && bun run --bun misskey-reversi build:tsc`;

await $`cd ${_dirname}/../ && bun run --bun misskey-bubble-game build:tsc`;
await $`cd ${_dirname}/../ && bun run build-pre --watch`;

await $`cd ${_dirname}/../ && bun run build-assets --watch`;

await $`cd ${_dirname}/../ && bun run --bun backend dev`;

await $`cd ${_dirname}/../ && bun run --bun frontend ${process.env.MK_DEV_PREFER === 'backend' ? 'watch' : 'dev'}`;

await $`cd ${_dirname}/../ && bun run --bun sw watch`;

await $`cd ${_dirname}/../ && bun run --bun misskey-js watch`;

await $`cd ${_dirname}/../ && bun run --bun misskey-reversi watch`;

await $`cd ${_dirname}/../ && bun run --bun misskey-bubble-game watch`;
