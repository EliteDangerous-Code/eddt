/**
 * List of internal definitions used by ED events
 */

export type GameModeType = 'Solo' | 'Group' | 'Open';

export type StarPos = [number, number, number];
export type AllegianceType =
  | 'Independent'
  | 'Alliance'
  | 'Federation'
  | 'Empire';
export type GovernmentType =
  | '$government_None;'
  | '$government_Patronage;'
  | '$government_Democracy;'
  | '$government_Confederacy;'
  | '$government_Feudal;'
  | '$government_Engineer;';
export type SystemSecurity =
  | '$SYSTEM_SECURITY_low;'
  | '$SYSTEM_SECURITY_medium;'
  | '$SYSTEM_SECURITY_high;';
export type PowerType = 'Edmund Mahon';
export type PowerplayState = 'Exploited' | 'Controlled';
export type EconomyType =
  | '$economy_None;'
  | '$economy_Agriculture;'
  | '$economy_Extraction;'
  | '$economy_Tourism;';
export enum CombatRank {
  'Harmless' = 0,
  'Mostly Harmless',
  'Novice',
  'Competent',
  'Expert',
  'Master',
  'Dangerous',
  'Deadly',
  'Elite',
}
export enum TradeRank {
  'Penniless' = 0,
  'Mostly Pennliess',
  'Peddler',
  'Dealer',
  'Merchant',
  'Broker',
  'Entrepreneur',
  'Tycoon',
  'Elite',
}
export enum ExplorationRank {
  'Aimless' = 0,
  'Mostly Aimless',
  'Scout',
  'Surveyor',
  'Explorer',
  'Pathfinder',
  'Ranger',
  'Pioneer',
  'Elite',
}
export enum FederationRank {
  'None' = 0,
  'Recruit',
  'Cadet',
  'Midshipman',
  'Petty Officer',
  'Chief Petty Officer',
  'Warrant Officer',
  'Ensign',
  'Lieutenant',
  'Lt. Commander',
  'Post Commander',
  'Post Captain',
  'Rear Admiral',
  'Vice Admiral',
  'Admiral',
}
export enum EmpireRank {
  'None' = 0,
  'Outsider',
  'Serf',
  'Master',
  'Squire',
  'Knight',
  'Lord',
  'Baron',
  'Viscount ',
  'Count',
  'Earl',
  'Marquis',
  'Duke',
  'Prince',
  'King',
}
export enum CqcRank {
  'Helpless' = 0,
  'Mostly Helpless',
  'Amateur',
  'Semi Professional',
  'Professional',
  'Champion',
  'Hero',
  'Legend',
  'Elite',
}
export type StarType =
  // Main sequence
  | 'O'
  | 'B'
  | 'A'
  | 'F'
  | 'G'
  | 'K'
  | 'M'
  | 'L'
  | 'T'
  | 'Y'
  // Proto stars
  | 'TTS'
  | 'AeBe'
  // Wolf-Rayet
  | 'W'
  | 'WN'
  | 'WNC'
  | 'WC'
  | 'WO'
  // Carbon stars
  | 'CS'
  | 'C'
  | 'CN'
  | 'CJ'
  | 'CH'
  | 'CHd'
  //
  | 'MS'
  | 'S'
  // White dwarfs
  | 'D'
  | 'DA'
  | 'DAB'
  | 'DAO'
  | 'DAZ'
  | 'DAV'
  | 'DB'
  | 'DBZ'
  | 'DBV'
  | 'DO'
  | 'DOV'
  | 'DQ'
  | 'DC'
  | 'DCV'
  | 'DX'
  | 'N' // Neutron
  | 'H' // black Hole
  | 'X' // eXotic
  | 'SupermassiveBlackHole'
  | 'A_BlueWhiteSuperGiant'
  | 'F_WhiteSuperGiant'
  | 'M_RedSuperGiant'
  | 'M_RedGiant'
  | 'K_OrangeGiant'
  | 'RoguePlanet'
  | 'Nebula'
  | 'StellarRemnantNebula';
export type BodyType =
  | 'Null'
  | 'Star'
  | 'Planet'
  | 'PlanetaryRing'
  | 'StellarRing'
  | 'Station'
  | 'AsteroidCluster';
export type CrimeType =
  | 'Assault'
  | 'Murder'
  | 'Piracy'
  | 'Interdiction'
  | 'IllegalCargo'
  | 'DisobeyPolice'
  | 'FireInNoFireZone'
  | 'FireInStation'
  | 'DumpingDangerous'
  | 'DumpingNearStation'
  | 'DockingMinor_BlockingAirlock'
  | 'DockingMajor_BlockingAirlock'
  | 'DockingMinor_BlockingLandingPad'
  | 'DockingMajor_BlockingLandingPad'
  | 'DockingMinor_Trespass'
  | 'DockingMajor_Trespass'
  | 'CollidedAtSpeedInNoFireZone'
  | 'CollidedAtSpeedInNoFireZone_HullDamage';

