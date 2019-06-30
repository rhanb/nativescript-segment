declare module com {
	export module segment {
		export module analytics {
			export class Analytics {
				public static class: java.lang.Class<com.segment.analytics.Analytics>;
				public screen(param0: string, param1: com.segment.analytics.Properties): void;
				public group(param0: string): void;
				public optOut(param0: boolean): void;
				/** @deprecated */
				public screen(param0: string, param1: string, param2: com.segment.analytics.Properties): void;
				public onIntegrationReady(param0: string, param1: com.segment.analytics.Analytics.Callback<any>): void;
				/** @deprecated */
				public onIntegrationReady(param0: com.segment.analytics.Analytics.BundledIntegration, param1: com.segment.analytics.Analytics.Callback<any>): void;
				public screen(param0: string, param1: string, param2: com.segment.analytics.Properties, param3: com.segment.analytics.Options): void;
				public static setSingletonInstance(param0: com.segment.analytics.Analytics): void;
				public alias(param0: string, param1: com.segment.analytics.Options): void;
				public flush(): void;
				public getSnapshot(): com.segment.analytics.StatsSnapshot;
				public identify(param0: string, param1: com.segment.analytics.Traits, param2: com.segment.analytics.Options): void;
				public alias(param0: string): void;
				public reset(): void;
				public shutdown(): void;
				public group(param0: string, param1: com.segment.analytics.Traits): void;
				public logger(param0: string): com.segment.analytics.integrations.Logger;
				public group(param0: string, param1: com.segment.analytics.Traits, param2: com.segment.analytics.Options): void;
				public getApplication(): globalAndroid.app.Application;
				public track(param0: string): void;
				/** @deprecated */
				public getLogLevel(): com.segment.analytics.Analytics.LogLevel;
				public getAnalyticsContext(): com.segment.analytics.AnalyticsContext;
				public track(param0: string, param1: com.segment.analytics.Properties, param2: com.segment.analytics.Options): void;
				public static with(param0: globalAndroid.content.Context): com.segment.analytics.Analytics;
				/** @deprecated */
				public screen(param0: string, param1: string): void;
				/** @deprecated */
				public logout(): void;
				public track(param0: string, param1: com.segment.analytics.Properties): void;
				public identify(param0: string): void;
				public identify(param0: com.segment.analytics.Traits): void;
				/** @deprecated */
				public getLogger(): com.segment.analytics.integrations.Logger;
				public screen(param0: string): void;
			}
			export module Analytics {
				export class Builder {
					public static class: java.lang.Class<com.segment.analytics.Analytics.Builder>;
					public collectDeviceId(param0: boolean): com.segment.analytics.Analytics.Builder;
					public trackAttributionInformation(): com.segment.analytics.Analytics.Builder;
					public logLevel(param0: com.segment.analytics.Analytics.LogLevel): com.segment.analytics.Analytics.Builder;
					public flushQueueSize(param0: number): com.segment.analytics.Analytics.Builder;
					public defaultOptions(param0: com.segment.analytics.Options): com.segment.analytics.Analytics.Builder;
					public constructor(param0: globalAndroid.content.Context, param1: string);
					public recordScreenViews(): com.segment.analytics.Analytics.Builder;
					public crypto(param0: com.segment.analytics.Crypto): com.segment.analytics.Analytics.Builder;
					public flushInterval(param0: number, param1: java.util.concurrent.TimeUnit): com.segment.analytics.Analytics.Builder;
					public connectionFactory(param0: com.segment.analytics.ConnectionFactory): com.segment.analytics.Analytics.Builder;
					public middleware(param0: com.segment.analytics.Middleware): com.segment.analytics.Analytics.Builder;
					/** @deprecated */
					public disableBundledIntegrations(): com.segment.analytics.Analytics.Builder;
					public tag(param0: string): com.segment.analytics.Analytics.Builder;
					public build(): com.segment.analytics.Analytics;
					public networkExecutor(param0: java.util.concurrent.ExecutorService): com.segment.analytics.Analytics.Builder;
					public trackApplicationLifecycleEvents(): com.segment.analytics.Analytics.Builder;
					public use(param0: com.segment.analytics.integrations.Integration.Factory): com.segment.analytics.Analytics.Builder;
				}
				export class BundledIntegration {
					public static class: java.lang.Class<com.segment.analytics.Analytics.BundledIntegration>;
					public static AMPLITUDE: com.segment.analytics.Analytics.BundledIntegration;
					public static APPS_FLYER: com.segment.analytics.Analytics.BundledIntegration;
					public static APPTIMIZE: com.segment.analytics.Analytics.BundledIntegration;
					public static BUGSNAG: com.segment.analytics.Analytics.BundledIntegration;
					public static COUNTLY: com.segment.analytics.Analytics.BundledIntegration;
					public static CRITTERCISM: com.segment.analytics.Analytics.BundledIntegration;
					public static FLURRY: com.segment.analytics.Analytics.BundledIntegration;
					public static GOOGLE_ANALYTICS: com.segment.analytics.Analytics.BundledIntegration;
					public static KAHUNA: com.segment.analytics.Analytics.BundledIntegration;
					public static LEANPLUM: com.segment.analytics.Analytics.BundledIntegration;
					public static LOCALYTICS: com.segment.analytics.Analytics.BundledIntegration;
					public static MIXPANEL: com.segment.analytics.Analytics.BundledIntegration;
					public static QUANTCAST: com.segment.analytics.Analytics.BundledIntegration;
					public static TAPLYTICS: com.segment.analytics.Analytics.BundledIntegration;
					public static TAPSTREAM: com.segment.analytics.Analytics.BundledIntegration;
					public static UXCAM: com.segment.analytics.Analytics.BundledIntegration;
					public static values(): native.Array<com.segment.analytics.Analytics.BundledIntegration>;
					public static valueOf(param0: string): com.segment.analytics.Analytics.BundledIntegration;
				}
				export class Callback<T> extends java.lang.Object {
					public static class: java.lang.Class<com.segment.analytics.Analytics.Callback<any>>;
					/**
					 * Constructs a new instance of the com.segment.analytics.Analytics$Callback interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
					 */
					public constructor(implementation: {
						onReady(param0: T): void;
					});
					public constructor();
					public onReady(param0: T): void;
				}
				export class LogLevel {
					public static class: java.lang.Class<com.segment.analytics.Analytics.LogLevel>;
					public static NONE: com.segment.analytics.Analytics.LogLevel;
					public static INFO: com.segment.analytics.Analytics.LogLevel;
					public static DEBUG: com.segment.analytics.Analytics.LogLevel;
					public static BASIC: com.segment.analytics.Analytics.LogLevel;
					public static VERBOSE: com.segment.analytics.Analytics.LogLevel;
					public static valueOf(param0: string): com.segment.analytics.Analytics.LogLevel;
					public log(): boolean;
					public static values(): native.Array<com.segment.analytics.Analytics.LogLevel>;
				}
			}
		}
	}
}

