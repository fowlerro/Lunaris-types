import { CategoryChannel, Collection, GuildMember, MessageEmbed, Role as discordjsRole, Snowflake, TextChannel } from 'discord.js'
import { APIGuild, APIRole } from 'discord-api-types'

export interface User {
    discordId: Snowflake;
    discordTag: `${string}#${number}`;
    avatar: string | null;
}

export type Language = 'pl' | 'en'


interface GuildModules {
    autoRole: boolean
    welcomeMessage: boolean
}
export interface GuildConfig {
    guildId: Snowflake;
    muteRole: Snowflake;
    modules: GuildModules;
}

export interface Role extends APIRole {}
export interface Guild extends APIGuild {}

export interface MutualGuilds {
    excluded: APIGuild[]
    included: APIGuild[]
}


export interface GuildSettings {
    clientMember: GuildMember
    guildConfig: GuildConfig
    guildRoles: Collection<string, discordjsRole>
}


export interface Reactions {
    reaction: string
    roleId: Snowflake
    mode: string
}

export interface ReactionRole {
    _id: string
    guildId: Snowflake
    channelId: Snowflake
    messageId: Snowflake
    reactions: Reactions[]
}

export interface ReactionRolePageData {
    reactionRoles: ReactionRole[]
    guildChannels: Collection<Snowflake, TextChannel | CategoryChannel>
    guildRoles: Collection<string, discordjsRole>
}

export interface ReactionRoleFormValues extends ReactionRoleMessageFormValues, ReactionRoleReactionsFormValues, ReactionRoleSubmitFormValues {}
export interface ReactionRoleMessageFormValues {
    channelId: string
    messageType: 'messageId' | 'lastMessage' | 'embed'
    messageId: string
}
export interface ReactionRoleReactionsFormValues {
    reactions: Reactions[]
}
export interface ReactionRoleSubmitFormValues {
    buttons: boolean
}


export interface AutoRoleRole {
    roleId: Snowflake;
    time: number;
}

export interface AutoRole {
    guildId: Snowflake
    roles: AutoRoleRole[]
}

export interface AutoRolePageData {
    autoRoles: AutoRoleRole[]
    guildRoles: Collection<string, discordjsRole>
}


export interface Embed extends MessageEmbed {}
export interface EmbedMessage {
    _id?: string
    name: string;
    guildId: Snowflake;
    channelId?: Snowflake;
    messageId?: Snowflake;
    messageContent?: string;
    embed: Embed
}

export interface EmbedsPageData {
    embeds: EmbedMessage[]
    guildChannels: Collection<Snowflake, TextChannel | CategoryChannel>
}


export type WelcomeMessageAction = 'join' | 'leave'

export interface WelcomeMessageFormat {
    message: string
    action: WelcomeMessageAction
}

export type GroupedWelcomeMessageFormats = {
    [action in WelcomeMessageAction]: WelcomeMessageFormat[]
}

export type WelcomeMessageChannels = {
    [channel in WelcomeMessageAction]: Snowflake
}

export interface WelcomeMessage {
    guildId: Snowflake
    channels: WelcomeMessageChannels
    status: boolean
    formats: WelcomeMessageFormat[]
}


export interface LevelUpMessage {
    mode: 'off' | 'currentChannel' | 'specificChannel';
    channelId?: Snowflake;
}

export interface LevelReward {
    roleId: Snowflake
    level: number
    takePreviousRole: boolean
}
export interface LevelConfig {
    guildId: Snowflake
    multiplier: number
    levelUpMessage: LevelUpMessage
    rewards: LevelReward[]
}