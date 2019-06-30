export abstract class Common {
  static configure(key: string, configOptions?: SegmentConfig): void {};
  static identify(id: string, traits?: SegmentTraits, customTraits?: any, options?: SegmentOptions): void{};
  static track(event: string, properties?: any, options?: SegmentOptions): void{};
  static screen(name: string, category?: string, properties?: any, options?: SegmentOptions): void{};
  static group(groupId: string, traits?: SegmentTraits, customTraits?: any, options?: SegmentOptions): void{};
  static alias(newId: string, options?: SegmentOptions): void{};
  static optOut(optOut: boolean): void{};
}

export interface SegmentConfig {
  /**
   * Defaults to true
   */
  trackLifeCycleEvents?: boolean;
  /**
   * Defaults to true
   */
  recordScreenViews?: boolean;
  options?: SegmentOptions;
  proxyUrl?: string;
  /**
   * Defaults to false
   */
  setLogging?: boolean;
  /**
   * Defaults to false
   */
  setDebug?: boolean;
  middlewaresAndroid?: com.segment.analytics.Middleware[];
  middlewaresIOS?: SEGMiddleware[];
}

export interface SegmentAddress {
  street: string;
  city: string;
  state: string;
  postalCode: string;
  country: string;
}

export interface SegmentTraits {
  anonymousId?: string;
  id?: string;
  createdAt?: Date;
  username?: string;
  title?: string;
  avatar?: string;
  gender?: string;
  firstName?: string;
  lastName?: string;
  industry?: string;
  employees?: number;
  description?: string;
  email?: string;
  address?: SegmentAddress;
  website?: string;
  age?: number;
  birthday?: Date;
  phone?: string;
  fax?: string;
}

export interface SegmentOptions {
  useAll?: boolean;
  excluded?: string[];
  included?: string[];
}