declare module com {
	export module segment {
		export module analytics {
			export class AnalyticsContext extends com.segment.analytics.ValueMap {
				public static class: java.lang.Class<com.segment.analytics.AnalyticsContext>;
				public putValue(param0: string, param1: any): com.segment.analytics.ValueMap;
				public putValue(param0: string, param1: any): com.segment.analytics.AnalyticsContext;
				public location(): com.segment.analytics.AnalyticsContext.Location;
				public putReferrer(param0: com.segment.analytics.AnalyticsContext.Referrer): com.segment.analytics.AnalyticsContext;
				public traits(): com.segment.analytics.Traits;
				public campaign(): com.segment.analytics.AnalyticsContext.Campaign;
				public device(): com.segment.analytics.AnalyticsContext.Device;
				public putDeviceToken(param0: string): com.segment.analytics.AnalyticsContext;
				public putCampaign(param0: com.segment.analytics.AnalyticsContext.Campaign): com.segment.analytics.AnalyticsContext;
				public putLocation(param0: com.segment.analytics.AnalyticsContext.Location): com.segment.analytics.AnalyticsContext;
				public unmodifiableCopy(): com.segment.analytics.AnalyticsContext;
			}
			export module AnalyticsContext {
				export class Campaign extends com.segment.analytics.ValueMap {
					public static class: java.lang.Class<com.segment.analytics.AnalyticsContext.Campaign>;
					public name(): string;
					public putName(param0: string): com.segment.analytics.AnalyticsContext.Campaign;
					public putValue(param0: string, param1: any): com.segment.analytics.AnalyticsContext.Campaign;
					public putContent(param0: string): com.segment.analytics.AnalyticsContext.Campaign;
					public term(): string;
					public putMedium(param0: string): com.segment.analytics.AnalyticsContext.Campaign;
					/** @deprecated */
					public tern(): string;
					public putValue(param0: string, param1: any): com.segment.analytics.ValueMap;
					public content(): string;
					public constructor();
					public putSource(param0: string): com.segment.analytics.AnalyticsContext.Campaign;
					public putTerm(param0: string): com.segment.analytics.AnalyticsContext.Campaign;
					public source(): string;
					public medium(): string;
					public constructor(param0: java.util.Map<string, any>);
					public constructor(param0: number);
				}
				export class Device extends com.segment.analytics.ValueMap {
					public static class: java.lang.Class<com.segment.analytics.AnalyticsContext.Device>;
					public putValue(param0: string, param1: any): com.segment.analytics.AnalyticsContext.Device;
					public putValue(param0: string, param1: any): com.segment.analytics.ValueMap;
					public putDeviceToken(param0: string): com.segment.analytics.AnalyticsContext.Device;
				}
				export class Location extends com.segment.analytics.ValueMap {
					public static class: java.lang.Class<com.segment.analytics.AnalyticsContext.Location>;
					public putLongitude(param0: number): com.segment.analytics.AnalyticsContext.Location;
					public putLatitude(param0: number): com.segment.analytics.AnalyticsContext.Location;
					public constructor();
					public putSpeed(param0: number): com.segment.analytics.AnalyticsContext.Location;
					public latitude(): number;
					public longitude(): number;
					public speed(): number;
					public constructor(param0: java.util.Map<string, any>);
					public putValue(param0: string, param1: any): com.segment.analytics.AnalyticsContext.Location;
					public constructor(param0: number);
					public putValue(param0: string, param1: any): com.segment.analytics.ValueMap;
				}
				export class Referrer extends com.segment.analytics.ValueMap {
					public static class: java.lang.Class<com.segment.analytics.AnalyticsContext.Referrer>;
					public name(): string;
					public putId(param0: string): com.segment.analytics.AnalyticsContext.Referrer;
					public putType(param0: string): com.segment.analytics.AnalyticsContext.Referrer;
					public url(): string;
					public putUrl(param0: string): com.segment.analytics.AnalyticsContext.Referrer;
					public putValue(param0: string, param1: any): com.segment.analytics.ValueMap;
					public putValue(param0: string, param1: any): com.segment.analytics.AnalyticsContext.Referrer;
					public link(): string;
					public constructor();
					public putLink(param0: string): com.segment.analytics.AnalyticsContext.Referrer;
					public putName(param0: string): com.segment.analytics.AnalyticsContext.Referrer;
					/** @deprecated */
					public putTerm(param0: string): com.segment.analytics.AnalyticsContext.Referrer;
					public constructor(param0: java.util.Map<string, any>);
					public id(): string;
					public constructor(param0: number);
					public type(): string;
				}
			}
		}
	}
}

declare module com {
	export module segment {
		export module analytics {
			export class BooleanPreference {
				public static class: java.lang.Class<com.segment.analytics.BooleanPreference>;
				public set(param0: boolean): void;
				public get(): boolean;
				public constructor(param0: globalAndroid.content.SharedPreferences, param1: string, param2: boolean);
			}
		}
	}
}

