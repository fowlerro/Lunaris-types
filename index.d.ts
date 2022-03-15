/// <reference types="node" />
import { CategoryChannel, Collection, GuildMember, MessageEmbed, OAuth2Guild, Role as discordjsRole, Snowflake, TextChannel } from 'discord.js';
import { APIRole } from 'discord-api-types';
export interface User {
    discordId: Snowflake;
    discordTag: `${string}#${number}`;
    avatar: string | null;
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
}
export interface GuildConfig {
    guildId: Snowflake;
    modules: GuildModules;
}
export interface Role extends APIRole {
}
export interface Guild extends OAuth2Guild {
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
export interface Warns {
    userId: Snowflake;
    warns: GuildProfileWarn & {
        executor: {
            id: Snowflake;
            username: string;
            avatar?: string;
            discirminator: string;
        };
    };
}
export interface MutualGuilds {
    excluded: OAuth2Guild[];
    included: OAuth2Guild[];
}
export interface GuildStats {
    name: string;
    icon: {
        hash: string | null;
        acronym: string;
    };
    stats: {
        members: number;
        bots: number;
        channels: number;
        voiceChannels: number;
    };
}
export interface GuildSettings {
    clientMember: GuildMember;
    guildConfig: GuildConfig;
    guildRoles: Collection<string, discordjsRole>;
}
export interface Reactions {
    reaction: string;
    roleId: Snowflake;
    mode: string;
}
export interface ReactionRole {
    _id: string;
    guildId: Snowflake;
    channelId: Snowflake;
    messageId: Snowflake;
    reactions: Reactions[];
}
export interface ReactionRolePageData {
    reactionRoles: ReactionRole[];
    guildChannels: Collection<Snowflake, TextChannel | CategoryChannel>;
    guildRoles: Collection<string, discordjsRole>;
}
export interface ReactionRoleFormValues extends ReactionRoleMessageFormValues, ReactionRoleReactionsFormValues, ReactionRoleSubmitFormValues {
}
export interface ReactionRoleMessageFormValues {
    channelId: string;
    messageType: 'messageId' | 'lastMessage' | 'embed';
    messageId: string;
}
export interface ReactionRoleReactionsFormValues {
    reactions: Reactions[];
}
export interface ReactionRoleSubmitFormValues {
    buttons: boolean;
}
export interface AutoRoleRole {
    roleId: Snowflake;
    time: number;
}
export interface AutoRole {
    guildId: Snowflake;
    roles: AutoRoleRole[];
}
export interface AutoRolePageData {
    autoRoles: AutoRoleRole[];
    guildRoles: Collection<string, discordjsRole>;
}
export interface Embed extends MessageEmbed {
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
export interface EmbedsPageData {
    embeds: EmbedMessage[];
    guildChannels: Collection<Snowflake, TextChannel | CategoryChannel>;
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
export {};
