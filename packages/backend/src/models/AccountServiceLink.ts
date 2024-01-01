/*
 * SPDX-FileCopyrightText: Fyra Labs, Et al.
 * SPDX-License-Identifier: AGPL-3.0-only
 */

import { Entity, Column } from 'typeorm';
import { MiUser } from './User.js';

export enum NyAccountService {
	YOUTUBE = 'youtube',
	GITHUB = 'github',
	DISCORD = 'discord',
}

@Entity('acccount_service_link')
export class NyAccountServiceLink {
	@ManyToOne(() => MiUser, {
		onDelete: 'CASCADE',
	})
	public user: MiUser | null;

	@Column({
		type: 'enum',
		enum: NyAccountService,
	})
	public service: NyAccountService;

	/// Used for identification purposes for that specific service
	@Column('varchar', {
		length: 512,
	})
	public serviceId: string;

	/// Information to be displayed
	@Column('varchar', {
		length: 2048,
	})
	public name: string;
}