declare module com {
	export module segment {
		export module analytics {
			export class Cartographer {
				public static class: java.lang.Class<com.segment.analytics.Cartographer>;
				public toJson(param0: java.util.Map<any, any>, param1: java.io.Writer): void;
				public fromJson(param0: string): java.util.Map<string, any>;
				public fromJson(param0: java.io.Reader): java.util.Map<string, any>;
				public toJson(param0: java.util.Map<any, any>): string;
			}
			export module Cartographer {
				export class Builder {
					public static class: java.lang.Class<com.segment.analytics.Cartographer.Builder>;
					public prettyPrint(param0: boolean): com.segment.analytics.Cartographer.Builder;
					public constructor();
					public lenient(param0: boolean): com.segment.analytics.Cartographer.Builder;
					public build(): com.segment.analytics.Cartographer;
				}
			}
		}
	}
}

declare module com {
	export module segment {
		export module analytics {
			export class Client {
				public static class: java.lang.Class<com.segment.analytics.Client>;
			}
			export module Client {
				export abstract class Connection {
					public static class: java.lang.Class<com.segment.analytics.Client.Connection>;
					public close(): void;
				}
				export class HTTPException {
					public static class: java.lang.Class<com.segment.analytics.Client.HTTPException>;
				}
			}
		}
	}
}

declare module com {
	export module segment {
		export module analytics {
			export class ConnectionFactory {
				public static class: java.lang.Class<com.segment.analytics.ConnectionFactory>;
				public upload(param0: string): java.net.HttpURLConnection;
				public projectSettings(param0: string): java.net.HttpURLConnection;
				public attribution(param0: string): java.net.HttpURLConnection;
				public openConnection(param0: string): java.net.HttpURLConnection;
				public constructor();
			}
		}
	}
}

declare module com {
	export module segment {
		export module analytics {
			export abstract class Crypto {
				public static class: java.lang.Class<com.segment.analytics.Crypto>;
				public static none(): com.segment.analytics.Crypto;
				public constructor();
			}
		}
	}
}

declare module com {
	export module segment {
		export module analytics {
			export class GetAdvertisingIdTask extends globalAndroid.os.AsyncTask<globalAndroid.content.Context, java.lang.Void, globalAndroid.util.Pair<string, java.lang.Boolean>> {
				public static class: java.lang.Class<com.segment.analytics.GetAdvertisingIdTask>;
				public doInBackground(param0: native.Array<globalAndroid.content.Context>): globalAndroid.util.Pair<string, java.lang.Boolean>;
				public onPostExecute(param0: globalAndroid.util.Pair<string, java.lang.Boolean>): void;
			}
		}
	}
}

declare module com {
	export module segment {
		export module analytics {
			export abstract class IntegrationOperation {
				public static class: java.lang.Class<com.segment.analytics.IntegrationOperation>;
			}
		}
	}
}

declare module com {
	export module segment {
		export module analytics {
			export class Middleware {
				public static class: java.lang.Class<com.segment.analytics.Middleware>;
				/**
				 * Constructs a new instance of the com.segment.analytics.Middleware interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
				 */
				public constructor(implementation: {
					intercept(param0: com.segment.analytics.Middleware.Chain): void;
				});
				public constructor();
				public intercept(param0: com.segment.analytics.Middleware.Chain): void;
			}
			export module Middleware {
				export class Chain {
					public static class: java.lang.Class<com.segment.analytics.Middleware.Chain>;
					/**
					 * Constructs a new instance of the com.segment.analytics.Middleware$Chain interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
					 */
					public constructor(implementation: {
						payload(): com.segment.analytics.integrations.BasePayload;
						proceed(param0: com.segment.analytics.integrations.BasePayload): void;
					});
					public constructor();
					public proceed(param0: com.segment.analytics.integrations.BasePayload): void;
					public payload(): com.segment.analytics.integrations.BasePayload;
				}
			}
		}
	}
}

declare module com {
	export module segment {
		export module analytics {
			export class Options {
				public static class: java.lang.Class<com.segment.analytics.Options>;
				public static ALL_INTEGRATIONS_KEY: string;
				public setIntegration(param0: string, param1: boolean): com.segment.analytics.Options;
				public setIntegrationOptions(param0: string, param1: java.util.Map<string, any>): com.segment.analytics.Options;
				public setIntegrationOptions(param0: com.segment.analytics.Analytics.BundledIntegration, param1: java.util.Map<string, any>): com.segment.analytics.Options;
				public putContext(param0: string, param1: any): com.segment.analytics.Options;
				public context(): java.util.Map<string, any>;
				public setIntegration(param0: com.segment.analytics.Analytics.BundledIntegration, param1: boolean): com.segment.analytics.Options;
				public integrations(): java.util.Map<string, any>;
				public constructor();
			}
		}
	}
}

declare module com {
	export module segment {
		export module analytics {
			export abstract class PayloadQueue {
				public static class: java.lang.Class<com.segment.analytics.PayloadQueue>;
			}
			export module PayloadQueue {
				export class ElementVisitor {
					public static class: java.lang.Class<com.segment.analytics.PayloadQueue.ElementVisitor>;
					/**
					 * Constructs a new instance of the com.segment.analytics.PayloadQueue$ElementVisitor interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
					 */
					public constructor(implementation: {
						read(param0: java.io.InputStream, param1: number): boolean;
					});
					public constructor();
					public read(param0: java.io.InputStream, param1: number): boolean;
				}
				export class MemoryQueue extends com.segment.analytics.PayloadQueue {
					public static class: java.lang.Class<com.segment.analytics.PayloadQueue.MemoryQueue>;
					public close(): void;
				}
				export class PersistentQueue extends com.segment.analytics.PayloadQueue {
					public static class: java.lang.Class<com.segment.analytics.PayloadQueue.PersistentQueue>;
					public close(): void;
				}
			}
		}
	}
}

declare module com {
	export module segment {
		export module analytics {
			export class ProjectSettings extends com.segment.analytics.ValueMap {
				public static class: java.lang.Class<com.segment.analytics.ProjectSettings>;
			}
			export module ProjectSettings {
				export class Cache extends com.segment.analytics.ValueMap.Cache<com.segment.analytics.ProjectSettings> {
					public static class: java.lang.Class<com.segment.analytics.ProjectSettings.Cache>;
					public create(param0: java.util.Map<string, any>): com.segment.analytics.ProjectSettings;
				}
			}
		}
	}
}