export type FactionState =
  | 'Boom'
  | 'CivilLiberty'
  | 'CivilUnrest'
  | 'Drought'
  | 'Election'
  | 'Expansion'
  | 'InfrastructureFailure'
  | 'Investment'
  | 'Lockdown'
  | 'None'
  | 'Outbreak'
  | 'Retreat'
  | 'War';
export type Happiness = '$Faction_HappinessBand1;' | '$Faction_HappinessBand2;';

export interface Faction {
  Name: string;
  FactionState: FactionState;
  Government: GovernmentType;
  Influence: number;
  Allegiance: AllegianceType;
  Happiness: Happiness;
  Happiness_Localised: string;
  MyReputation: number;
}

export interface SystemFaction {
  Name: string;
  FactionState: FactionState;
}

export type StationType =
  | 'Coriolis'
  | 'CraterOutpost'
  | 'FleetCarrier'
  | 'Outpost'
  | 'Orbis';

export type StationService =
  | 'dock'
  | 'autodock'
  | 'commodities'
  | 'contacts'
  | 'exploration'
  | 'missions'
  | 'outfitting'
  | 'crewlounge'
  | 'refuel'
  | 'repair'
  | 'tuning'
  | 'engineer'
  | 'missionsgenerated'
  | 'facilitator'
  | 'flightcontroller'
  | 'stationoperations'
  | 'powerplay'
  | 'searchrescue'
  | 'stationMenu';

export interface StationEconomy {
  Name: EconomyType;
  Name_Localised: string;
  Proportion: number;
}

export interface BountyReward {
  Faction: string;
  Reward: number;
}

export type ShipType =
  | 'adder'
  | 'anaconda'
  | 'asp_scout'
  | 'asp'
  | 'cobramkiii'
  | 'cobramkiv'
  | 'diamondback'
  | 'diamondbackxl'
  | 'dolphin'
  | 'eagle'
  | 'empire_courier'
  | 'empire_eagle'
  | 'empire_eagleferdelance'
  | 'empire_trader'
  | 'federation_dropship_mkii'
  | 'federation_dropship'
  | 'federation_fighter'
  | 'federation_gunship'
  | 'ferdelance'
  | 'hauler'
  | 'independant_trader'
  | 'krait_light'
  | 'orca'
  | 'python'
  | 'sidewinder'
  | 'type6'
  | 'type7'
  | 'type9'
  | 'viper_mkiv'
  | 'viper';

export type LegalStateType = 'Clear' | 'Wanted';

export type ScanType = 'AutoScan' | 'Basic' | 'Cargo' | 'Detailed';

export type AsteroidMaterialContent =
  | '$AsteroidMaterialContent_Low;'
  | '$AsteroidMaterialContent_Medium;'
  | '$AsteroidMaterialContent_High;';

export type MaterialCategory = 'Raw' | 'Encoded' | 'Manufactured';

export type MaterialName = 'nickel' | 'sulphur' | 'carbon' | 'vanadium';

export type MineralType =
  | '$bertrandite_name;'
  | '$gold_name;'
  | '$painite_name;'
  | '$silver_name;';

export type CommodityType = '$ConsumerTechnology_Name;';

export type DroneType = 'Prospector' | 'Collection';

export type MissionType =
  | 'Mission_Collect_name'
  | 'Mission_Delivery_Investment'
  | 'Mission_Assassinate_Legal_Corporate_name';
export type MissionFactionEffectType =
  | '$MISSIONUTIL_Interaction_Summary_EP_up;'
  | '$MISSIONUTIL_Interaction_Summary_Outbreak_up;';
export type ReputationTrend = 'UpGood';
export type ReputationReward = '+' | '++' | '+++' | '++++' | '+++++';
export type InfluenceReward = '+' | '++' | '+++' | '++++' | '+++++';

export interface MissionFactionEffect {
  Faction: string;
  Effects: {
    Effect: MissionFactionEffectType;
    Effect_Localised: string;
    Trend: ReputationTrend;
  }[];
  Influence: {
    SystemAddress: number;
    Trend: ReputationTrend;
    Influence: InfluenceReward;
  }[];
  ReputationTrend: ReputationTrend;
  Reputation: ReputationReward;
}

export type DockingDeniedReason =
  | 'Distance'
  | 'NoSpace'
  | 'Offences'
  | 'RestrictedAccess';

export type LuminosityType =
  | 'III'
  | 'IV'
  | 'IVb'
  | 'O'
  | 'V'
  | 'Va'
  | 'Vab'
  | 'Vb'
  | 'VI'
  | 'VII'
  | 'Vz';
