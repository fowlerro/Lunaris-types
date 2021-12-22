import { Collection, GuildMember, Role as discordjsRole, Snowflake } from 'discord.js'
import { APIGuild } from 'discord-api-types'
import { APIRole } from 'discord.js/node_modules/discord-api-types'

export interface User {
    discordId: Snowflake;
    discordTag: `${string}#${number}`;
    avatar: string | null;
}

export type Language = 'pl' | 'en'

interface LevelUpMessage {
    mode: 'off' | 'currentChannel' | 'specificChannel';
    channelId?: Snowflake;
}
interface GuildModuleXp {
    levelUpMessage: LevelUpMessage;
    multiplier: number
}
interface GuildModuleAutoMod {
    muteRole?: Snowflake;
}
interface GuildModules {
    autoMod: GuildModuleAutoMod;
    xp: GuildModuleXp
}
export interface GuildConfig {
    guildId: Snowflake;
    language: Language;
    modules: GuildModules;
}

export interface Role extends APIRole {}
export interface Guild extends APIGuild {}

export interface MutualGuilds {
    excluded: APIGuild[]
    included: APIGuild[]
}


export type GuildSettings = {
    clientMember: GuildMember
    guildConfig: GuildConfig
    guildRoles: Collection<string, discordjsRole>
}