declare module com {
	export module segment {
		export module analytics {
			export class Properties extends com.segment.analytics.ValueMap {
				public static class: java.lang.Class<com.segment.analytics.Properties>;
				public putOrderId(param0: string): com.segment.analytics.Properties;
				public putName(param0: string): com.segment.analytics.Properties;
				public putPrice(param0: number): com.segment.analytics.Properties;
				public putTitle(param0: string): com.segment.analytics.Properties;
				public url(): string;
				public shipping(): number;
				public constructor();
				public putProducts(param0: native.Array<com.segment.analytics.Properties.Product>): com.segment.analytics.Properties;
				public putTax(param0: number): com.segment.analytics.Properties;
				public coupon(): string;
				public putValue(param0: string, param1: any): com.segment.analytics.Properties;
				public putUrl(param0: string): com.segment.analytics.Properties;
				public title(): string;
				public subtotal(): number;
				public category(): string;
				public putCategory(param0: string): com.segment.analytics.Properties;
				public putReferrer(param0: string): com.segment.analytics.Properties;
				public constructor(param0: java.util.Map<string, any>);
				public total(): number;
				public discount(): number;
				public tax(): number;
				public putCurrency(param0: string): com.segment.analytics.Properties;
				public putProductId(param0: string): com.segment.analytics.Properties;
				public orderId(): string;
				/** @deprecated */
				public products(param0: native.Array<com.segment.analytics.Properties.Product>): java.util.List<com.segment.analytics.Properties.Product>;
				public putValue(param0: string, param1: any): com.segment.analytics.ValueMap;
				public putShipping(param0: number): com.segment.analytics.Properties;
				public putRevenue(param0: number): com.segment.analytics.Properties;
				/** @deprecated */
				public putSubtotal(): number;
				public putValue(param0: number): com.segment.analytics.Properties;
				public putDiscount(param0: number): com.segment.analytics.Properties;
				public productId(): string;
				public products(): java.util.List<com.segment.analytics.Properties.Product>;
				public referrer(): string;
				public value(): number;
				public price(): number;
				public putTotal(param0: number): com.segment.analytics.Properties;
				public putSku(param0: string): com.segment.analytics.Properties;
				public name(): string;
				public sku(): string;
				public putCoupon(param0: string): com.segment.analytics.Properties;
				public path(): string;
				public putPath(param0: string): com.segment.analytics.Properties;
				public constructor(param0: number);
				public currency(): string;
				public putRepeatCustomer(param0: boolean): com.segment.analytics.Properties;
				public isRepeatCustomer(): boolean;
				public putSubtotal(param0: number): com.segment.analytics.Properties;
				public revenue(): number;
			}
			export module Properties {
				export class Product extends com.segment.analytics.ValueMap {
					public static class: java.lang.Class<com.segment.analytics.Properties.Product>;
					public name(): string;
					public constructor();
					public constructor(param0: string, param1: string, param2: number);
					public sku(): string;
					public putValue(param0: string, param1: any): com.segment.analytics.Properties.Product;
					public constructor(param0: java.util.Map<string, any>);
					public id(): string;
					public price(): number;
					public constructor(param0: number);
					public putName(param0: string): com.segment.analytics.Properties.Product;
					public putValue(param0: string, param1: any): com.segment.analytics.ValueMap;
				}
			}
		}
	}
}

declare module com {
	export module segment {
		export module analytics {
			export class QueueFile {
				public static class: java.lang.Class<com.segment.analytics.QueueFile>;
				public remove(): void;
				public close(): void;
				public constructor(param0: java.io.File);
				public add(param0: native.Array<number>): void;
				public peek(): native.Array<number>;
				public clear(): void;
				public isEmpty(): boolean;
				public forEach(param0: com.segment.analytics.PayloadQueue.ElementVisitor): number;
				public toString(): string;
				public remove(param0: number): void;
				public add(param0: native.Array<number>, param1: number, param2: number): void;
				public size(): number;
			}
			export module QueueFile {
				export class Element {
					public static class: java.lang.Class<com.segment.analytics.QueueFile.Element>;
					public toString(): string;
				}
				export class ElementInputStream {
					public static class: java.lang.Class<com.segment.analytics.QueueFile.ElementInputStream>;
					public read(param0: native.Array<number>, param1: number, param2: number): number;
					public read(): number;
				}
			}
		}
	}
}

declare module com {
	export module segment {
		export module analytics {
			export class RealMiddlewareChain extends com.segment.analytics.Middleware.Chain {
				public static class: java.lang.Class<com.segment.analytics.RealMiddlewareChain>;
				public proceed(param0: com.segment.analytics.integrations.BasePayload): void;
				public payload(): com.segment.analytics.integrations.BasePayload;
			}
		}
	}
}

declare module com {
	export module segment {
		export module analytics {
			export class SegmentIntegration extends com.segment.analytics.integrations.Integration<java.lang.Void> {
				public static class: java.lang.Class<com.segment.analytics.SegmentIntegration>;
				public identify(param0: com.segment.analytics.integrations.IdentifyPayload): void;
				public group(param0: com.segment.analytics.integrations.GroupPayload): void;
				public screen(param0: com.segment.analytics.integrations.ScreenPayload): void;
				public track(param0: com.segment.analytics.integrations.TrackPayload): void;
				public alias(param0: com.segment.analytics.integrations.AliasPayload): void;
				public flush(): void;
			}
			export module SegmentIntegration {
				export class BatchPayloadWriter {
					public static class: java.lang.Class<com.segment.analytics.SegmentIntegration.BatchPayloadWriter>;
					public close(): void;
				}
				export class PayloadWriter extends com.segment.analytics.PayloadQueue.ElementVisitor {
					public static class: java.lang.Class<com.segment.analytics.SegmentIntegration.PayloadWriter>;
					public read(param0: java.io.InputStream, param1: number): boolean;
				}
				export class SegmentDispatcherHandler {
					public static class: java.lang.Class<com.segment.analytics.SegmentIntegration.SegmentDispatcherHandler>;
					public handleMessage(param0: globalAndroid.os.Message): void;
				}
			}
		}
	}
}

