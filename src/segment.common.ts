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