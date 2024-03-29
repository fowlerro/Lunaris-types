/// <reference types="node" />
import { CategoryChannel, Collection, GuildMember, MessageEmbedOptions, OAuth2Guild, Role as discordjsRole, Snowflake, TextChannel } from 'discord.js';
import { APIRole } from 'discord-api-types/v10';
export interface User {
    discordId: Snowflake;
    discordTag: `${string}#${number}`;
    avatar: string | null;
    banner: string | null;
}
export declare type Language = 'pl' | 'en';
interface TextStatistics {
    level: number;
    xp: number;
    totalXp: number;
    dailyXp: number;
    cooldown?: boolean;
}
interface VoiceStatistics extends TextStatistics {
    timeSpent: number;
}
export interface ProfileStatistics {
    text: TextStatistics;
    voice: VoiceStatistics;
}
interface ProfileCard {
    background: number;
    customBackground?: Buffer;
    accent: string;
}
export interface Profile {
    userId: Snowflake;
    coins: number;
    statistics: ProfileStatistics;
    cardAppearance: ProfileCard;
}
export interface ProfileWithRank extends Profile {
    xpNeeded: {
        text: number;
        voice: number;
    };
    rank: {
        text: number;
        voice: number;
    };
}
interface GuildModules {
    autoRole: boolean;
    welcomeMessage: boolean;
    serverLogs: boolean;
    levels: boolean;
}
export interface GuildConfig {
    guildId: Snowflake;
    modules: GuildModules;
}
export interface GuildChannels {
    text: TextChannel[];
    category: CategoryChannel[];
}
export interface APIBan {
    user: {
        id: Snowflake;
        username: string;
        avatar?: string;
        discriminator: string;
        public_flags: number;
    };
    reason: string | null;
}
export interface Ban extends APIBan {
    executor?: {
        id: Snowflake;
        username: string;
        avatar?: string;
        discriminator: string;
    };
    time?: number;
}
export interface GuildProfileWarn {
    _id: string;
    executorId: Snowflake;
    reason: string | null;
    date: number;
}
export interface WarnedUser {
    user: {
        id: Snowflake;
        username: string;
        discriminator: string;
        avatar?: string;
    };
    warns: {
        _id: GuildProfileWarn['_id'];
        date: GuildProfileWarn['date'];
        reason: GuildProfileWarn['reason'];
        executor: {
            id: Snowflake;
            username: string;
            discriminator: string;
            avatar?: string;
        };
    }[];
}
export interface MutualGuilds {
    excluded: OAuth2Guild[];
    included: OAuth2Guild[];
}
export interface GuildInfo {
    id: Snowflake;
    name: string;
    description: string | null;
    acronym: string;
    icon: string | null;
    banner: string | null;
    createdAt: Date;
    createdTimestamp: number;
    ownerId: Snowflake;
}
export interface GuildStats {
    members: number;
    bots: number;
    bans: number;
    channels: number;
    voiceChannels: number;
    roles: number;
    emojis: number;
}
export interface GuildOverviewModules {
    autoRoles: {
        status: boolean;
        amount: number;
    };
    levels: {
        status: boolean;
        text: {
            amount: number;
        };
        voice: {
            amount: number;
        };
    };
    interactiveRoles: {
        amount: number;
    };
    embeds: {
        amount: number;
    };
    serverLogs: {
        status: boolean;
    };
}
export interface GuildSettings {
    clientMember: GuildMember;
    guildConfig: GuildConfig;
    guildRoles: Collection<string, discordjsRole>;
}
export interface AutoRole {
    roleId: Snowflake;
    time: number;
}
export interface AutoRoleConfig {
    guildId: Snowflake;
    roles: AutoRole[];
}
export interface AutoRolePageData {
    status: boolean;
    autoRoles: AutoRole[];
}
export declare type GuildLogTypes = {
    messages: 'edit' | 'delete' | 'purge' | 'pin' | 'unpin';
    emojis: 'edit' | 'delete' | 'create';
    roles: 'edit' | 'delete' | 'create' | 'add' | 'remove';
    channels: 'edit' | 'delete' | 'create';
    threads: 'edit' | 'delete' | 'create';
    invites: 'create' | 'delete';
    members: 'join' | 'leave' | 'nicknameChange' | 'warn' | 'unwarn' | 'unwarnAll' | 'kick' | 'timeout' | 'timeoutRemove' | 'ban' | 'unban';
    server: 'unwarnAll';
};
export declare type GuildLogsCategory<Category extends keyof GuildLogTypes> = {
    channelId?: Snowflake;
    logs: {
        [LogType in GuildLogTypes[Category]]: boolean;
    };
};
export declare type GuildLogs = {
    guildId: Snowflake;
    logs: {
        [Category in keyof GuildLogTypes]: GuildLogsCategory<Category>;
    };
};
export interface GuildLogsPageData {
    status: boolean;
    serverLogs: GuildLogs['logs'];
}
export interface LevelConfigPageData {
    status: boolean;
    levelConfig: LevelConfig;
}
export interface Embed extends MessageEmbedOptions {
    hexColor: `#${number}`;
}
export interface EmbedMessage {
    _id?: string;
    name: string;
    guildId: Snowflake;
    channelId?: Snowflake;
    messageId?: Snowflake;
    messageContent?: string;
    embed: Embed;
}
export declare type WelcomeMessageAction = 'join' | 'leave';
export interface WelcomeMessageFormat {
    message: string;
    action: WelcomeMessageAction;
}
export declare type GroupedWelcomeMessageFormats = {
    [action in WelcomeMessageAction]: WelcomeMessageFormat[];
};
export declare type WelcomeMessageChannels = {
    [channel in WelcomeMessageAction]: Snowflake;
};
export interface WelcomeMessage {
    guildId: Snowflake;
    channels: WelcomeMessageChannels;
    status: boolean;
    formats: WelcomeMessageFormat[];
}
export interface LevelUpMessage {
    messageFormat?: string | null;
    mode: 'off' | 'currentChannel' | 'specificChannel';
    channelId?: Snowflake;
}
export interface LevelReward {
    _id?: string;
    roleId: Snowflake;
    level: number;
    takePreviousRole: boolean;
}
export interface LevelRewards {
    text: LevelReward[];
    voice: LevelReward[];
}
export interface LevelConfig {
    guildId: Snowflake;
    multiplier: number;
    levelUpMessage: LevelUpMessage;
    rewards: LevelRewards;
}
export declare type InteractiveRoleType = 'reactions' | 'buttons' | 'select';
export declare type InteractiveRoleAction = 'add' | 'remove' | 'toggle';
export declare type InteractiveRoleStyle = 'PRIMARY' | 'SECONDARY' | 'SUCCESS' | 'DANGER';
export interface InteractiveRoleItem {
    _id?: string;
    label?: string;
    description?: string;
    icon?: string;
    style?: InteractiveRoleStyle;
    roleId: Snowflake;
    action?: InteractiveRoleAction;
}
export interface InteractiveRolesType {
    _id?: string;
    name: string;
    guildId: Snowflake;
    channelId: Snowflake;
    messageId: Snowflake;
    embedId?: string;
    type: InteractiveRoleType;
    placeholder?: string;
    roles: InteractiveRoleItem[];
}
export interface GuildEmojis {
    name: string;
    iconURL?: string;
    emojis: {
        id: string;
        name: string;
        animated: boolean;
    }[];
}
export type { APIRole as Role, OAuth2Guild as Guild, discordjsRole };