declare module com {
	export module segment {
		export module analytics {
			export class Stats {
				public static class: java.lang.Class<com.segment.analytics.Stats>;
			}
			export module Stats {
				export class StatsHandler {
					public static class: java.lang.Class<com.segment.analytics.Stats.StatsHandler>;
					public handleMessage(param0: globalAndroid.os.Message): void;
				}
			}
		}
	}
}

declare module com {
	export module segment {
		export module analytics {
			export class StatsSnapshot {
				public static class: java.lang.Class<com.segment.analytics.StatsSnapshot>;
				public timestamp: number;
				public flushCount: number;
				public flushEventCount: number;
				public integrationOperationCount: number;
				public integrationOperationDuration: number;
				public integrationOperationAverageDuration: number;
				public integrationOperationDurationByIntegration: java.util.Map<string, java.lang.Long>;
				public constructor(param0: number, param1: number, param2: number, param3: number, param4: number, param5: java.util.Map<string, java.lang.Long>);
				public toString(): string;
			}
		}
	}
}

declare module com {
	export module segment {
		export module analytics {
			export class Traits extends com.segment.analytics.ValueMap {
				public static class: java.lang.Class<com.segment.analytics.Traits>;
				public putFax(param0: string): com.segment.analytics.Traits;
				public putIndustry(param0: string): com.segment.analytics.Traits;
				public industry(): string;
				public putAddress(param0: com.segment.analytics.Traits.Address): com.segment.analytics.Traits;
				public putName(param0: string): com.segment.analytics.Traits;
				public avatar(): string;
				public phone(): string;
				public createdAt(): string;
				public putTitle(param0: string): com.segment.analytics.Traits;
				public currentId(): string;
				public constructor();
				public putValue(param0: string, param1: any): com.segment.analytics.ValueMap;
				public putWebsite(param0: string): com.segment.analytics.Traits;
				public putUsername(param0: string): com.segment.analytics.Traits;
				public putAge(param0: number): com.segment.analytics.Traits;
				public age(): number;
				public address(): com.segment.analytics.Traits.Address;
				public firstName(): string;
				public userId(): string;
				public putCreatedAt(param0: string): com.segment.analytics.Traits;
				public gender(): string;
				public title(): string;
				public unmodifiableCopy(): com.segment.analytics.Traits;
				public lastName(): string;
				public description(): string;
				public putEmployees(param0: number): com.segment.analytics.Traits;
				public email(): string;
				public putPhone(param0: string): com.segment.analytics.Traits;
				public putBirthday(param0: java.util.Date): com.segment.analytics.Traits;
				public putDescription(param0: string): com.segment.analytics.Traits;
				public putGender(param0: string): com.segment.analytics.Traits;
				public putValue(param0: string, param1: any): com.segment.analytics.Traits;
				public birthday(): java.util.Date;
				public constructor(param0: java.util.Map<string, any>);
				public putFirstName(param0: string): com.segment.analytics.Traits;
				public putEmail(param0: string): com.segment.analytics.Traits;
				public name(): string;
				public website(): string;
				public employees(): number;
				public constructor(param0: number);
				public putAvatar(param0: string): com.segment.analytics.Traits;
				public putLastName(param0: string): com.segment.analytics.Traits;
				public anonymousId(): string;
				public fax(): string;
				public username(): string;
			}
			export module Traits {
				export class Address extends com.segment.analytics.ValueMap {
					public static class: java.lang.Class<com.segment.analytics.Traits.Address>;
					public street(): string;
					public city(): string;
					public putState(param0: string): com.segment.analytics.Traits.Address;
					public putValue(param0: string, param1: any): com.segment.analytics.ValueMap;
					public putCity(param0: string): com.segment.analytics.Traits.Address;
					public postalCode(): string;
					public state(): string;
					public putPostalCode(param0: string): com.segment.analytics.Traits.Address;
					public constructor();
					public putValue(param0: string, param1: any): com.segment.analytics.Traits.Address;
					public putStreet(param0: string): com.segment.analytics.Traits.Address;
					public constructor(param0: java.util.Map<string, any>);
					public constructor(param0: number);
					public putCountry(param0: string): com.segment.analytics.Traits.Address;
					public country(): string;
				}
				export class Cache extends com.segment.analytics.ValueMap.Cache<com.segment.analytics.Traits> {
					public static class: java.lang.Class<com.segment.analytics.Traits.Cache>;
					public create(param0: java.util.Map<string, any>): com.segment.analytics.Traits;
				}
			}
		}
	}
}

declare module com {
	export module segment {
		export module analytics {
			export class ValueMap extends java.util.Map<string, any> {
				public static class: java.lang.Class<com.segment.analytics.ValueMap>;
				public get(param0: any): any;
				public getChar(param0: string, param1: string): string;
				public keySet(): java.util.Set<string>;
				public putAll(param0: java.util.Map<any, any>): void;
				public containsKey(param0: any): boolean;
				public constructor();
				public getFloat(param0: string, param1: number): number;
				public getValueMap(param0: string, param1: java.lang.Class<any>): com.segment.analytics.ValueMap;
				public toStringMap(): java.util.Map<string, string>;
				public putValue(param0: string, param1: any): com.segment.analytics.ValueMap;
				public remove(param0: any): any;
				public hashCode(): number;
				public clear(): void;
				public equals(param0: any): boolean;
				public getDouble(param0: string, param1: number): number;
				public getString(param0: string): string;
				public isEmpty(): boolean;
				public containsValue(param0: any): boolean;
				public values(): java.util.Collection<any>;
				public getBoolean(param0: string, param1: boolean): boolean;
				public getEnum(param0: java.lang.Class<any>, param1: string): java.lang.Enum<any>;
				public getInt(param0: string, param1: number): number;
				public getList(param0: any, param1: java.lang.Class<any>): java.util.List<any>;
				public toString(): string;
				public entrySet(): java.util.Set<java.util.Map.Entry<string, any>>;
				public size(): number;
				public getValueMap(param0: any): com.segment.analytics.ValueMap;
				public constructor(param0: java.util.Map<string, any>);
				public getLong(param0: string, param1: number): number;
				public constructor(param0: number);
				public put(param0: string, param1: any): any;
				public toJsonObject(): org.json.JSONObject;
			}
			export module ValueMap {
				export class Cache<T> extends java.lang.Object {
					public static class: java.lang.Class<com.segment.analytics.ValueMap.Cache<any>>;
				}
			}
		}
	}
}

declare module com {
	export module segment {
		export module analytics {
			export module core {
				export class BuildConfig {
					public static class: java.lang.Class<com.segment.analytics.core.BuildConfig>;
					public static DEBUG: boolean;
					public static APPLICATION_ID: string;
					public static BUILD_TYPE: string;
					public static FLAVOR: string;
					public static VERSION_CODE: number;
					public static VERSION_NAME: string;
					public constructor();
				}
			}
		}
	}
}

declare module com {
	export module segment {
		export module analytics {
			export module core {
				export class R {
					public static class: java.lang.Class<com.segment.analytics.core.R>;
					public constructor();
				}
			}
		}
	}
}

declare module com {
	export module segment {
		export module analytics {
			export module integrations {
				export class AliasPayload extends com.segment.analytics.integrations.BasePayload {
					public static class: java.lang.Class<com.segment.analytics.integrations.AliasPayload>;
					public toString(): string;
					public toBuilder(): com.segment.analytics.integrations.BasePayload.Builder<any, any>;
					public previousId(): string;
					public toBuilder(): com.segment.analytics.integrations.AliasPayload.Builder;
				}
				export module AliasPayload {
					export class Builder extends com.segment.analytics.integrations.BasePayload.Builder<any, any> {
						public static class: java.lang.Class<com.segment.analytics.integrations.AliasPayload.Builder>;
						public realBuild(param0: string, param1: java.util.Date, param2: java.util.Map<string, any>, param3: java.util.Map<string, any>, param4: string, param5: string): com.segment.analytics.integrations.AliasPayload;
						public constructor();
						public previousId(param0: string): com.segment.analytics.integrations.AliasPayload.Builder;
					}
				}
			}
		}
	}
}

declare module com {
	export module segment {
		export module analytics {
			export module integrations {
				export abstract class BasePayload extends com.segment.analytics.ValueMap {
					public static class: java.lang.Class<com.segment.analytics.integrations.BasePayload>;
					public type(): com.segment.analytics.integrations.BasePayload.Type;
					public messageId(): string;
					public anonymousId(): string;
					public userId(): string;
					public timestamp(): java.util.Date;
					public toBuilder(): com.segment.analytics.integrations.BasePayload.Builder<any, any>;
					public integrations(): com.segment.analytics.ValueMap;
					public putValue(param0: string, param1: any): com.segment.analytics.integrations.BasePayload;
					public putValue(param0: string, param1: any): com.segment.analytics.ValueMap;
					public context(): com.segment.analytics.AnalyticsContext;
				}
				export module BasePayload {
					export abstract class Builder<P, B> extends java.lang.Object {
						public static class: java.lang.Class<com.segment.analytics.integrations.BasePayload.Builder<any, any>>;
						public integration(param0: string, param1: boolean): B;
						public timestamp(param0: java.util.Date): B;
						public integration(param0: string, param1: java.util.Map<string, any>): B;
						public context(param0: java.util.Map<string, any>): B;
						public anonymousId(param0: string): B;
						public integrations(param0: java.util.Map<string, any>): B;
						public messageId(param0: string): B;
						public build(): P;
						public userId(param0: string): B;
					}
					export class Channel {
						public static class: java.lang.Class<com.segment.analytics.integrations.BasePayload.Channel>;
						public static browser: com.segment.analytics.integrations.BasePayload.Channel;
						public static mobile: com.segment.analytics.integrations.BasePayload.Channel;
						public static server: com.segment.analytics.integrations.BasePayload.Channel;
						public static values(): native.Array<com.segment.analytics.integrations.BasePayload.Channel>;
						public static valueOf(param0: string): com.segment.analytics.integrations.BasePayload.Channel;
					}
					export class Type {
						public static class: java.lang.Class<com.segment.analytics.integrations.BasePayload.Type>;
						public static alias: com.segment.analytics.integrations.BasePayload.Type;
						public static group: com.segment.analytics.integrations.BasePayload.Type;
						public static identify: com.segment.analytics.integrations.BasePayload.Type;
						public static screen: com.segment.analytics.integrations.BasePayload.Type;
						public static track: com.segment.analytics.integrations.BasePayload.Type;
						public static values(): native.Array<com.segment.analytics.integrations.BasePayload.Type>;
						public static valueOf(param0: string): com.segment.analytics.integrations.BasePayload.Type;
					}
				}
			}
		}
	}
}

declare module com {
	export module segment {
		export module analytics {
			export module integrations {
				export class GroupPayload extends com.segment.analytics.integrations.BasePayload {
					public static class: java.lang.Class<com.segment.analytics.integrations.GroupPayload>;
					public toBuilder(): com.segment.analytics.integrations.GroupPayload.Builder;
					public toString(): string;
					public traits(): com.segment.analytics.Traits;
					public constructor();
					public toBuilder(): com.segment.analytics.integrations.BasePayload.Builder<any, any>;
					public constructor(param0: java.util.Map<string, any>);
					public constructor(param0: string, param1: java.util.Date, param2: java.util.Map<string, any>, param3: java.util.Map<string, any>, param4: string, param5: string, param6: string, param7: java.util.Map<string, any>);
					public constructor(param0: number);
					public groupId(): string;
				}
				export module GroupPayload {
					export class Builder extends com.segment.analytics.integrations.BasePayload.Builder<any, any> {
						public static class: java.lang.Class<com.segment.analytics.integrations.GroupPayload.Builder>;
						public constructor();
						public groupId(param0: string): com.segment.analytics.integrations.GroupPayload.Builder;
						public traits(param0: java.util.Map<string, any>): com.segment.analytics.integrations.GroupPayload.Builder;
						public realBuild(param0: string, param1: java.util.Date, param2: java.util.Map<string, any>, param3: java.util.Map<string, any>, param4: string, param5: string): com.segment.analytics.integrations.GroupPayload;
					}
				}
			}
		}
	}
}

declare module com {
	export module segment {
		export module analytics {
			export module integrations {
				export class IdentifyPayload extends com.segment.analytics.integrations.BasePayload {
					public static class: java.lang.Class<com.segment.analytics.integrations.IdentifyPayload>;
					public toBuilder(): com.segment.analytics.integrations.IdentifyPayload.Builder;
					public toString(): string;
					public traits(): com.segment.analytics.Traits;
					public toBuilder(): com.segment.analytics.integrations.BasePayload.Builder<any, any>;
				}
				export module IdentifyPayload {
					export class Builder extends com.segment.analytics.integrations.BasePayload.Builder<any, any> {
						public static class: java.lang.Class<com.segment.analytics.integrations.IdentifyPayload.Builder>;
						public constructor();
						public traits(param0: java.util.Map<string, any>): com.segment.analytics.integrations.IdentifyPayload.Builder;
					}
				}
			}
		}
	}
}

declare module com {
	export module segment {
		export module analytics {
			export module integrations {
				export abstract class Integration<T> extends java.lang.Object {
					public static class: java.lang.Class<com.segment.analytics.integrations.Integration<any>>;
					public onActivityStarted(param0: globalAndroid.app.Activity): void;
					public onActivityCreated(param0: globalAndroid.app.Activity, param1: globalAndroid.os.Bundle): void;
					public reset(): void;
					public getUnderlyingInstance(): T;
					public flush(): void;
					public identify(param0: com.segment.analytics.integrations.IdentifyPayload): void;
					public track(param0: com.segment.analytics.integrations.TrackPayload): void;
					public onActivitySaveInstanceState(param0: globalAndroid.app.Activity, param1: globalAndroid.os.Bundle): void;
					public onActivityStopped(param0: globalAndroid.app.Activity): void;
					public constructor();
					public screen(param0: com.segment.analytics.integrations.ScreenPayload): void;
					public group(param0: com.segment.analytics.integrations.GroupPayload): void;
					public alias(param0: com.segment.analytics.integrations.AliasPayload): void;
					public onActivityResumed(param0: globalAndroid.app.Activity): void;
					public onActivityPaused(param0: globalAndroid.app.Activity): void;
					public onActivityDestroyed(param0: globalAndroid.app.Activity): void;
				}
				export module Integration {
					export class Factory {
						public static class: java.lang.Class<com.segment.analytics.integrations.Integration.Factory>;
						/**
						 * Constructs a new instance of the com.segment.analytics.integrations.Integration$Factory interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
						 */
						public constructor(implementation: {
							create(param0: com.segment.analytics.ValueMap, param1: com.segment.analytics.Analytics): com.segment.analytics.integrations.Integration<any>;
							key(): string;
						});
						public constructor();
						public create(param0: com.segment.analytics.ValueMap, param1: com.segment.analytics.Analytics): com.segment.analytics.integrations.Integration<any>;
						public key(): string;
					}
				}
			}
		}
	}
}

declare module com {
	export module segment {
		export module analytics {
			export module integrations {
				export class Logger {
					public static class: java.lang.Class<com.segment.analytics.integrations.Logger>;
					public logLevel: com.segment.analytics.Analytics.LogLevel;
					public constructor(param0: string, param1: com.segment.analytics.Analytics.LogLevel);
					public info(param0: string, param1: native.Array<any>): void;
					public static with(param0: com.segment.analytics.Analytics.LogLevel): com.segment.analytics.integrations.Logger;
					public error(param0: java.lang.Throwable, param1: string, param2: native.Array<any>): void;
					public verbose(param0: string, param1: native.Array<any>): void;
					public subLog(param0: string): com.segment.analytics.integrations.Logger;
					public debug(param0: string, param1: native.Array<any>): void;
				}
			}
		}
	}
}

declare module com {
	export module segment {
		export module analytics {
			export module integrations {
				export class ScreenPayload extends com.segment.analytics.integrations.BasePayload {
					public static class: java.lang.Class<com.segment.analytics.integrations.ScreenPayload>;
					public name(): string;
					public toString(): string;
					public toBuilder(): com.segment.analytics.integrations.ScreenPayload.Builder;
					public toBuilder(): com.segment.analytics.integrations.BasePayload.Builder<any, any>;
					/** @deprecated */
					public category(): string;
					public event(): string;
					public properties(): com.segment.analytics.Properties;
				}
				export module ScreenPayload {
					export class Builder extends com.segment.analytics.integrations.BasePayload.Builder<any, any> {
						public static class: java.lang.Class<com.segment.analytics.integrations.ScreenPayload.Builder>;
						public properties(param0: java.util.Map<string, any>): com.segment.analytics.integrations.ScreenPayload.Builder;
						public constructor();
						/** @deprecated */
						public category(param0: string): com.segment.analytics.integrations.ScreenPayload.Builder;
						public realBuild(param0: string, param1: java.util.Date, param2: java.util.Map<string, any>, param3: java.util.Map<string, any>, param4: string, param5: string): com.segment.analytics.integrations.ScreenPayload;
						public name(param0: string): com.segment.analytics.integrations.ScreenPayload.Builder;
					}
				}
			}
		}
	}
}

declare module com {
	export module segment {
		export module analytics {
			export module integrations {
				export class TrackPayload extends com.segment.analytics.integrations.BasePayload {
					public static class: java.lang.Class<com.segment.analytics.integrations.TrackPayload>;
					public toString(): string;
					public toBuilder(): com.segment.analytics.integrations.TrackPayload.Builder;
					public toBuilder(): com.segment.analytics.integrations.BasePayload.Builder<any, any>;
					public event(): string;
					public properties(): com.segment.analytics.Properties;
				}
				export module TrackPayload {
					export class Builder extends com.segment.analytics.integrations.BasePayload.Builder<any, any> {
						public static class: java.lang.Class<com.segment.analytics.integrations.TrackPayload.Builder>;
						public event(param0: string): com.segment.analytics.integrations.TrackPayload.Builder;
						public constructor();
						public properties(param0: java.util.Map<string, any>): com.segment.analytics.integrations.TrackPayload.Builder;
						public realBuild(param0: string, param1: java.util.Date, param2: java.util.Map<string, any>, param3: java.util.Map<string, any>, param4: string, param5: string): com.segment.analytics.integrations.TrackPayload;
					}
				}
			}
		}
	}
}

declare module com {
	export module segment {
		export module analytics {
			export module internal {
				export class Iso8601Utils {
					public static class: java.lang.Class<com.segment.analytics.internal.Iso8601Utils>;
					public static parse(param0: string): java.util.Date;
					public static format(param0: java.util.Date): string;
				}
			}
		}
	}
}

declare module com {
	export module segment {
		export module analytics {
			export module internal {
				export class Private {
					public static class: java.lang.Class<com.segment.analytics.internal.Private>;
					/**
					 * Constructs a new instance of the com.segment.analytics.internal.Private interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
					 */
					public constructor(implementation: {
					});
					public constructor();
				}
			}
		}
	}
}

declare module com {
	export module segment {
		export module analytics {
			export module internal {
				export class Utils {
					public static class: java.lang.Class<com.segment.analytics.internal.Utils>;
					public static THREAD_PREFIX: string;
					public static DEFAULT_FLUSH_INTERVAL: number;
					public static DEFAULT_FLUSH_QUEUE_SIZE: number;
					public static DEFAULT_COLLECT_DEVICE_ID: boolean;
					public static newSet(param0: native.Array<any>): java.util.Set<any>;
					public static getInputStream(param0: java.net.HttpURLConnection): java.io.InputStream;
					public static toISO8601String(param0: java.util.Date): string;
					public static createMap(): java.util.Map<any, any>;
					public static transform(param0: java.util.Map<any, any>, param1: java.util.Map<any, any>): java.util.Map<any, any>;
					public static isNullOrEmpty(param0: string): boolean;
					public static immutableCopyOf(param0: java.util.Map<any, any>): java.util.Map<any, any>;
					public static isOnClassPath(param0: string): boolean;
					public static isNullOrEmpty(param0: native.Array<any>): boolean;
					public static buffer(param0: java.io.InputStream): java.io.BufferedReader;
					public static closeQuietly(param0: java.io.Closeable): void;
					public static readFully(param0: java.io.InputStream): string;
					public static getSystemService(param0: globalAndroid.content.Context, param1: string): any;
					public static readFully(param0: java.io.BufferedReader): string;
					public static getSegmentSharedPreferences(param0: globalAndroid.content.Context, param1: string): globalAndroid.content.SharedPreferences;
					public static parseISO8601Date(param0: string): java.util.Date;
					public static coerceToFloat(param0: any, param1: number): number;
					public static isNullOrEmpty(param0: java.util.Collection<any>): boolean;
					public static isConnected(param0: globalAndroid.content.Context): boolean;
					public static toJsonObject(param0: java.util.Map<string, any>): org.json.JSONObject;
					public static hasPermission(param0: globalAndroid.content.Context, param1: string): boolean;
					/** @deprecated */
					public static toISO8601Date(param0: string): java.util.Date;
					public static assertNotNullOrEmpty(param0: string, param1: string): string;
					public static assertNotNull(param0: any, param1: string): any;
					public static createDirectory(param0: java.io.File): void;
					public static getResourceString(param0: globalAndroid.content.Context, param1: string): string;
					/** @deprecated */
					public static toISO8601Date(param0: java.util.Date): string;
					public static assertNotNullOrEmpty(param0: java.util.Map<any, any>, param1: string): java.util.Map<any, any>;
					public static immutableCopyOf(param0: java.util.List<any>): java.util.List<any>;
					public static getDeviceId(param0: globalAndroid.content.Context): string;
					public static isNullOrEmpty(param0: java.util.Map<any, any>): boolean;
					public static copySharedPreferences(param0: globalAndroid.content.SharedPreferences, param1: globalAndroid.content.SharedPreferences): void;
					public static hasFeature(param0: globalAndroid.content.Context, param1: string): boolean;
				}
				export module Utils {
					export class AnalyticsNetworkExecutorService {
						public static class: java.lang.Class<com.segment.analytics.internal.Utils.AnalyticsNetworkExecutorService>;
						public constructor();
					}
					export class AnalyticsThread {
						public static class: java.lang.Class<com.segment.analytics.internal.Utils.AnalyticsThread>;
						public run(): void;
						public constructor(param0: java.lang.Runnable);
					}
					export class AnalyticsThreadFactory {
						public static class: java.lang.Class<com.segment.analytics.internal.Utils.AnalyticsThreadFactory>;
						public constructor();
						public newThread(param0: java.lang.Runnable): java.lang.Thread;
					}
					export class NullableConcurrentHashMap<K, V> extends java.util.concurrent.ConcurrentHashMap<any, any> {
						public static class: java.lang.Class<com.segment.analytics.internal.Utils.NullableConcurrentHashMap<any, any>>;
						public constructor();
						public put(param0: any, param1: any): any;
						public putAll(param0: java.util.Map<any, any>): void;
						public constructor(param0: java.util.Map<any, any>);
					}
				}
			}
		}
	}
}

//Generics information:
//com.segment.analytics.Analytics.Callback:1
//com.segment.analytics.ValueMap.Cache:1
//com.segment.analytics.integrations.BasePayload.Builder:2
//com.segment.analytics.integrations.Integration:1
//com.segment.analytics.internal.Utils.NullableConcurrentHashMap:2

