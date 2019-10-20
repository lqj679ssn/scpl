/*
jsonpath


listprint:

console.log([...new Set(         )].sort().map(c => JSON.stringify(c)).join(" | "))
*/

import { ShortcutsActionCategory } from "./Strings/ShortcutsActionCategory";
import { ShortcutsActionSubcategory } from "./Strings/ShortcutsActionSubcategory";
import { ShortcutsActionIODataType } from "./Strings/ShortcutsActionIODataType";
import { ShortcutsActionSupportedUserInterface } from "./Strings/ShortcutsActionSupportedUserInterface";
import { ShortcutsActionIconName } from "./Strings/ShortcutsActionIconName";
import { ShortcutsAppIdentifier } from "./Strings/ShortcutsAppIdentifier";
import { ShortcutsActionClass } from "./Strings/ShortcutsActionClass";
import { ShortcutsActionEnvironments } from "./Strings/ShortcutsActionEnvironments";
import { ShortcutsActionAceCommandClass } from "./Strings/ShortcutsActionAceCommandClass";
import { ShortcutsActionAttribution } from "./Strings/ShortcutsActionAttribution";

import { CoercionTypeClass } from "../../WFTypes/Types";

import { ShortcutsParameterSpec } from "./ShortcutsParameterSpec";
import { ShortcutsResourceSpec } from "./ShortcutsResourceSpec";
import { ShortcutsActionIdentifier } from "./Strings/ShortcutsActionIdentifier";

export type ShortcutsActionIOSpec = {
	Multiple?: boolean;
	Required?: boolean;
	Types?: ShortcutsActionIODataType[];
};

export type ShortcutsParameterOverrideSpec = {
	[key: string]: {
		DisallowedVariableTypes?: ("Ask" | "Variable")[];
		Key?: string;
		IntentEnumOverrides?: {
			[key: string]: string;
		};
		KeyboardType?: "URL";
		Label?: string;
		Hidden?: boolean;
	};
};

export type ShortcutsActionBaseSpec = {
	ActionClass: ShortcutsActionClass;
	ActionKeywords?: string[];
	AppIdentifier?: ShortcutsAppIdentifier;
	Category?: ShortcutsActionCategory;
	Categories?: ShortcutsActionCategory[];
	Subcategory?: ShortcutsActionSubcategory;
	ParameterSummary?: string | { [values: string]: string };
	Description?: {
		DescriptionNote?: string;
		DescriptionAttribution?: {
			Description: string;
			Link: {
				Text: "The Weather Channel";
				URL: "https://www.weather.com";
			};
		};
		DescriptionInput?: string;
		DescriptionSummary?: string;
		DescriptionResult?: string;
	};
	Discontinued?: boolean;
	Input?: ShortcutsActionIOSpec & {
		TypePassthrough?: boolean;
		ParameterKey?: string;
	};
	Output?: ShortcutsActionIOSpec & { OutputName?: string };
	IconName?: ShortcutsActionIconName;
	InputPassthrough?: boolean;
	CreationDate?: string;
	LastModifiedDate?: string;
	Name?: string;
	Parameters?: ShortcutsParameterSpec[];
	RequiredResources?: ShortcutsResourceSpec[];
	IntentIdentifier?: string;
	UserInterfaces?: ShortcutsActionSupportedUserInterface[];
	UnsupportedEnvironments?: ShortcutsActionEnvironments[];
	ShortName?: string;
	SnappingPassthrough?: boolean;
	SuggestedNever?: boolean;
	SuggestedAsInitialAction?: boolean;
	ParameterCollapsingBehavior?: "Never";
	BlockInfo?: {
		Example?: string;
		Completion?: string;
	};
	AppSection?: "CloudApp" | "Pinboard";
	SettingsUI?: {
		ViewControllerClass: string;
		ShowWhenResourcesUnavailable?: boolean;
	};
	RunningUIComponentClass?: string;
	ConfigurationUIComponentClass?: "WFHomeAccessoryActionComponent";
	AppInfo?: "Evernote";
	OutputName?: string;
	IsDebugAction?: boolean;
	IntentName?: string;
	Discoverable?: boolean | "NO";
	ResidentCompatible?: boolean;
	Constructor?: boolean;
	Attribution?: ShortcutsActionAttribution;
	ParameterOverrides?: ShortcutsParameterOverrideSpec;
	InProcess?: boolean;
	BlocksOutput?: boolean;
	SkipSiriExecution?: boolean;
	WatchCompatible?: boolean;
	RunningViewClass?: "WFDictateTextActionView";
};

export type ShortcutsStartCallActionSpec = ShortcutsActionBaseSpec & {
	WFStartCallActionType: "FaceTime" | "Phone";
};

export type ShortcutsACESetSettingActionSpec = ShortcutsActionBaseSpec & {
	ACECommandClass: ShortcutsActionAceCommandClass;
	ACESettingValueKey: string;
};

export type ShortcutsCoercionActionSpec = ShortcutsActionBaseSpec & {
	CoercionItemClass: CoercionTypeClass;
};

export type ShortcutsContentItemFilterActionSpec = ShortcutsActionBaseSpec & {
	WFContentItemClass: CoercionTypeClass;
	WFContentItemDefaultProperty:
		| "Album"
		| "Artist"
		| "Body"
		| "Calendar"
		| "List"
		| "Value";
};

export type ShortcutsGetLatestPhotosActionSpec = ShortcutsActionBaseSpec & {
	WFGetLatestPhotosActionType:
		| "Photo"
		| "Screenshot"
		| "Video"
		| "Burst"
		| "Live Photo";
};

export type ShortcutsGetUpcomingCalendarItemsActionSpec = ShortcutsActionBaseSpec & {
	WFGetUpcomingItemType: 0 | 1;
};

export type ShortcutsSocialActionSpec = ShortcutsActionBaseSpec & {
	ConvertsAnimatedImagesToVideo: boolean;
	ICActionIdentifier:
		| "com.facebook.Facebook.ShareExtension"
		| "com.atebits.Tweetie2.ShareExtension";
};

export type ShortcutsContentItemPropertiesActionSpec = ShortcutsActionBaseSpec & {
	WFContentItemClass: CoercionTypeClass;
};

export type ShortcutsRemoveCalendarItemsActionSpec = ShortcutsActionBaseSpec & {
	WFCalendarItemEntityType: "Event" | "Reminder";
};

export type ShortcutsFindHealthSamplesActionSpec = ShortcutsContentItemFilterActionSpec;
export type ShortcutsToggleFlashlightActionSpec = ShortcutsACESetSettingActionSpec;
export type ShortcutsSetBrightnessActionSpec = ShortcutsACESetSettingActionSpec;
export type ShortcutsACESetWiFiActionSpec = ShortcutsACESetSettingActionSpec;

export type ShortcutsSelectContactsActionSpec = ShortcutsActionBaseSpec & {
	ContactProperties: ("Email" | "Phone")[];
};

export type ShortcutsSendMessageActionSpec = ShortcutsActionBaseSpec & {
	RateLimit: {
		Delay: number;
		Threshold: number;
		Timeout: number;
	};
};

export type ShortcutsSkipSongActionSpec = ShortcutsActionBaseSpec & {
	WFSkipSongActionMode: "Back" | "Forward";
};

export type ShortcutsTextComponentsActionSpec = ShortcutsActionBaseSpec & {
	WFTextComponentsMode: "Combine" | "Split";
};

export type ShortcutsHandleCustomIntentActionSpec = ShortcutsActionBaseSpec & {
	AppIdentifier: ShortcutsAppIdentifier;
};

export type ShortcutsSearchiTunesActionSpec = ShortcutsActionBaseSpec & {
	Storefront: "iTunes" | "Podcasts";
};

type _ac<N extends string> = { ActionClass: N };

export type ShortcutsActionSpec =
	| ShortcutsActionBaseSpec
	| (ShortcutsStartCallActionSpec & _ac<"WFStartCallAction">)
	| (ShortcutsACESetSettingActionSpec & _ac<"WFACESetSettingAction">)
	| (ShortcutsCoercionActionSpec & _ac<"WFCoercionAction">)
	| (ShortcutsContentItemFilterActionSpec & _ac<"WFContentItemFilterAction">)
	| (ShortcutsFindHealthSamplesActionSpec & _ac<"WFFindHealthSamplesAction">)
	| (ShortcutsToggleFlashlightActionSpec & _ac<"WFToggleFlashlightAction">)
	| (ShortcutsGetLatestPhotosActionSpec & _ac<"WFGetLatestPhotosAction">)
	| (ShortcutsGetUpcomingCalendarItemsActionSpec &
			_ac<"WFGetUpcomingCalendarItemsAction">)
	| (ShortcutsSocialActionSpec & _ac<"WFSocialAction">)
	| (ShortcutsContentItemPropertiesActionSpec &
			_ac<"WFContentItemPropertiesAction">)
	| (ShortcutsRemoveCalendarItemsActionSpec &
			_ac<"WFRemoveCalendarItemsAction">)
	| (ShortcutsSelectContactsActionSpec & _ac<"WFSelectContactsAction">)
	| (ShortcutsSendMessageActionSpec & _ac<"WFSendMessageAction">)
	| (ShortcutsSetBrightnessActionSpec & _ac<"WFSetBrightnessAction">)
	| (ShortcutsSkipSongActionSpec & _ac<"WFSkipSongAction">)
	| (ShortcutsTextComponentsActionSpec & _ac<"WFTextComponentsAction">)
	| (ShortcutsACESetWiFiActionSpec & _ac<"WFACESetWiFiAction">)
	| (ShortcutsHandleCustomIntentActionSpec &
			_ac<"WFHandleCustomIntentAction">)
	| (ShortcutsSearchiTunesActionSpec & _ac<"WFSearchiTunesAction">);

const a: { [key in ShortcutsActionIdentifier]: ShortcutsActionSpec } = {
	"com.apple.facetime.facetime": {
		ActionClass: "WFStartCallAction",
		ActionKeywords: ["phone", "number", "call"],
		AppIdentifier: "com.apple.facetime",
		Category: "Contacts",
		Description: {
			DescriptionSummary:
				"Calls the contact passed in as input using FaceTime."
		},
		Input: {
			Multiple: false,
			ParameterKey: "WFFaceTimeContact",
			Required: true,
			Types: ["WFPhoneNumber", "WFEmailAddress", "NSString"]
		},
		InputPassthrough: true,
		IntentIdentifier: "sirikit.intent.call.StartCallIntent",
		LastModifiedDate: "2018-10-09T05:00:00.000Z",
		Name: "FaceTime",
		ParameterSummary: "${WFFaceTimeType} Call ${WFFaceTimeContact}",
		Parameters: [
			{
				Class: "WFIntentAppPickerParameter",
				DefaultValue: "com.apple.TelephonyUtilities.PhoneIntentHandler",
				Hidden: true,
				IntentName: "INStartCallIntent",
				Key: "IntentAppIdentifier",
				Label: "App"
			},
			{
				Class: "WFFaceTimeTypePickerParameter",
				DefaultValue: "Video",
				Items: ["Video", "Audio"],
				Key: "WFFaceTimeType",
				Label: "Call Type"
			},
			{
				AllowsMultipleValues: false,
				Class: "WFContactFieldParameter",
				Key: "WFFaceTimeContact",
				Label: "Contact"
			}
		],
		RequiredResources: ["WFStartCallAccessResource"],
		Subcategory: "Phone",
		WFStartCallActionType: "FaceTime"
	},
	"com.apple.mobilenotes.SharingExtension": {
		ActionClass: "WFCreateNoteAction",
		ActionKeywords: ["apple"],
		AppIdentifier: "com.apple.mobilenotes",
		Category: "Documents",
		Description: {
			DescriptionSummary:
				"Creates a note using the content passed as input."
		},
		Input: {
			Multiple: true,
			ParameterKey: "WFCreateNoteInput",
			Required: true,
			Types: ["WFStringContentItem"]
		},
		IntentIdentifier: "sirikit.intent.notes.CreateNoteIntent",
		Name: "Create Note",
		Output: {
			Multiple: false,
			Types: ["INNote"]
		},
		ParameterSummary: {
			"WFCreateNoteInput,ShowWhenRun(1)":
				"Create note with ${WFCreateNoteInput}",
			"WFCreateNoteInput,WFNoteGroup,ShowWhenRun(0)":
				"Create note with ${WFCreateNoteInput} in ${WFNoteGroup}"
		},
		Parameters: [
			{
				Class: "WFIntentAppPickerParameter",
				DefaultValue: "com.apple.mobilenotes",
				Hidden: true,
				IntentName: "INCreateNoteIntent",
				Key: "IntentAppIdentifier",
				Label: "App"
			},
			{
				Class: "WFSwitchParameter",
				DefaultValue: true,
				Key: "ShowWhenRun",
				Label: "Show Compose Sheet"
			},
			{
				AlwaysShowsButton: true,
				Class: "WFNoteGroupPickerParameter",
				Description: "The folder in which to save the new note.",
				IntentSlotName: "groupName",
				Key: "WFNoteGroup",
				Label: "Folder",
				RequiredResources: [
					{
						WFParameterKey: "ShowWhenRun",
						WFParameterValue: false,
						WFResourceClass: "WFParameterRelationResource"
					}
				]
			},
			{
				Class: "WFTextInputParameter",
				Key: "WFCreateNoteInput",
				Label: "Body",
				ProcessIntoContentItems: true
			}
		],
		RequiredResources: [
			{
				RequiredResources: [
					{
						WFParameterKey: "ShowWhenRun",
						WFParameterValue: true,
						WFResourceClass: "WFParameterRelationResource"
					}
				],
				WFResourceClass: "WFUserInteractionResource"
			},
			"WFNotesAccessResource"
		],
		Subcategory: "Notes",
		UserInterfaces: ["UIKit", "Siri"]
	},
	"com.apple.mobilephone.call": {
		ActionClass: "WFStartCallAction",
		ActionKeywords: ["phone", "number", "dial", "mobile", "telephone"],
		AppIdentifier: "com.apple.mobilephone",
		Category: "Contacts",
		Description: {
			DescriptionSummary: "Calls the phone number passed in as input."
		},
		Input: {
			Multiple: false,
			ParameterKey: "WFCallContact",
			Required: true,
			Types: ["WFPhoneNumber", "NSString"]
		},
		InputPassthrough: true,
		IntentIdentifier: "sirikit.intent.call.StartCallIntent",
		LastModifiedDate: "2018-10-09T05:00:00.000Z",
		Name: "Call",
		ParameterSummary: "Call ${WFCallContact}",
		Parameters: [
			{
				Class: "WFIntentAppPickerParameter",
				DefaultValue: "com.apple.TelephonyUtilities.PhoneIntentHandler",
				Hidden: true,
				IntentName: "INStartCallIntent",
				Key: "IntentAppIdentifier",
				Label: "App"
			},
			{
				Class: "WFContactFieldParameter",
				IntentSlotName: "contacts",
				Key: "WFCallContact",
				Label: "Contact"
			}
		],
		RequiredResources: ["WFStartCallAccessResource"],
		Subcategory: "Phone",
		WFStartCallActionType: "Phone"
	},
	"com.apple.mobiletimer-framework.MobileTimerIntents.MTGetAlarmsIntent": {
		ActionClass: "WFHandleCustomIntentAction",
		AppIdentifier: "com.apple.mobiletimer",
		IntentIdentifier:
			"sirikit.intents.custom.com.apple.mobiletimer-framework.MobileTimerIntents.MTGetAlarmsIntent",
		IntentName: "MTGetAlarmsIntent",
		SkipSiriExecution: true
	},
	"is.workflow.actions.addnewevent": {
		ActionClass: "WFAddNewEventAction",
		ActionKeywords: ["create", "calendar"],
		AppIdentifier: "com.apple.mobilecal",
		Category: "Calendar",
		CreationDate: "2015-01-11T06:00:00.000Z",
		Description: {
			DescriptionResult: "The new event",
			DescriptionSummary:
				"Creates a new event and adds it to the selected calendar."
		},
		InputPassthrough: false,
		Name: "Add New Event",
		Output: {
			Multiple: false,
			OutputName: "New Event",
			Types: ["EKEvent"]
		},
		ParameterSummary:
			"Add ${WFCalendarItemTitle} from ${WFCalendarItemStartDate} to ${WFCalendarItemEndDate}",
		Parameters: [
			{
				Class: "WFTextInputParameter",
				Description: "The title of this event.",
				Key: "WFCalendarItemTitle",
				Label: "Title",
				Placeholder: "Event Title",
				TextAlignment: "Right"
			},
			{
				Class: "WFTextInputParameter",
				Key: "WFCalendarItemLocation",
				Label: "Location",
				Placeholder: "optional",
				TextAlignment: "Right",
				TextContentType: "Location"
			},
			{
				Class: "WFCalendarPickerParameter",
				Description: "The calendar to add this event to.",
				EventKitEntityType: "Event",
				Key: "WFCalendarItemCalendar",
				Label: "Calendar"
			},
			{
				Class: "WFExpandingParameter",
				Key: "WFCalendarItemDates",
				Label: "Date"
			},
			{
				Class: "WFDateFieldParameter",
				Description:
					"Text representing the date this event begins. Examples: “tomorrow at 2”, “January 3”, “8:00pm”",
				HintDisplayMode: "WhileProcessing",
				Key: "WFCalendarItemStartDate",
				Label: "Start Date",
				Placeholder: "Tomorrow at noon",
				ReactiveParameterKey: "WFCalendarItemEndDate",
				RequiredResources: [
					{
						WFParameterKey: "WFCalendarItemDates",
						WFParameterValue: true,
						WFResourceClass: "WFParameterRelationResource"
					}
				],
				TextAlignment: "Right"
			},
			{
				Class: "WFDateFieldParameter",
				Description: "Text representing the date this event finishes.",
				HintDisplayMode: "WhileProcessing",
				Key: "WFCalendarItemEndDate",
				Label: "End Date",
				Placeholder: "Tomorrow at 1pm",
				RequiredResources: [
					{
						WFParameterKey: "WFCalendarItemDates",
						WFParameterValue: true,
						WFResourceClass: "WFParameterRelationResource"
					}
				],
				TextAlignment: "Right"
			},
			{
				Class: "WFSwitchParameter",
				Description:
					"When enabled, the event takes place over an entire day and time is ignored.",
				Key: "WFCalendarItemAllDay",
				Label: "All Day",
				RequiredResources: [
					{
						WFParameterKey: "WFCalendarItemDates",
						WFParameterValue: true,
						WFResourceClass: "WFParameterRelationResource"
					}
				]
			},
			{
				Class: "WFEnumerationParameter",
				Description:
					"Optionally, when to show an alert to notify me of this event.",
				DisallowedVariableTypes: ["Variable"],
				Items: [
					"At time of event",
					"5 minutes before",
					"15 minutes before",
					"30 minutes before",
					"1 hour before",
					"2 hours before",
					"1 day before",
					"2 days before",
					"1 week before",
					"Custom"
				],
				Key: "WFAlertTime",
				Label: "Alert"
			},
			{
				Class: "WFTextInputParameter",
				Description:
					"Text representing the date when the alert should occur. Examples: “tonight at 7”, “March 7”",
				Key: "WFAlertCustomTime",
				Label: "Alert Time",
				Placeholder: "Tomorrow at 4pm",
				RequiredResources: [
					{
						WFParameterKey: "WFAlertTime",
						WFParameterValue: "Custom",
						WFResourceClass: "WFParameterRelationResource"
					}
				],
				TextAlignment: "Right"
			},
			{
				Class: "WFTextInputParameter",
				Description: "Optionally, a description for this event.",
				Key: "WFCalendarItemNotes",
				Label: "Notes",
				Multiline: true,
				Placeholder: "Notes"
			}
		],
		RequiredResources: ["WFCalendarAccessResource"],
		ShortName: "Add Event",
		Subcategory: "Calendar",
		WatchCompatible: true
	},
	"is.workflow.actions.addnewreminder": {
		ActionClass: "WFAddNewReminderAction",
		ActionKeywords: ["create", "calendar", "task", "todo", "to-do"],
		AppIdentifier: "com.apple.reminders",
		Category: "Calendar",
		CreationDate: "2015-01-11T06:00:00.000Z",
		Description: {
			DescriptionResult: "The new reminder",
			DescriptionSummary:
				"Creates a new reminder and adds it to the selected list of reminders."
		},
		InputPassthrough: false,
		Name: "Add New Reminder",
		Output: {
			Multiple: false,
			OutputName: "New Reminder",
			Types: ["EKReminder"]
		},
		ParameterSummary: {
			"WFCalendarItemTitle,WFCalendarItemCalendar,WFAlertEnabled(Alert),WFAlertCondition(At Time),WFAlertCustomTime,WFCalendarItemNotes":
				"Add ${WFCalendarItemTitle} to ${WFCalendarItemCalendar} with ${WFAlertEnabled} ${WFAlertCondition} ${WFAlertCustomTime}",
			"WFCalendarItemTitle,WFCalendarItemCalendar,WFAlertEnabled(Alert),WFAlertCondition(When I Arrive),WFAlertLocation,WFCalendarItemNotes,WFAlertLocationRadius":
				"Add ${WFCalendarItemTitle} to ${WFCalendarItemCalendar} with ${WFAlertEnabled} ${WFAlertCondition} at ${WFAlertLocation}",
			"WFCalendarItemTitle,WFCalendarItemCalendar,WFAlertEnabled(Alert),WFAlertCondition(When I Leave),WFAlertLocation,WFCalendarItemNotes,WFAlertLocationRadius":
				"Add ${WFCalendarItemTitle} to ${WFCalendarItemCalendar} with ${WFAlertEnabled} ${WFAlertCondition} from ${WFAlertLocation}",
			"WFCalendarItemTitle,WFCalendarItemCalendar,WFAlertEnabled(No Alert),WFCalendarItemNotes":
				"Add ${WFCalendarItemTitle} to ${WFCalendarItemCalendar} with ${WFAlertEnabled}"
		},
		Parameters: [
			{
				Class: "WFTextInputParameter",
				Description: "The title of this reminder.",
				Key: "WFCalendarItemTitle",
				Label: "Reminder",
				TextAlignment: "Right"
			},
			{
				Class: "WFCalendarPickerParameter",
				Description: "The list of reminders to add this reminder to.",
				EventKitEntityType: "Reminder",
				Key: "WFCalendarItemCalendar",
				Label: "List"
			},
			{
				Class: "WFEnumerationParameter",
				DefaultValue: "No Alert",
				Items: ["No Alert", "Alert"],
				Key: "WFAlertEnabled",
				Label: "Alert"
			},
			{
				Class: "WFEnumerationParameter",
				DefaultValue: "At Time",
				Items: ["At Time", "When I Arrive", "When I Leave"],
				Key: "WFAlertCondition",
				Label: "Trigger",
				RequiredResources: [
					{
						WFParameterKey: "WFAlertEnabled",
						WFParameterValue: "Alert",
						WFResourceClass: "WFParameterRelationResource"
					}
				]
			},
			{
				Class: "WFLocationParameter",
				Description:
					"Text representing the address or coordinates of the location that triggers the alert.",
				Key: "WFAlertLocation",
				Label: "Location",
				RequiredResources: [
					{
						WFParameterKey: "WFAlertEnabled",
						WFParameterValue: "Alert",
						WFResourceClass: "WFParameterRelationResource"
					},
					{
						WFParameterKey: "WFAlertCondition",
						WFParameterValues: ["When I Arrive", "When I Leave"],
						WFResourceClass: "WFParameterRelationResource"
					}
				]
			},
			{
				Class: "WFUnitQuantityFieldParameter",
				DefaultUnit: "ft",
				DefaultValue: 1000,
				Description:
					'The distance from the provided location to consider "arriving" or "leaving" the location',
				Key: "WFAlertLocationRadius",
				Label: "Radius",
				RequiredResources: [
					{
						WFParameterKey: "WFAlertEnabled",
						WFParameterValue: "Alert",
						WFResourceClass: "WFParameterRelationResource"
					},
					{
						WFParameterKey: "WFAlertCondition",
						WFParameterValues: ["When I Arrive", "When I Leave"],
						WFResourceClass: "WFParameterRelationResource"
					}
				],
				TextAlignment: "Right",
				WFUnitType: "Length"
			},
			{
				Class: "WFDateFieldParameter",
				Description:
					"Text representing the date when the alert should occur. Examples: “tonight at 7”, “March 7”",
				HintDisplayMode: "WhileProcessing",
				Key: "WFAlertCustomTime",
				Label: "2:00 PM",
				RequiredResources: [
					{
						WFParameterKey: "WFAlertEnabled",
						WFParameterValue: "Alert",
						WFResourceClass: "WFParameterRelationResource"
					},
					{
						WFParameterKey: "WFAlertCondition",
						WFParameterValue: "At Time",
						WFResourceClass: "WFParameterRelationResource"
					}
				],
				TextAlignment: "Right"
			},
			{
				Class: "WFTextInputParameter",
				Description: "Optionally, a description for this reminder.",
				Key: "WFCalendarItemNotes",
				Label: "Notes",
				Multiline: true,
				Placeholder: "Notes"
			}
		],
		RequiredResources: [
			"WFReminderAccessResource",
			{
				RequiredResources: [
					{
						WFParameterKey: "WFAlertLocation",
						WFParameterValue: {
							isCurrentLocation: true
						},
						WFResourceClass: "WFParameterRelationResource"
					}
				],
				WFResourceClass: "WFLocationAccessResource"
			}
		],
		ShortName: "Add Reminder",
		Subcategory: "Reminders",
		WatchCompatible: true
	},
	"is.workflow.actions.address": {
		ActionClass: "WFAddressAction",
		ActionKeywords: [
			"maps",
			"search",
			"query",
			"place",
			"location",
			"find"
		],
		AppIdentifier: "com.apple.Maps",
		Category: "Location",
		Constructor: true,
		Description: {
			DescriptionSummary:
				"Passes the specified address to the next action."
		},
		InputPassthrough: false,
		Name: "Street Address",
		Output: {
			Multiple: false,
			OutputName: "Street Address",
			Types: ["WFStreetAddress"]
		},
		Parameters: [
			{
				AutocapitalizationType: "Words",
				Class: "WFTextInputParameter",
				Key: "WFAddressLine1",
				Label: "Line 1",
				Placeholder: "One Apple Park Way",
				TextContentType: "StreetAddressLine1"
			},
			{
				AutocapitalizationType: "Words",
				Class: "WFTextInputParameter",
				Key: "WFAddressLine2",
				Label: "Line 2",
				TextContentType: "StreetAddressLine2"
			},
			{
				AutocapitalizationType: "Words",
				Class: "WFTextInputParameter",
				Key: "WFCity",
				Label: "City",
				Placeholder: "Cupertino",
				TextContentType: "AddressCity"
			},
			{
				AutocapitalizationType: "Words",
				Class: "WFTextInputParameter",
				Key: "WFState",
				Label: "State",
				Placeholder: "California",
				TextContentType: "AddressState"
			},
			{
				Class: "WFTextInputParameter",
				Key: "WFPostalCode",
				KeyboardType: "NumbersAndPunctuation",
				Label: "Postal Code",
				Placeholder: "95014",
				TextContentType: "PostalCode"
			},
			{
				AutocapitalizationType: "Words",
				Class: "WFCountryFieldParameter",
				Key: "WFCountry",
				Label: "Region",
				Placeholder: "United States"
			}
		],
		ResidentCompatible: true,
		Subcategory: "Addresses"
	},
	"is.workflow.actions.airplanemode.set": {
		ACECommandClass: "SASettingSetAirplaneMode",
		ACESettingValueKey: "OnValue",
		ActionClass: "WFACESetSettingAction",
		ActionKeywords: [
			"airport",
			"wi-fi",
			"bluetooth",
			"cellular",
			"turn",
			"toggle"
		],
		Category: "Scripting",
		Description: {
			DescriptionSummary: "Sets the device’s Airplane Mode to on or off."
		},
		IconName: "AirplaneMode.png",
		InputPassthrough: true,
		Name: "Set Airplane Mode",
		ParameterSummary: "Turn Airplane Mode ${OnValue}",
		Parameters: [
			{
				Class: "WFSwitchParameter",
				DefaultValue: true,
				Key: "OnValue",
				Label: "Airplane Mode"
			}
		],
		RequiredResources: ["WFSiriAccessResource"],
		Subcategory: "Network",
		UnsupportedEnvironments: ["WatchOS"]
	},
	"is.workflow.actions.appearance": {
		ActionClass: "WFHandleCustomIntentAction",
		ActionKeywords: ["style", "mode", "dark", "appearance"],
		Attribution: "Appearance",
		Category: "Scripting",
		IconName: "Brightness.png",
		InProcess: true,
		IntentIdentifier:
			"sirikit.intents.custom.com.apple.WorkflowKit.ShortcutsIntents.WFSetAppearanceIntent",
		LastModifiedDate: "2019-05-22T19:35:00.000Z",
		ResidentCompatible: false,
		Subcategory: "Device"
	},
	"is.workflow.actions.ask": {
		ActionClass: "WFAskForInputAction",
		ActionKeywords: [
			"ask",
			"prompt",
			"show",
			"dialog",
			"keyboard",
			"text",
			"number",
			"url",
			"date",
			"time"
		],
		Attribution: "Scripting",
		Category: "Scripting",
		Description: {
			DescriptionSummary:
				"Displays a dialog prompting the user to enter a piece of information."
		},
		IconName: "Scripting.png",
		IntentIdentifier:
			"sirikit.intents.custom.com.apple.WorkflowKit.ShortcutsIntents.WFAskForInputIntent",
		LastModifiedDate: "2015-08-20T07:00:00.000Z",
		Output: {
			Multiple: false,
			OutputName: "Provided Input",
			Types: ["NSString", "NSDecimalNumber", "NSURL", "NSDate"]
		},
		ParameterOverrides: {
			dateAndTimeAnswer: {
				DisallowedVariableTypes: ["Ask"],
				Key: "WFAskActionDefaultAnswerDateAndTime"
			},
			dateAnswer: {
				DisallowedVariableTypes: ["Ask"],
				Key: "WFAskActionDefaultAnswerDate"
			},
			defaultURLAnswer: {
				DisallowedVariableTypes: ["Ask"],
				Key: "WFAskActionDefaultAnswerURL",
				KeyboardType: "URL"
			},
			numberAnswer: {
				DisallowedVariableTypes: ["Ask"],
				Key: "WFAskActionDefaultAnswerNumber"
			},
			question: {
				Key: "WFAskActionPrompt"
			},
			stringAnswer: {
				DisallowedVariableTypes: ["Ask"],
				Key: "WFAskActionDefaultAnswer",
				Label: "Default Answer"
			},
			timeAnswer: {
				DisallowedVariableTypes: ["Ask"],
				Key: "WFAskActionDefaultAnswerTime"
			},
			type: {
				DisallowedVariableTypes: ["Ask"],
				IntentEnumOverrides: {
					date: "Date",
					dateAndTime: "Date and Time",
					number: "Number",
					text: "Text",
					time: "Time",
					url: "URL"
				},
				Key: "WFInputType"
			},
			urlAnswer: {
				Hidden: true
			}
		},
		ParameterSummary: "Ask ${WFAskActionPrompt}",
		RequiredResources: ["WFUserInteractionResource"],
		Subcategory: "Notification",
		UserInterfaces: ["UIKit", "UIKitWidget", "WatchKit", "Siri"]
	},
	"is.workflow.actions.avairyeditphoto": {
		ActionClass: "WFMarkupAction",
		ActionKeywords: [
			"edit",
			"photo",
			"modify",
			"picture",
			"aviary",
			"adobe",
			"pdf",
			"sign",
			"draw",
			"document"
		],
		Categories: ["Documents", "Media"],
		CreationDate: "2014-01-20T06:00:00.000Z",
		Description: {
			DescriptionResult: "The edited content",
			DescriptionSummary: "Edits an image or PDF with Markup."
		},
		IconName: "Markup.png",
		Input: {
			Multiple: true,
			ParameterKey: "WFDocument",
			Required: true,
			Types: ["WFImageContentItem", "WFPDFContentItem"]
		},
		LastModifiedDate: "2018-06-30T07:00:00.000Z",
		Name: "Markup",
		Output: {
			Multiple: true,
			OutputName: "Markup Result",
			Types: ["WFImageContentItem", "WFPDFContentItem"]
		},
		ParameterSummary: "Mark up ${WFDocument}",
		Parameters: [
			{
				Class: "WFVariablePickerParameter",
				Key: "WFDocument",
				Label: "Document",
				Placeholder: "Document"
			}
		],
		RequiredResources: ["WFUserInteractionResource"],
		Subcategory: "Editing",
		UserInterfaces: ["UIKit"]
	},
	"is.workflow.actions.base64encode": {
		ActionClass: "WFBase64EncodingAction",
		ActionKeywords: ["base", "64", "encode", "decode"],
		Category: "Scripting",
		CreationDate: "2015-05-03T05:00:00.000Z",
		Description: {
			DescriptionSummary:
				"Encodes or decodes text or files using Base64 encoding."
		},
		IconName: "Scripting.png",
		Input: {
			Multiple: true,
			ParameterKey: "WFInput",
			Required: true,
			Types: ["WFStringContentItem", "public.data"]
		},
		Name: "Base64 Encode",
		Output: {
			Multiple: true,
			OutputName: "Base64 Encoded",
			Types: ["WFStringContentItem", "public.data"]
		},
		ParameterSummary: "${WFEncodeMode} ${WFInput} with base64",
		Parameters: [
			{
				Class: "WFEnumerationParameter",
				DefaultValue: "Encode",
				Items: ["Encode", "Decode"],
				Key: "WFEncodeMode",
				Label: "Mode"
			},
			{
				Class: "WFEnumerationParameter",
				DefaultValue: "Every 76 Characters",
				Items: ["None", "Every 64 Characters", "Every 76 Characters"],
				Key: "WFBase64LineBreakMode",
				Label: "Line Breaks",
				RequiredResources: [
					{
						WFParameterKey: "WFEncodeMode",
						WFParameterValue: "Encode",
						WFResourceClass: "WFParameterRelationResource"
					}
				]
			},
			{
				Class: "WFVariablePickerParameter",
				Key: "WFInput",
				Label: "Input",
				Placeholder: "Input"
			}
		],
		ResidentCompatible: true,
		Subcategory: "Files",
		SuggestedNever: true
	},
	"is.workflow.actions.bluetooth.set": {
		ACECommandClass: "SASettingSetBluetooth",
		ACESettingValueKey: "OnValue",
		ActionClass: "WFACESetSettingAction",
		ActionKeywords: ["wireless", "accessories", "accessory"],
		Category: "Scripting",
		Description: {
			DescriptionSummary: "Sets the device’s Bluetooth to on or off."
		},
		IconName: "Bluetooth.png",
		InputPassthrough: true,
		Name: "Set Bluetooth",
		ParameterSummary: "Turn Bluetooth ${OnValue}",
		Parameters: [
			{
				Class: "WFSwitchParameter",
				DefaultValue: true,
				Key: "OnValue",
				Label: "Bluetooth"
			}
		],
		RequiredResources: ["WFSiriAccessResource"],
		Subcategory: "Network",
		UnsupportedEnvironments: ["WatchOS"]
	},
	"is.workflow.actions.cellulardata.set": {
		ACECommandClass: "SASettingSetCellularData",
		ACESettingValueKey: "OnValue",
		ActionClass: "WFACESetSettingAction",
		ActionKeywords: ["service", "phone", "airplane"],
		Category: "Scripting",
		Description: {
			DescriptionSummary: "Sets the device’s Cellular Data to on or off."
		},
		IconName: "CellularData.png",
		InputPassthrough: true,
		Name: "Set Cellular Data",
		ParameterSummary: "Turn Cellular Data ${OnValue}",
		Parameters: [
			{
				Class: "WFSwitchParameter",
				DefaultValue: true,
				Key: "OnValue",
				Label: "Cellular Data"
			}
		],
		RequiredResources: ["WFSiriAccessResource"],
		Subcategory: "Network",
		UnsupportedEnvironments: ["WatchOS"]
	},
	"is.workflow.actions.choosefromlist": {
		ActionClass: "WFChooseFromListAction",
		ActionKeywords: [
			"choose",
			"select",
			"list",
			"options",
			"menu",
			"multiple"
		],
		Attribution: "Scripting",
		Category: "Scripting",
		CreationDate: "2014-02-05T06:00:00.000Z",
		Description: {
			DescriptionSummary:
				"Presents a menu of the items passed as input to the action and outputs the user's selection."
		},
		IconName: "Scripting.png",
		Input: {
			Multiple: true,
			ParameterKey: "WFInput",
			Required: true,
			TypePassthrough: true,
			Types: [
				"WFImageContentItem",
				"WFDictionaryContentItem",
				"WFContentItem"
			]
		},
		IntentIdentifier:
			"sirikit.intents.custom.com.apple.WorkflowKit.ShortcutsIntents.WFChooseFromListIntent",
		LastModifiedDate: "2016-11-29T06:00:00.000Z",
		Name: "Choose from List",
		Output: {
			Multiple: false,
			OutputName: "Chosen Item",
			Types: ["WFContentItem"]
		},
		ParameterSummary: "Choose from ${WFInput}",
		Parameters: [
			{
				Class: "WFVariablePickerParameter",
				IntentSlotName: "items",
				Key: "WFInput",
				Label: "List",
				Placeholder: "List"
			},
			{
				Class: "WFTextInputParameter",
				DefaultValue: "",
				Description:
					"The instruction provided when the list is presented.",
				DisallowedVariableTypes: ["Ask"],
				IntentSlotName: "prompt",
				Key: "WFChooseFromListActionPrompt",
				Label: "Prompt",
				Placeholder: "optional",
				TextAlignment: "Right"
			},
			{
				Class: "WFSwitchParameter",
				DefaultValue: false,
				Description:
					"When enabled, multiple items may be chosen from the list.",
				Key: "WFChooseFromListActionSelectMultiple",
				Label: "Select Multiple"
			},
			{
				Class: "WFSwitchParameter",
				DefaultValue: false,
				Description:
					"When enabled, all of the items in the list will start out selected when Choose from List is presented.",
				Key: "WFChooseFromListActionSelectAll",
				Label: "Select All Initially",
				RequiredResources: [
					{
						WFParameterKey: "WFChooseFromListActionSelectMultiple",
						WFParameterValue: true,
						WFResourceClass: "WFParameterRelationResource"
					}
				]
			}
		],
		RequiredResources: ["WFUserInteractionResource"],
		Subcategory: "Lists",
		UserInterfaces: ["WatchKit", "UIKit", "UIKitWidget", "Siri"],
		WatchCompatible: true
	},
	"is.workflow.actions.choosefrommenu": {
		ActionClass: "WFChooseFromMenuAction",
		ActionKeywords: [
			"list",
			"prompt",
			"select",
			"action",
			"sheet",
			"switch"
		],
		Category: "Scripting",
		Description: {
			DescriptionSummary:
				"Presents a menu and runs different actions based on which menu item was chosen."
		},
		IconName: "Scripting.png",
		InputPassthrough: true,
		Name: "Choose from Menu",
		Parameters: [
			{
				Class: "WFTextInputParameter",
				Description:
					"The instruction provided when the menu is presented.",
				DisallowedVariableTypes: ["Ask"],
				Key: "WFMenuPrompt",
				Label: "Prompt",
				Placeholder: "optional",
				TextAlignment: "Right"
			},
			{
				Class: "WFArrayParameter",
				DefaultValue: ["One", "Two"],
				Key: "WFMenuItems",
				Label: "Items",
				SupportsImportQuestions: false
			}
		],
		RequiredResources: ["WFUserInteractionResource"],
		ShortName: "Menu",
		SnappingPassthrough: true,
		Subcategory: "Control Flow",
		SuggestedAsInitialAction: true,
		WatchCompatible: true,
		BlockInfo: {
			Example: "\ncase\n  ...\ncase\n  ...\nend",
			Completion: "\ncase\n\t$0\nend"
		}
	},
	"is.workflow.actions.clearupnext": {
		ActionClass: "WFClearUpNextAction",
		ActionKeywords: [
			"song",
			"music",
			"itunes",
			"up next",
			"apple",
			"album",
			"next",
			"play",
			"clear"
		],
		AppIdentifier: "com.apple.Music",
		Category: "Media",
		CreationDate: "2017-02-14T08:00:00.000Z",
		Description: {
			DescriptionSummary: "Clears all the music in your Up Next queue."
		},
		InputPassthrough: true,
		Name: "Clear Up Next",
		ParameterSummary: "Clear Up Next",
		RequiredResources: [
			"WFAppleMusicAccessResource",
			{
				WFDeviceAttributes: {
					WFDeviceAttributeSystemVersion: {
						WFSystemVersion: "10.3",
						WFSystemVersionRelation: ">="
					}
				},
				WFResourceClass: "WFDeviceAttributesResource"
			}
		],
		Subcategory: "Up Next"
	},
	"is.workflow.actions.cloudapp.upload": {
		ActionClass: "WFCloudAppUploadAction",
		AppSection: "CloudApp",
		Category: "Sharing",
		CreationDate: "2015-01-11T06:00:00.000Z",
		Description: {
			DescriptionResult: "CloudApp URL",
			DescriptionSummary:
				"Uploads the input to CloudApp and returns the CloudApp URL."
		},
		IconName: "CloudApp.png",
		Input: {
			Multiple: true,
			ParameterKey: "WFInput",
			Required: true,
			Types: ["WFGenericFileContentItem", "WFURLContentItem"]
		},
		LastModifiedDate: "2015-11-24T06:00:00.000Z",
		Name: "Upload to CloudApp",
		Output: {
			Multiple: true,
			OutputName: "CloudApp URLs",
			Types: ["NSURL"]
		},
		ParameterSummary: "Upload ${WFInput}",
		Parameters: [
			{
				Class: "WFEnumerationParameter",
				DefaultValue: "Private",
				Items: ["Private", "Public"],
				Key: "WFCloudAppPrivacyType",
				Label: "Link Privacy"
			},
			{
				Class: "WFVariablePickerParameter",
				Key: "WFInput",
				Label: "Content",
				Placeholder: "Content"
			}
		],
		RequiredResources: ["WFCloudAppAccessResource"],
		ShortName: "Upload"
	},
	"is.workflow.actions.comment": {
		ActionClass: "WFCommentAction",
		ActionKeywords: ["note", "explain"],
		Category: "Scripting",
		Constructor: true,
		CreationDate: "2015-08-29T17:26:33.000Z",
		Description: {
			DescriptionSummary:
				"This action lets you explain how part of a shortcut works. When run, this action does nothing."
		},
		IconName: "Text.png",
		InputPassthrough: true,
		Name: "Comment",
		Parameters: [
			{
				Class: "WFTextInputParameter",
				DisallowedVariableTypes: ["Ask", "Variable"],
				Key: "WFCommentActionText",
				Multiline: true,
				Placeholder: "Enter comment..."
			}
		],
		ResidentCompatible: true,
		SnappingPassthrough: true,
		Subcategory: "No-ops",
		SuggestedNever: true
	},
	"is.workflow.actions.conditional": {
		ActionClass: "WFConditionalAction",
		ActionKeywords: ["statement", "conditional", "then"],
		Category: "Scripting",
		Description: {
			DescriptionSummary:
				"Tests if a condition is true, and if so, runs the actions inside. Otherwise, the actions under “Otherwise” are run."
		},
		IconName: "Scripting.png",
		Input: {
			Multiple: true,
			ParameterKey: "WFInput",
			Types: ["WFContentItem"]
		},
		InputPassthrough: true,
		LastModifiedDate: "2015-01-11T06:00:00.000Z",
		Name: "If",
		ParameterSummary: {
			WFInput: "If ${WFInput}",
			"WFInput,WFCondition": "If ${WFInput} ${WFCondition}",
			"WFInput,WFCondition,WFBoundedNumber":
				"If ${WFInput} ${WFCondition} ${WFBoundedNumber}",
			"WFInput,WFCondition,WFBoundedNumber,WFAnotherBoundedNumber":
				"If ${WFInput} ${WFCondition} ${WFBoundedNumber} and ${WFAnotherBoundedNumber}",
			"WFInput,WFCondition,WFConditionalActionString":
				"If ${WFInput} ${WFCondition} ${WFConditionalActionString}",
			"WFInput,WFCondition,WFDate":
				"If ${WFInput} ${WFCondition} ${WFDate}",
			"WFInput,WFCondition,WFDate,WFAnotherDate":
				"If ${WFInput} ${WFCondition} ${WFDate} and ${WFAnotherDate}",
			"WFInput,WFCondition,WFDuration":
				"If ${WFInput} ${WFCondition} ${WFDuration}",
			"WFInput,WFCondition,WFDuration,WFAnotherDuration":
				"If ${WFInput} ${WFCondition} ${WFDuration} and ${WFAnotherDuration}",
			"WFInput,WFCondition,WFEnumeration":
				"If ${WFInput} ${WFCondition} ${WFEnumeration}",
			"WFInput,WFCondition,WFMeasurement":
				"If ${WFInput} ${WFCondition} ${WFMeasurement}",
			"WFInput,WFCondition,WFMeasurement,WFAnotherMeasurement":
				"If ${WFInput} ${WFCondition} ${WFMeasurement} and ${WFAnotherMeasurement}",
			"WFInput,WFCondition,WFNumberValue":
				"If ${WFInput} ${WFCondition} ${WFNumberValue}",
			"WFInput,WFCondition,WFNumberValue,WFAnotherNumber":
				"If ${WFInput} ${WFCondition} ${WFNumberValue} and ${WFAnotherNumber}",
			"WFInput,WFCondition,WFNumericEnumeration":
				"If ${WFInput} ${WFCondition} ${WFNumericEnumeration}"
		},
		Parameters: [
			{
				Class: "WFConditionalSubjectParameter",
				DisallowedVariableTypes: ["Ask"],
				Key: "WFInput",
				Label: "Input"
			},
			{
				Class: "WFConditionalOperatorParameter",
				Key: "WFCondition",
				Label: "Condition"
			},
			{
				Class: "WFTextInputParameter",
				Key: "WFConditionalActionString",
				Label: "Text"
			},
			{
				AllowsDecimalNumbers: true,
				Class: "WFNumberFieldParameter",
				Key: "WFNumberValue",
				Label: "Number"
			},
			{
				AllowsDecimalNumbers: true,
				Class: "WFNumberFieldParameter",
				Key: "WFAnotherNumber",
				Label: "Number"
			},
			{
				Class: "WFSliderParameter",
				Key: "WFBoundedNumber",
				Label: "Number"
			},
			{
				Class: "WFSliderParameter",
				Key: "WFAnotherBoundedNumber",
				Label: "Number"
			},
			{
				Class: "WFDatePickerParameter",
				Key: "WFDate",
				Label: "Date",
				ShowsDatePicker: true
			},
			{
				Class: "WFDatePickerParameter",
				Key: "WFAnotherDate",
				Label: "Date",
				ShowsDatePicker: true
			},
			{
				AllowsNegativeNumbers: true,
				Class: "WFUnitQuantityFieldParameter",
				Key: "WFMeasurement",
				Label: "Number"
			},
			{
				AllowsNegativeNumbers: true,
				Class: "WFUnitQuantityFieldParameter",
				Key: "WFAnotherMeasurement",
				Label: "Number"
			},
			{
				Class: "WFDurationQuantityFieldParameter",
				Key: "WFDuration",
				Label: "Number"
			},
			{
				Class: "WFDurationQuantityFieldParameter",
				Key: "WFAnotherDuration",
				Label: "Number"
			},
			{
				Class: "WFDynamicEnumerationParameter",
				Key: "WFEnumeration",
				Placeholder: "Choose"
			},
			{
				Class: "WFNumericDynamicEnumerationParameter",
				Key: "WFNumericEnumeration",
				Placeholder: "Choose"
			}
		],
		ResidentCompatible: true,
		SettingsUI: {
			ViewControllerClass: "WFConditionalActionSettingsViewController"
		},
		SnappingPassthrough: true,
		Subcategory: "Control Flow",
		BlockInfo: {
			Example: "\n  ...\notherwise\n  ...\nend",
			Completion: "\n\t$0\notherwise\nend"
		}
	},
	"is.workflow.actions.contacts": {
		ActionClass: "WFContactsAction",
		ActionKeywords: ["contact", "person", "people"],
		AppIdentifier: "com.apple.MobileAddressBook",
		Category: "Contacts",
		Constructor: true,
		Description: {
			DescriptionSummary:
				"Passes the specified contacts to the next action."
		},
		Name: "Contacts",
		Output: {
			Multiple: true,
			OutputName: "Contacts",
			Types: ["WFContact"]
		},
		Parameters: [
			{
				AllowsMultipleValues: true,
				AllowsTextEntry: false,
				Class: "WFContactFieldParameter",
				Key: "WFContact",
				Placeholder: "Press + to add contacts"
			}
		],
		ResidentCompatible: true,
		Subcategory: "Contacts"
	},
	"is.workflow.actions.correctspelling": {
		ActionClass: "WFHandleCustomIntentAction",
		ActionKeywords: ["text", "spell", "spelling", "correct", "autocorrect"],
		Category: "Documents",
		IconName: "Text.png",
		InProcess: true,
		IntentIdentifier:
			"sirikit.intents.custom.com.apple.WorkflowKit.ShortcutsIntents.WFCorrectSpellingIntent",
		ResidentCompatible: true,
		Subcategory: "Text Editing",
		SuggestedNever: true
	},
	"is.workflow.actions.count": {
		ActionClass: "WFCountAction",
		ActionKeywords: ["get", "number", "length", "list"],
		AppIdentifier: "com.apple.calculator",
		Attribution: "Scripting",
		Category: "Scripting",
		Description: {
			DescriptionNote:
				"This is just like the Count in Sesame Street, but instead of a vampire, it's a Shortcuts action.",
			DescriptionSummary:
				"Counts the number of items, characters, words, sentences, or lines passed as input."
		},
		Input: {
			Multiple: true,
			ParameterKey: "Input",
			Required: true,
			Types: ["WFContentItem", "WFStringContentItem"]
		},
		Name: "Count",
		Output: {
			Multiple: false,
			OutputName: "Count",
			Types: ["NSDecimalNumber"]
		},
		ParameterSummary: "Count ${WFCountType} in ${Input}",
		Parameters: [
			{
				Class: "WFEnumerationParameter",
				DefaultValue: "Items",
				Items: ["Items", "Characters", "Words", "Sentences", "Lines"],
				Key: "WFCountType",
				Label: "Type"
			},
			{
				Class: "WFVariablePickerParameter",
				Key: "Input",
				Label: "Input",
				Placeholder: "Input"
			}
		],
		ResidentCompatible: true,
		Subcategory: "Items"
	},
	"is.workflow.actions.createplaylist": {
		ActionClass: "WFCreatePlaylistAction",
		ActionKeywords: [
			"song",
			"music",
			"itunes",
			"playlist",
			"apple",
			"album"
		],
		AppIdentifier: "com.apple.Music",
		Category: "Media",
		CreationDate: "2016-03-15T07:00:00.000Z",
		Description: {
			DescriptionInput:
				"Items in your music library or items from the Search iTunes action.",
			DescriptionSummary:
				"Creates a new playlist in the Music app, adding any items passed as input to the new playlist."
		},
		Input: {
			Multiple: true,
			ParameterKey: "WFPlaylistItems",
			Required: false,
			Types: ["WFiTunesProductContentItem", "WFMPMediaContentItem"]
		},
		InputPassthrough: false,
		Name: "Create Playlist",
		Output: {
			Multiple: true,
			OutputName: "New Playlist",
			Types: ["MPMediaItem"]
		},
		ParameterSummary:
			"Create playlist ${WFPlaylistName} with ${WFPlaylistItems}",
		Parameters: [
			{
				Class: "WFTextInputParameter",
				Key: "WFPlaylistName",
				Label: "Playlist Name",
				Placeholder: "Playlist Name",
				TextAlignment: "Right"
			},
			{
				Class: "WFTextInputParameter",
				Key: "WFPlaylistAuthor",
				Label: "Author",
				Placeholder: "Shortcuts",
				TextAlignment: "Right"
			},
			{
				Class: "WFTextInputParameter",
				Key: "WFPlaylistDescription",
				Label: "Description",
				Placeholder: "All of my favorites",
				TextAlignment: "Right"
			},
			{
				Class: "WFVariablePickerParameter",
				Key: "WFPlaylistItems",
				Label: "Music",
				Placeholder: "Music"
			}
		],
		RequiredResources: [
			"WFAppleMusicAccessResource",
			{
				WFDeviceAttributes: {
					WFDeviceAttributeSystemVersion: {
						WFSystemVersion: "9.3",
						WFSystemVersionRelation: ">="
					}
				},
				WFResourceClass: "WFDeviceAttributesResource"
			}
		],
		Subcategory: "Playlists",
		SuggestedAsInitialAction: false
	},
	"is.workflow.actions.date": {
		ActionClass: "WFDateAction",
		ActionKeywords: [
			"date",
			"set date",
			"pass date",
			"time",
			"current",
			"now",
			"get"
		],
		Category: "Calendar",
		Constructor: true,
		Description: {
			DescriptionSummary:
				"Passes the specified date and time to the next action."
		},
		IconName: "Date.png",
		Name: "Date",
		Output: {
			Multiple: false,
			OutputName: "Date",
			Types: ["NSDate"]
		},
		ParameterSummary: {
			"WFDateActionMode(Current Date)": "${WFDateActionMode}",
			"WFDateActionMode(Specified Date),WFDateActionDate":
				"${WFDateActionMode} ${WFDateActionDate}"
		},
		Parameters: [
			{
				Class: "WFEnumerationParameter",
				DefaultValue: "Current Date",
				Items: ["Current Date", "Specified Date"],
				Key: "WFDateActionMode",
				Label: "Use"
			},
			{
				Class: "WFDateFieldParameter",
				Key: "WFDateActionDate",
				Label: "Date",
				Placeholder: "June 29, 2007",
				RequiredResources: [
					{
						WFParameterKey: "WFDateActionMode",
						WFParameterValue: "Specified Date",
						WFResourceClass: "WFParameterRelationResource"
					}
				],
				TextAlignment: "Right"
			}
		],
		Subcategory: "Dates",
		SuggestedNever: true
	},
	"is.workflow.actions.delay": {
		ActionClass: "WFDelayAction",
		ActionKeywords: ["time", "delay", "script", "wait", "second"],
		Category: "Scripting",
		Description: {
			DescriptionSummary:
				"Waits for the specified number of seconds before continuing with the next action."
		},
		IconName: "Scripting.png",
		InputPassthrough: true,
		Name: "Wait",
		ParameterSummary: "Wait ${WFDelayTime}",
		Parameters: [
			{
				Class: "WFStepperParameter",
				DefaultValue: 1,
				Key: "WFDelayTime",
				StepperDescription: "Number of Seconds",
				StepperNoun: "Second",
				StepperPluralNoun: "Seconds"
			}
		],
		RequiredResources: ["WFMainThreadResource"],
		ResidentCompatible: true,
		SnappingPassthrough: true,
		Subcategory: "Control Flow"
	},
	"is.workflow.actions.deletephotos": {
		ActionClass: "WFDeletePhotosAction",
		ActionKeywords: ["remove", "trash", "picture"],
		AppIdentifier: "com.apple.mobileslideshow",
		BlocksOutput: true,
		Category: "Media",
		Description: {
			DescriptionSummary:
				"Deletes the photos passed as input from the device's photo library. This action asks for confirmation before performing the deletion."
		},
		Input: {
			Multiple: true,
			ParameterKey: "WFInputPhotos",
			Required: true,
			Types: ["PHAsset"]
		},
		InputPassthrough: false,
		Name: "Delete Photos",
		ParameterSummary: "Delete ${WFInputPhotos}",
		Parameters: [
			{
				Class: "WFVariablePickerParameter",
				Key: "WFInputPhotos",
				Label: "Photos",
				Placeholder: "Photos"
			}
		],
		RequiredResources: ["WFPhotoAccessResource"],
		Subcategory: "Photos"
	},
	"is.workflow.actions.deskconnect.send": {
		ActionClass: "WFSendViaDeskConnectAction",
		ActionKeywords: [
			"airdrop",
			"push",
			"desk",
			"connect",
			"device",
			"mac",
			"share"
		],
		AppIdentifier: "com.deskconnect.ios",
		Category: "Sharing",
		CreationDate: "2016-03-04T06:00:00.000Z",
		Description: {
			DescriptionSummary:
				"Sends the input to another device via DeskConnect. DeskConnect makes it easy to send webpages, documents, pictures, and anything else between your devices."
		},
		Discontinued: true,
		Input: {
			Multiple: true,
			ParameterKey: "WFInput",
			Required: true,
			Types: ["WFURLContentItem", "WFGenericFileContentItem"]
		},
		InputPassthrough: true,
		Name: "Send via DeskConnect",
		ParameterSummary:
			"Send ${WFInput} via the missing link between your devices, DeskConnect 💔",
		Parameters: [
			{
				Class: "WFVariablePickerParameter",
				Key: "WFInput",
				Label: "Content",
				Placeholder: "Content"
			}
		],
		RequiredResources: [
			"WFUserInteractionResource",
			{
				AppIdentifier: "com.deskconnect.ios",
				WFResourceClass: "WFAppInstalledResource"
			}
		],
		SuggestedNever: true
	},
	"is.workflow.actions.detect.address": {
		ActionClass: "WFCoercionAction",
		ActionKeywords: ["address", "street", "detect", "scan", "map"],
		AppIdentifier: "com.apple.Maps",
		Category: "Location",
		CoercionItemClass: "WFLocationContentItem",
		Description: {
			DescriptionSummary:
				"Returns any street addresses found in the output from the previous action."
		},
		Input: {
			Multiple: true,
			ParameterKey: "WFInput",
			Required: true,
			Types: ["WFStreetAddress"]
		},
		Name: "Get Addresses from Input",
		Output: {
			Multiple: true,
			OutputName: "Addresses",
			Types: ["WFLocationContentItem"]
		},
		ParameterSummary: "Get addresses from ${WFInput}",
		Parameters: [
			{
				Class: "WFVariablePickerParameter",
				Key: "WFInput",
				Label: "Input",
				Placeholder: "Input"
			}
		],
		ResidentCompatible: true,
		ShortName: "Get Addresses",
		Subcategory: "Addresses"
	},
	"is.workflow.actions.detect.contacts": {
		ActionClass: "WFCoercionAction",
		ActionKeywords: [
			"find",
			"detect",
			"people",
			"person",
			"email",
			"e-mail",
			"phone"
		],
		AppIdentifier: "com.apple.MobileAddressBook",
		Category: "Contacts",
		CoercionItemClass: "WFContactContentItem",
		Description: {
			DescriptionSummary:
				"Gets contacts from the result of the previous action."
		},
		Input: {
			Multiple: true,
			ParameterKey: "WFInput",
			Required: true,
			Types: ["WFContact"]
		},
		Name: "Get Contacts from Input",
		Output: {
			Multiple: true,
			OutputName: "Contacts",
			Types: ["WFContactContentItem"]
		},
		ParameterSummary: "Get contacts from ${WFInput}",
		Parameters: [
			{
				Class: "WFVariablePickerParameter",
				Key: "WFInput",
				Label: "Input",
				Placeholder: "Input"
			}
		],
		ResidentCompatible: true,
		ShortName: "Get Contacts",
		Subcategory: "Contacts"
	},
	"is.workflow.actions.detect.date": {
		ActionClass: "WFCoercionAction",
		ActionKeywords: ["date", "time", "detect", "scan"],
		Category: "Calendar",
		CoercionItemClass: "WFDateContentItem",
		Description: {
			DescriptionSummary:
				"Returns any dates found in the output from the previous action."
		},
		IconName: "Date.png",
		Input: {
			Multiple: true,
			ParameterKey: "WFInput",
			Required: true,
			Types: ["NSDate"]
		},
		Name: "Get Dates from Input",
		Output: {
			Multiple: true,
			OutputName: "Dates",
			Types: ["WFDateContentItem"]
		},
		ParameterSummary: "Get dates from ${WFInput}",
		Parameters: [
			{
				Class: "WFVariablePickerParameter",
				Key: "WFInput",
				Label: "Input",
				Placeholder: "Input"
			}
		],
		ResidentCompatible: true,
		ShortName: "Get Dates",
		Subcategory: "Dates"
	},
	"is.workflow.actions.detect.dictionary": {
		ActionClass: "WFCoercionAction",
		ActionKeywords: [
			"json",
			"xml",
			"plist",
			"www",
			"urlencoded",
			"form",
			"query",
			"string"
		],
		Category: "Scripting",
		CoercionItemClass: "WFDictionaryContentItem",
		Description: {
			DescriptionSummary:
				'Makes a dictionary from the text passed as input. JSON (like {"foo": "bar"}), key-value pairs (like foo=bar&baz=biz), and XML-based plist are supported.'
		},
		IconName: "Scripting.png",
		Input: {
			Multiple: true,
			ParameterKey: "WFInput",
			Required: true,
			Types: ["NSDictionary"]
		},
		LastModifiedDate: "2015-11-24T06:00:00.000Z",
		Name: "Get Dictionary from Input",
		Output: {
			Multiple: true,
			OutputName: "Dictionary",
			Types: ["WFDictionaryContentItem"]
		},
		ParameterSummary: "Get dictionary from ${WFInput}",
		Parameters: [
			{
				Class: "WFVariablePickerParameter",
				Key: "WFInput",
				Label: "Input",
				Placeholder: "Input"
			}
		],
		ResidentCompatible: true,
		ShortName: "Get Dictionary",
		Subcategory: "Dictionaries"
	},
	"is.workflow.actions.detect.emailaddress": {
		ActionClass: "WFCoercionAction",
		ActionKeywords: [
			"find",
			"search",
			"detect",
			"scan",
			"e-mail",
			"emails"
		],
		AppIdentifier: "com.apple.mobilemail",
		Category: "Contacts",
		CoercionItemClass: "WFEmailAddressContentItem",
		Description: {
			DescriptionSummary:
				"Returns any email addresses found in the output from the previous action."
		},
		Input: {
			Multiple: true,
			ParameterKey: "WFInput",
			Required: true,
			Types: ["WFEmailAddress"]
		},
		Name: "Get Email Addresses from Input",
		Output: {
			Multiple: true,
			OutputName: "Email Addresses",
			Types: ["WFEmailAddressContentItem"]
		},
		ParameterSummary: "Get email addresses from ${WFInput}",
		Parameters: [
			{
				Class: "WFTextInputParameter",
				Key: "WFInput",
				Label: "Input",
				Placeholder: "Input"
			}
		],
		ResidentCompatible: true,
		ShortName: "Get Addresses",
		Subcategory: "Email"
	},
	"is.workflow.actions.detect.images": {
		ActionClass: "WFCoercionAction",
		ActionKeywords: [
			"find",
			"search",
			"detect",
			"scan",
			"e-mail",
			"emails"
		],
		Category: "Media",
		CoercionItemClass: "WFImageContentItem",
		Description: {
			DescriptionSummary:
				"Gets images from the result of the previous action.\n\nFor example, this action can get the album art of a song, or all the images on a webpage."
		},
		IconName: "Image.png",
		Input: {
			Multiple: true,
			ParameterKey: "WFInput",
			Required: true,
			Types: ["UIImage"]
		},
		Name: "Get Images from Input",
		Output: {
			Multiple: true,
			OutputName: "Images",
			Types: ["WFImageContentItem"]
		},
		ParameterSummary: "Get images from ${WFInput}",
		Parameters: [
			{
				Class: "WFVariablePickerParameter",
				Key: "WFInput",
				Label: "Input",
				Placeholder: "Input"
			}
		],
		ResidentCompatible: true,
		ShortName: "Get Images",
		Subcategory: "Images"
	},
	"is.workflow.actions.detect.link": {
		ActionClass: "WFCoercionAction",
		ActionKeywords: ["link", "web", "site", "detect", "scan"],
		Category: "Web",
		CoercionItemClass: "WFURLContentItem",
		Description: {
			DescriptionSummary:
				"Returns any links found in the output from the previous action."
		},
		IconName: "URL.png",
		Input: {
			Multiple: true,
			ParameterKey: "WFInput",
			Required: true,
			Types: ["NSURL"]
		},
		Name: "Get URLs from Input",
		Output: {
			Multiple: true,
			OutputName: "URLs",
			Types: ["WFURLContentItem"]
		},
		ParameterSummary: "Get URLs from ${WFInput}",
		Parameters: [
			{
				Class: "WFTextInputParameter",
				Key: "WFInput",
				Label: "Input",
				Placeholder: "Input"
			}
		],
		ResidentCompatible: true,
		ShortName: "Get URLs",
		Subcategory: "URLs"
	},
	"is.workflow.actions.detect.number": {
		ActionClass: "WFCoercionAction",
		ActionKeywords: ["numeric", "digits", "detect", "extract", "scan"],
		AppIdentifier: "com.apple.calculator",
		Attribution: "Scripting",
		Category: "Scripting",
		CoercionItemClass: "WFNumberContentItem",
		Description: {
			DescriptionSummary:
				"Returns numbers from the previous action's output."
		},
		Input: {
			Multiple: true,
			ParameterKey: "WFInput",
			Required: true,
			Types: ["NSNumber"]
		},
		Name: "Get Numbers from Input",
		Output: {
			Multiple: true,
			OutputName: "Numbers",
			Types: ["WFNumberContentItem"]
		},
		ParameterSummary: "Get numbers from ${WFInput}",
		Parameters: [
			{
				AllowsDecimalNumbers: true,
				Class: "WFNumberFieldParameter",
				Key: "WFInput",
				Label: "Input"
			}
		],
		ResidentCompatible: true,
		ShortName: "Get Numbers",
		Subcategory: "Numbers"
	},
	"is.workflow.actions.detect.phonenumber": {
		ActionClass: "WFCoercionAction",
		ActionKeywords: ["phone", "number", "detect", "scan"],
		Category: "Contacts",
		CoercionItemClass: "WFPhoneNumberContentItem",
		Description: {
			DescriptionSummary:
				"Returns any phone numbers found in the output from the previous action."
		},
		IconName: "PhoneNumber.png",
		Input: {
			Multiple: true,
			ParameterKey: "WFInput",
			Required: true,
			Types: ["WFPhoneNumber"]
		},
		Name: "Get Phone Numbers from Input",
		Output: {
			Multiple: true,
			OutputName: "Phone Numbers",
			Types: ["WFPhoneNumberContentItem"]
		},
		ParameterSummary: "Get phone numbers from ${WFInput}",
		Parameters: [
			{
				Class: "WFTextInputParameter",
				Key: "WFInput",
				Label: "Input",
				Placeholder: "Input"
			}
		],
		ResidentCompatible: true,
		Subcategory: "Phone"
	},
	"is.workflow.actions.detect.text": {
		ActionClass: "WFCoercionAction",
		ActionKeywords: [
			"find",
			"search",
			"detect",
			"scan",
			"e-mail",
			"emails"
		],
		Category: "Documents",
		CoercionItemClass: "WFStringContentItem",
		Description: {
			DescriptionSummary:
				"Returns text from the previous action's output.\n\nFor example, this action can get the name of a photo or song, or the text of a webpage."
		},
		IconName: "Text.png",
		Input: {
			Multiple: true,
			ParameterKey: "WFInput",
			Required: true,
			Types: ["WFContentItem"]
		},
		Name: "Get Text from Input",
		Output: {
			Multiple: true,
			OutputName: "Text",
			Types: ["WFStringContentItem"]
		},
		ParameterSummary: "Get text from ${WFInput}",
		Parameters: [
			{
				Class: "WFVariablePickerParameter",
				Key: "WFInput",
				Label: "Input",
				Placeholder: "Input"
			}
		],
		ResidentCompatible: true,
		ShortName: "Get Text",
		Subcategory: "Text"
	},
	"is.workflow.actions.detectlanguage": {
		ActionClass: "WFDetectLanguageAction",
		ActionKeywords: ["Translate", "Get", "Text"],
		Attribution: "Microsoft Cognitive Services",
		Category: "Documents",
		CreationDate: "2015-08-29T17:26:33.000Z",
		Description: {
			DescriptionNote:
				"Powered by Microsoft Cognitive Services (microsoft.com/cognitive-services)",
			DescriptionSummary:
				"Detects the language of the text provided as input."
		},
		IconName: "Translate.png",
		Input: {
			Multiple: true,
			ParameterKey: "WFInput",
			Required: true,
			Types: ["NSString"]
		},
		Name: "Detect Language with Microsoft",
		Output: {
			Multiple: true,
			OutputName: "Language",
			Types: ["NSString"]
		},
		ParameterSummary: "Detect language of ${WFInput}",
		Parameters: [
			{
				Class: "WFTextInputParameter",
				Key: "WFInput",
				Label: "Text"
			}
		],
		ResidentCompatible: true,
		Subcategory: "Translation"
	},
	"is.workflow.actions.dictatetext": {
		ActionClass: "WFDictateTextAction",
		ActionKeywords: [
			"speech",
			"detection",
			"dictation",
			"speak",
			"say",
			"voice",
			"recognize",
			"microphone",
			"transcribe",
			"transcription",
			"siri"
		],
		Category: "Documents",
		CreationDate: "2016-09-09T07:00:00.000Z",
		Description: {
			DescriptionSummary:
				"Transcribes what you say aloud into text and passes the result to the next action."
		},
		IconName: "Dictation.png",
		Name: "Dictate Text",
		Output: {
			Multiple: false,
			OutputName: "Dictated Text",
			Types: ["NSString"]
		},
		ParameterSummary: "Dictate text",
		Parameters: [
			{
				Class: "WFDictateTextLanguagePickerParameter",
				Items: [],
				Key: "WFSpeechLanguage",
				Label: "Language"
			},
			{
				Class: "WFEnumerationParameter",
				DefaultValue: "After Pause",
				Items: ["After Pause", "After Short Pause", "On Tap"],
				Key: "WFDictateTextStopListening",
				Label: "Stop Listening"
			}
		],
		RequiredResources: [
			{
				WFDeviceAttributes: {
					WFDeviceAttributeSystemVersion: {
						WFSystemVersion: "10.0",
						WFSystemVersionRelation: ">="
					}
				},
				WFResourceClass: "WFDeviceAttributesResource"
			},
			"WFUserInteractionResource",
			"WFSpeechRecognitionAccessResource",
			"WFMicrophoneAccessResource"
		],
		RunningViewClass: "WFDictateTextActionView",
		Subcategory: "Text",
		UserInterfaces: ["UIKit", "UIKitWidget", "Siri"]
	},
	"is.workflow.actions.dictionary": {
		ActionClass: "WFDictionaryAction",
		ActionKeywords: ["json", "plist"],
		Category: "Scripting",
		Constructor: true,
		CreationDate: "2016-11-10T20:00:00.000Z",
		Description: {
			DescriptionNote:
				"When coerced to text, the dictionary is represented as JSON.",
			DescriptionSummary:
				"Passes the specified list of key-value pairs to the next action as a dictionary."
		},
		IconName: "Scripting.png",
		Name: "Dictionary",
		Output: {
			Multiple: false,
			OutputName: "Dictionary",
			Types: ["NSDictionary"]
		},
		Parameters: [
			{
				AllowedValueTypes: [0, 1, 2, 3, 4],
				Class: "WFDictionaryParameter",
				Key: "WFItems",
				Label: "Items"
			}
		],
		ResidentCompatible: true,
		Subcategory: "Dictionaries",
		SuggestedNever: true
	},
	"is.workflow.actions.dnd.set": {
		ActionClass: "WFToggleDoNotDisturbAction",
		ActionKeywords: ["dnd", "toggle", "turn"],
		Category: "Scripting",
		Description: {
			DescriptionSummary: "Sets the device’s Do Not Disturb to on or off"
		},
		IconName: "DoNotDisturb.png",
		InputPassthrough: true,
		IntentIdentifier:
			"sirikit.intents.custom.com.apple.DoNotDisturb.Intents.DNDToggleDoNotDisturbIntent",
		Name: "Set Do Not Disturb",
		ParameterSummary: {
			Enabled: "Turn Do Not Disturb ${Enabled}",
			"Enabled(1),AssertionType(Event Ends),Event":
				"Turn Do Not Disturb ${Enabled} until ${AssertionType} ${Event}",
			"Enabled(1),AssertionType(I Leave)":
				"Turn Do Not Disturb ${Enabled} until ${AssertionType}",
			"Enabled(1),AssertionType(Time),Time":
				"Turn Do Not Disturb ${Enabled} until ${AssertionType} ${Time}",
			"Enabled(1),AssertionType(Turned Off)":
				"Turn Do Not Disturb ${Enabled} until ${AssertionType}"
		},
		Parameters: [
			{
				Class: "WFSwitchParameter",
				DefaultValue: false,
				IntentSlotName: "state",
				Key: "Enabled",
				Label: "Do Not Disturb"
			},
			{
				Class: "WFEnumerationParameter",
				DefaultValue: "Turned Off",
				DisallowedVariableTypes: ["Variable"],
				Items: ["Turned Off", "Time", "I Leave", "Event Ends"],
				Key: "AssertionType",
				Label: "Until",
				RequiredResources: [
					{
						WFParameterKey: "Enabled",
						WFParameterValue: true,
						WFResourceClass: "WFParameterRelationResource"
					}
				]
			},
			{
				Class: "WFVariablePickerParameter",
				Description: "The event after which to turn off Do Not Disturb",
				IntentSlotName: "event",
				Key: "Event",
				Label: "Event",
				Placeholder: "Event",
				RequiredResources: [
					{
						WFParameterKey: "Enabled",
						WFParameterValue: true,
						WFResourceClass: "WFParameterRelationResource"
					},
					{
						WFParameterKey: "AssertionType",
						WFParameterValue: "Event Ends",
						WFResourceClass: "WFParameterRelationResource"
					}
				]
			},
			{
				Class: "WFDateFieldParameter",
				Description: "The time after which to turn off Do Not Disturb",
				HintDisplayMode: "Always",
				IntentSlotName: "duration",
				Key: "Time",
				Label: "Time",
				Placeholder: "7 PM",
				RequiredResources: [
					{
						WFParameterKey: "Enabled",
						WFParameterValue: true,
						WFResourceClass: "WFParameterRelationResource"
					},
					{
						WFParameterKey: "AssertionType",
						WFParameterValue: "Time",
						WFResourceClass: "WFParameterRelationResource"
					}
				],
				TextAlignment: "Right"
			}
		],
		SkipSiriExecution: true,
		Subcategory: "Device"
	},
	"is.workflow.actions.documentpicker.open": {
		ActionClass: "WFGetFileAction",
		ActionKeywords: [
			"pick",
			"select",
			"file",
			"document",
			"filepicker.io",
			"filepicker",
			"ink"
		],
		Category: "Documents",
		Description: {
			DescriptionNote:
				"In the iCloud picker, tap “Locations” to see document pickers from other apps.",
			DescriptionSummary:
				"Get files from iCloud Drive or Dropbox. Turn off “Show Document Picker” to specify a path to retrieve."
		},
		IconName: "Documents.png",
		LastModifiedDate: "2017-03-13T05:00:00.000Z",
		Name: "Get File",
		Output: {
			Multiple: true,
			OutputName: "File",
			Types: ["public.data"]
		},
		Parameters: [
			{
				AlwaysShowsButton: true,
				Class: "WFStorageServicePickerParameter",
				Key: "WFFileStorageService",
				Label: "Service"
			},
			{
				Class: "WFSwitchParameter",
				DefaultValue: true,
				Key: "WFShowFilePicker",
				Label: "Show Document Picker"
			},
			{
				Class: "WFSwitchParameter",
				DefaultValue: false,
				Key: "SelectMultiple",
				Label: "Select Multiple",
				RequiredResources: [
					{
						WFParameterKey: "WFShowFilePicker",
						WFParameterValue: true,
						WFResourceClass: "WFParameterRelationResource"
					}
				]
			},
			{
				AutocapitalizationType: "None",
				Class: "WFTextInputParameter",
				Description: 'The path to retrieve, such as "/folder/file.txt"',
				DisableAutocorrection: true,
				Key: "WFGetFilePath",
				KeyboardType: "WebSearch",
				Label: "File Path",
				Placeholder: "example.txt",
				RequiredResources: [
					{
						WFParameterKey: "WFShowFilePicker",
						WFParameterValue: false,
						WFResourceClass: "WFParameterRelationResource"
					}
				],
				TextAlignment: "Left"
			},
			{
				AutocapitalizationType: "None",
				Class: "WFTextInputParameter",
				DisableAutocorrection: true,
				Key: "WFGetFileInitialDirectoryPath",
				KeyboardType: "WebSearch",
				Label: "Initial Path",
				Placeholder: "optional",
				TextAlignment: "Left",
				Hidden: true
			},
			{
				Class: "WFSwitchParameter",
				DefaultValue: true,
				Key: "WFFileErrorIfNotFound",
				Label: "Error If Not Found",
				RequiredResources: [
					{
						WFParameterKey: "WFShowFilePicker",
						WFParameterValue: false,
						WFResourceClass: "WFParameterRelationResource"
					}
				]
			}
		],
		RequiredResources: [
			{
				RequiredResources: [
					{
						WFParameterKey: "WFShowFilePicker",
						WFParameterValue: true,
						WFResourceClass: "WFParameterRelationResource"
					}
				],
				WFResourceClass: "WFUserInteractionResource"
			}
		],
		Subcategory: "File Storage",
		UserInterfaces: ["UIKit"]
	},
	"is.workflow.actions.documentpicker.save": {
		ActionClass: "WFSaveFileAction",
		ActionKeywords: [
			"save",
			"file",
			"document",
			"icloud",
			"cloud",
			"upload"
		],
		Category: "Documents",
		Description: {
			DescriptionNote:
				"In the iCloud picker, tap “Locations” to see document pickers from other apps.",
			DescriptionResult: "The saved files",
			DescriptionSummary:
				"Save files to iCloud Drive or Dropbox. Turn off “Ask Where to Save” in order to specify a destination path."
		},
		IconName: "Documents.png",
		Input: {
			Multiple: true,
			ParameterKey: "WFInput",
			Required: true,
			Types: ["public.data"]
		},
		LastModifiedDate: "2017-03-13T05:00:00.000Z",
		Name: "Save File",
		Output: {
			Multiple: true,
			OutputName: "Saved File",
			Types: ["public.data"]
		},
		ParameterCollapsingBehavior: "Never",
		ParameterSummary: "Save ${WFInput}",
		Parameters: [
			{
				AlwaysShowsButton: true,
				Class: "WFStorageServicePickerParameter",
				Key: "WFFileStorageService",
				Label: "Service"
			},
			{
				Class: "WFSwitchParameter",
				DefaultValue: true,
				Key: "WFAskWhereToSave",
				Label: "Ask Where to Save"
			},
			{
				AutocapitalizationType: "None",
				Class: "WFTextInputParameter",
				Description: 'The path to save to, such as "/folder/file.txt"',
				DisableAutocorrection: true,
				Key: "WFFileDestinationPath",
				Label: "Destination Path",
				RequiredResources: [
					{
						WFParameterKey: "WFAskWhereToSave",
						WFParameterValue: false,
						WFResourceClass: "WFParameterRelationResource"
					}
				],
				TextAlignment: "Left"
			},
			{
				Class: "WFSwitchParameter",
				Key: "WFSaveFileOverwrite",
				Label: "Overwrite If File Exists",
				RequiredResources: [
					{
						WFParameterKey: "WFAskWhereToSave",
						WFParameterValue: false,
						WFResourceClass: "WFParameterRelationResource"
					}
				]
			},
			{
				Class: "WFVariablePickerParameter",
				Key: "WFInput",
				Label: "File",
				Placeholder: "File"
			}
		],
		RequiredResources: [
			{
				RequiredResources: [
					{
						WFParameterKey: "WFAskWhereToSave",
						WFParameterValue: true,
						WFResourceClass: "WFParameterRelationResource"
					}
				],
				WFResourceClass: "WFUserInteractionResource"
			}
		],
		Subcategory: "File Storage",
		UserInterfaces: ["UIKit"]
	},
	"is.workflow.actions.downloadurl": {
		ActionClass: "WFDownloadURLAction",
		ActionKeywords: [
			"URL",
			"web",
			"display",
			"site",
			"open",
			"show",
			"post",
			"put",
			"api",
			"curl",
			"wget",
			"http",
			"headers",
			"request",
			"form"
		],
		Attribution: "Network",
		Category: "Web",
		Description: {
			DescriptionNote:
				'To make a multipart HTTP request, choose "Form" as the request body type and add files as field values.',
			DescriptionResult: "The fetched data",
			DescriptionSummary:
				"Gets the contents of URLs passed into the action. Useful for downloading files and web content, or for making API requests."
		},
		IconName: "Downloads.png",
		Input: {
			Multiple: true,
			ParameterKey: "WFURL",
			Required: true,
			Types: ["WFURLContentItem"]
		},
		InputPassthrough: false,
		LastModifiedDate: "2016-11-11T06:00:00.000Z",
		Name: "Get Contents of URL",
		Output: {
			Multiple: true,
			OutputName: "Contents of URL",
			Types: ["public.data"]
		},
		ParameterSummary: "Get contents of ${WFURL}",
		Parameters: [
			{
				AllowsMultipleValues: false,
				AutocapitalizationType: "None",
				Class: "WFTextInputParameter",
				DisableAutocorrection: true,
				Key: "WFURL",
				KeyboardType: "URL",
				Label: "URL",
				Placeholder: "URL",
				TextContentType: "URL"
			},
			{
				Class: "WFEnumerationParameter",
				DefaultValue: "GET",
				Description: "The HTTP method to use.",
				DoNotLocalizeValues: true,
				Items: ["GET", "POST", "PUT", "PATCH", "DELETE"],
				Key: "WFHTTPMethod",
				Label: "Method"
			},
			{
				Class: "WFExpandingParameter",
				Key: "ShowHeaders",
				Label: "Headers"
			},
			{
				Class: "WFDictionaryParameter",
				ItemTypeName: "header",
				Key: "WFHTTPHeaders",
				Label: "Headers",
				RequiredResources: [
					{
						WFParameterKey: "ShowHeaders",
						WFParameterValue: true,
						WFResourceClass: "WFParameterRelationResource"
					}
				]
			},
			{
				Class: "WFEnumerationParameter",
				DefaultValue: "JSON",
				DisallowedVariableTypes: ["Ask", "Variable"],
				Items: ["JSON", "Form", "File"],
				Key: "WFHTTPBodyType",
				Label: "Request Body",
				RequiredResources: [
					{
						WFParameterKey: "WFHTTPMethod",
						WFParameterRelation: "!=",
						WFParameterValues: ["GET"],
						WFResourceClass: "WFParameterRelationResource"
					}
				]
			},
			{
				AllowedValueTypes: [0, 5],
				Class: "WFDictionaryParameter",
				ItemTypeName: "field",
				Key: "WFFormValues",
				Label: "Form Values",
				RequiredResources: [
					{
						WFParameterKey: "WFHTTPBodyType",
						WFParameterValue: "Form",
						WFResourceClass: "WFParameterRelationResource"
					},
					{
						WFParameterKey: "WFHTTPMethod",
						WFParameterRelation: "!=",
						WFParameterValues: ["GET"],
						WFResourceClass: "WFParameterRelationResource"
					}
				]
			},
			{
				AllowedValueTypes: [0, 1, 2, 3, 4],
				Class: "WFDictionaryParameter",
				ItemTypeName: "field",
				Key: "WFJSONValues",
				Label: "JSON Values",
				RequiredResources: [
					{
						WFParameterKey: "WFHTTPBodyType",
						WFParameterValue: "JSON",
						WFResourceClass: "WFParameterRelationResource"
					},
					{
						WFParameterKey: "WFHTTPMethod",
						WFParameterRelation: "!=",
						WFParameterValues: ["GET"],
						WFResourceClass: "WFParameterRelationResource"
					}
				]
			},
			{
				Class: "WFVariablePickerParameter",
				Key: "WFRequestVariable",
				Label: "File",
				Placeholder: "Choose Variable",
				RequiredResources: [
					{
						WFParameterKey: "WFHTTPBodyType",
						WFParameterValue: "File",
						WFResourceClass: "WFParameterRelationResource"
					},
					{
						WFParameterKey: "WFHTTPMethod",
						WFParameterRelation: "!=",
						WFParameterValues: ["GET"],
						WFResourceClass: "WFParameterRelationResource"
					}
				]
			}
		],
		RequiredResources: ["WFRemoteServerAccessResource"],
		ResidentCompatible: true,
		ShortName: "Download URL",
		Subcategory: "Web Requests"
	},
	"is.workflow.actions.email": {
		ActionClass: "WFEmailAddressAction",
		ActionKeywords: ["emails", "e-mails", "address"],
		AppIdentifier: "com.apple.mobilemail",
		Category: "Contacts",
		Constructor: true,
		Description: {
			DescriptionSummary:
				"Passes the specified email addresses to the next action."
		},
		Name: "Email Address",
		Output: {
			Multiple: true,
			OutputName: "Email Address",
			Types: ["WFEmailAddress"]
		},
		Parameters: [
			{
				AllowsMultipleValues: true,
				Class: "WFEmailAddressFieldParameter",
				Key: "WFEmailAddress",
				Placeholder: "Type in an email address"
			}
		],
		ResidentCompatible: true,
		Subcategory: "Email"
	},
	"is.workflow.actions.encodemedia": {
		ActionClass: "WFEncodeMediaAction",
		ActionKeywords: [
			"quicktime",
			"render",
			"audio",
			"transcode",
			"metadata",
			"artwork",
			"id3",
			"video"
		],
		Category: "Media",
		Description: {
			DescriptionSummary:
				"Re-encodes the media passed as input at the specified size, optionally converting to audio."
		},
		IconName: "QuickTime.png",
		Input: {
			Multiple: true,
			ParameterKey: "WFMedia",
			Required: true,
			Types: ["AVAsset"]
		},
		InputPassthrough: false,
		LastModifiedDate: "2016-05-23T07:00:00.000Z",
		Name: "Encode Media",
		Output: {
			Multiple: true,
			OutputName: "Encoded Media",
			Types: ["AVAsset"]
		},
		ParameterSummary: "Encode ${WFMedia}",
		Parameters: [
			{
				Class: "WFVariablePickerParameter",
				Key: "WFMedia",
				Label: "Media",
				Placeholder: "Media"
			},
			{
				Class: "WFSwitchParameter",
				DefaultValue: false,
				Key: "WFMediaAudioOnly",
				Label: "Audio Only"
			},
			{
				Class: "WFEnumerationParameter",
				DefaultValue: "M4A",
				Items: ["M4A", "AIFF"],
				Key: "WFMediaAudioFormat",
				Label: "Format",
				RequiredResources: [
					{
						WFParameterKey: "WFMediaAudioOnly",
						WFParameterValue: true,
						WFResourceClass: "WFParameterRelationResource"
					}
				]
			},
			{
				Class: "WFEnumerationParameter",
				DefaultValue: "Passthrough",
				Items: [
					"640x480",
					"960x540",
					"1280x720",
					"1920x1080",
					"HEVC 1920x1080",
					"HEVC 3840x2160",
					"Passthrough"
				],
				Key: "WFMediaSize",
				Label: "Size",
				RequiredResources: [
					{
						WFParameterKey: "WFMediaAudioOnly",
						WFParameterValue: false,
						WFResourceClass: "WFParameterRelationResource"
					}
				]
			},
			{
				Class: "WFEnumerationParameter",
				DefaultValue: "Normal",
				Items: ["0.5X", "Normal", "2X", "Custom"],
				Key: "WFMediaSpeed",
				Label: "Speed"
			},
			{
				AllowsDecimalNumbers: true,
				Class: "WFNumberFieldParameter",
				Description:
					"A number greater than zero that indicates how fast or slow to encode the media. Values between 0.0 and 1.0 slow down the media.",
				Key: "WFMediaCustomSpeed",
				Label: "Custom Speed",
				Placeholder: "1.0",
				RequiredResources: [
					{
						WFParameterKey: "WFMediaSpeed",
						WFParameterValue: "Custom",
						WFResourceClass: "WFParameterRelationResource"
					}
				],
				TextAlignment: "Right"
			},
			{
				Class: "WFExpandingParameter",
				Key: "Metadata",
				Label: "Metadata"
			},
			{
				Class: "WFTextInputParameter",
				Key: "WFMetadataTitle",
				Label: "Title",
				Placeholder: "My Great Track",
				RequiredResources: [
					{
						WFParameterKey: "Metadata",
						WFParameterValue: true,
						WFResourceClass: "WFParameterRelationResource"
					}
				],
				TextAlignment: "Right"
			},
			{
				Class: "WFTextInputParameter",
				Key: "WFMetadataArtist",
				Label: "Artist",
				Placeholder: "Nicholas Fryingpan",
				RequiredResources: [
					{
						WFParameterKey: "Metadata",
						WFParameterValue: true,
						WFResourceClass: "WFParameterRelationResource"
					}
				],
				TextAlignment: "Right"
			},
			{
				Class: "WFTextInputParameter",
				Key: "WFMetadataAlbum",
				Label: "Album",
				Placeholder: "Abbey Road",
				RequiredResources: [
					{
						WFParameterKey: "Metadata",
						WFParameterValue: true,
						WFResourceClass: "WFParameterRelationResource"
					}
				],
				TextAlignment: "Right"
			},
			{
				Class: "WFTextInputParameter",
				Key: "WFMetadataGenre",
				Label: "Genre",
				Placeholder: "Indie",
				RequiredResources: [
					{
						WFParameterKey: "Metadata",
						WFParameterValue: true,
						WFResourceClass: "WFParameterRelationResource"
					}
				],
				TextAlignment: "Right"
			},
			{
				Class: "WFTextInputParameter",
				Key: "WFMetadataYear",
				Label: "Year",
				Placeholder: "2001",
				RequiredResources: [
					{
						WFParameterKey: "Metadata",
						WFParameterValue: true,
						WFResourceClass: "WFParameterRelationResource"
					}
				],
				TextAlignment: "Right"
			},
			{
				Class: "WFVariablePickerParameter",
				Key: "WFMetadataArtwork",
				Label: "Artwork",
				Placeholder: "Choose Variable",
				RequiredResources: [
					{
						WFParameterKey: "Metadata",
						WFParameterValue: true,
						WFResourceClass: "WFParameterRelationResource"
					}
				]
			}
		],
		ResidentCompatible: true,
		Subcategory: "Video"
	},
	"is.workflow.actions.evernote.append": {
		ActionClass: "WFEvernoteAppendAction",
		ActionKeywords: ["add", "prepend", "save", "evernote"],
		AppIdentifier: "com.evernote.iPhone.Evernote",
		Category: "Documents",
		Description: {
			DescriptionInput: "The content to add to your note",
			DescriptionSummary:
				"Finds a note using the specified criteria and appends the input to the note."
		},
		Input: {
			Multiple: true,
			ParameterKey: "WFInput",
			Required: true,
			Types: ["WFContentItem"]
		},
		Name: "Append to Evernote",
		Output: {
			Multiple: false,
			OutputName: "Note",
			Types: ["ENNoteRef"]
		},
		ParameterSummary:
			"${WFEvernoteWriteMode} ${WFInput} to the note ${WFEvernoteNotesTitleSearch}",
		Parameters: [
			{
				Class: "WFVariablePickerParameter",
				Key: "WFInput",
				Label: "Content",
				Placeholder: "Content"
			},
			{
				Class: "WFTextInputParameter",
				Description:
					"The title (or part of the title) of the note to append to",
				Key: "WFEvernoteNotesTitleSearch",
				Label: "Note Title",
				TextAlignment: "Right"
			},
			{
				Class: "WFEnumerationParameter",
				DefaultValue: "Append",
				Items: ["Append", "Prepend"],
				Key: "WFEvernoteWriteMode",
				Label: "Mode"
			},
			{
				Class: "WFEvernoteNotebookPickerParameter",
				Description:
					"The notebook in which the note is located (optional)",
				Key: "WFEvernoteNotesNotebookName",
				Label: "In Notebook"
			}
		],
		RequiredResources: ["WFEvernoteAccessResource"],
		AppInfo: "Evernote"
	},
	"is.workflow.actions.evernote.delete": {
		ActionClass: "WFEvernoteDeleteAction",
		ActionKeywords: ["banish", "demolish", "remove", "peace", "byebye"],
		AppIdentifier: "com.evernote.iPhone.Evernote",
		BlocksOutput: true,
		Category: "Documents",
		Description: {
			DescriptionSummary:
				"Deletes the notes passed as input from Evernote."
		},
		Input: {
			Multiple: true,
			ParameterKey: "WFInput",
			Required: true,
			Types: ["ENNoteRef"]
		},
		Name: "Delete Notes",
		ParameterSummary: "Delete ${WFInput}",
		Parameters: [
			{
				Class: "WFSwitchParameter",
				DefaultValue: true,
				Description:
					"When enabled, this action will confirm with you before deleting notes from Evernote. You'll always be asked for confirmation when deleting 10 notes or more at a time.",
				Key: "WFEvernoteConfirmDeletion",
				Label: "Confirm Before Deleting"
			},
			{
				Class: "WFVariablePickerParameter",
				Key: "WFInput",
				Label: "Notes",
				Placeholder: "Notes"
			}
		],
		RequiredResources: ["WFEvernoteAccessResource"]
	},
	"is.workflow.actions.evernote.get": {
		ActionClass: "WFEvernoteGetNotesAction",
		ActionKeywords: ["search", "tag"],
		AppIdentifier: "com.evernote.iPhone.Evernote",
		Category: "Documents",
		Description: {
			DescriptionSummary:
				"Get recent notes from Evernote, optionally filtering based on criteria."
		},
		Name: "Get Notes",
		Output: {
			Multiple: true,
			OutputName: "Notes",
			Types: ["ENNoteRef"]
		},
		ParameterSummary: "Get ${WFEvernoteNotesCount}",
		Parameters: [
			{
				Class: "WFTextInputParameter",
				Description: "Text to look for in the title of notes.",
				Key: "WFEvernoteNotesTitleSearch",
				Label: "Title Search",
				Placeholder: "optional"
			},
			{
				Class: "WFEvernoteTagsTagFieldParameter",
				Description:
					"A list of tags with which to find matching notes. Wildcard characters (*) may be used.",
				Key: "WFEvernoteNotesTags",
				Label: "Tags",
				Placeholder: "optional"
			},
			{
				Class: "WFEvernoteNotebookPickerParameter",
				Description:
					"The notebook in which to look for notes (optional)",
				Key: "WFEvernoteNotesNotebookName",
				Label: "In Notebook"
			},
			{
				Class: "WFStepperParameter",
				DefaultValue: 1,
				Key: "WFEvernoteNotesCount",
				StepperDescription: "Number of Notes",
				StepperNoun: "Note",
				StepperPluralNoun: "Notes",
				StepperPrefix: "Get"
			}
		],
		RequiredResources: ["WFEvernoteAccessResource"]
	},
	"is.workflow.actions.evernote.getlink": {
		ActionClass: "WFEvernoteGetLinkAction",
		ActionKeywords: ["url", "share"],
		AppIdentifier: "com.evernote.iPhone.Evernote",
		Category: "Documents",
		Description: {
			DescriptionSummary:
				"Gets a link to the Evernote note passed into the action, which can be shared."
		},
		Input: {
			Multiple: true,
			ParameterKey: "WFInput",
			Required: true,
			Types: ["ENNoteRef"]
		},
		Name: "Get Note Link",
		Output: {
			Multiple: true,
			OutputName: "Note Link",
			Types: ["NSURL"]
		},
		ParameterSummary: "Get link for ${WFInput}",
		Parameters: [
			{
				Class: "WFSwitchParameter",
				DefaultValue: false,
				Description:
					"When enabled, an evernote:// URL will be generated, suitable for opening the note in the Evernote app.",
				Key: "WFEvernoteShareInAppLink",
				Label: "In-App Link"
			},
			{
				Class: "WFVariablePickerParameter",
				Key: "WFInput",
				Label: "Note",
				Placeholder: "Note"
			}
		],
		RequiredResources: ["WFEvernoteAccessResource"]
	},
	"is.workflow.actions.evernote.new": {
		ActionClass: "WFEvernoteCreateAction",
		ActionKeywords: ["make", "save"],
		AppIdentifier: "com.evernote.iPhone.Evernote",
		Category: "Documents",
		Description: {
			DescriptionInput: "The content to include in your new note",
			DescriptionSummary: "Saves the input as a note in Evernote."
		},
		Input: {
			Multiple: true,
			ParameterKey: "WFInput",
			Required: true,
			Types: ["WFContentItem"]
		},
		Name: "Create New Note",
		Output: {
			Multiple: false,
			OutputName: "New Note",
			Types: ["ENNoteRef"]
		},
		ParameterSummary:
			"Create note with ${WFInput} named ${WFEvernoteNoteTitle}",
		Parameters: [
			{
				Class: "WFTextInputParameter",
				Key: "WFEvernoteNoteTitle",
				Label: "Note Title",
				Placeholder: "optional"
			},
			{
				Class: "WFEvernoteNotebookPickerParameter",
				Description:
					"The notebook in which to save your new note (optional)",
				Key: "WFEvernoteNotebook",
				Label: "Notebook"
			},
			{
				Class: "WFEvernoteTagsTagFieldParameter",
				Description:
					"A list of tags to apply to the new note (optional)",
				Key: "WFEvernoteTags",
				Label: "Tags",
				Placeholder: "optional"
			},
			{
				Class: "WFVariablePickerParameter",
				Key: "WFInput",
				Label: "Content",
				Placeholder: "Content"
			}
		],
		RequiredResources: ["WFEvernoteAccessResource"]
	},
	"is.workflow.actions.exit": {
		ActionClass: "WFExitAction",
		ActionKeywords: ["quit", "return", "workflow"],
		Category: "Scripting",
		Description: {
			DescriptionSummary:
				"Stops execution of the current shortcut and dismisses the shortcut on screen. No more actions will be run after this action."
		},
		IconName: "Scripting.png",
		Input: {
			Multiple: true,
			ParameterKey: "WFResult",
			Required: false,
			Types: ["WFContentItem"]
		},
		LastModifiedDate: "2015-08-20T07:00:00.000Z",
		Name: "Exit Shortcut",
		ParameterSummary: "Exit shortcut with ${WFResult}",
		Parameters: [
			{
				Class: "WFVariablePickerParameter",
				Key: "WFResult",
				Label: "Result",
				Placeholder: "Result"
			}
		],
		RequiredResources: ["WFMainThreadResource"],
		ResidentCompatible: true,
		Subcategory: "Control Flow",
		SuggestedNever: true
	},
	"is.workflow.actions.exportsong": {
		ActionClass: "WFSelectMusicAction",
		ActionKeywords: ["export", "song", "music", "itunes", "library"],
		AppIdentifier: "com.apple.Music",
		Category: "Media",
		Description: {
			DescriptionSummary:
				"Prompts to select music from your local music library."
		},
		InputPassthrough: false,
		LastModifiedDate: "2015-05-12T07:00:00.000Z",
		Name: "Select Music",
		Output: {
			Multiple: true,
			OutputName: "Music",
			Types: ["MPMediaItem"]
		},
		ParameterSummary: "Select music",
		Parameters: [
			{
				Class: "WFSwitchParameter",
				Key: "WFExportSongActionSelectMultiple",
				Label: "Select Multiple Songs"
			}
		],
		RequiredResources: [
			"WFAppleMusicAccessResource",
			"WFUserInteractionResource"
		],
		Subcategory: "Music",
		UserInterfaces: ["UIKit"]
	},
	"is.workflow.actions.facebook.messenger.send": {
		ActionClass: "WFFBMessengerSendAction",
		ActionKeywords: [
			"messenger",
			"facebook",
			"fb",
			"send",
			"text",
			"gif",
			"image",
			"video"
		],
		AppIdentifier: "com.facebook.Messenger",
		Category: "Sharing",
		CreationDate: "2015-04-01T05:00:00.000Z",
		Description: {
			DescriptionSummary: "Sends the input via Facebook Messenger"
		},
		Input: {
			Multiple: false,
			Required: true,
			Types: [
				"WFImageContentItem",
				"WFAVAssetContentItem",
				"com.compuserve.gif"
			]
		},
		InputPassthrough: true,
		Name: "Send via Messenger",
		RequiredResources: [
			"WFUserInteractionResource",
			{
				AppIdentifier: "com.facebook.Messenger",
				WFResourceClass: "WFAppInstalledResource"
			}
		],
		Subcategory: "Messaging",
		UserInterfaces: ["UIKit"]
	},
	"is.workflow.actions.file.append": {
		ActionClass: "WFAppendFileAction",
		ActionKeywords: ["add", "text", "prepend"],
		Category: "Documents",
		CreationDate: "2017-03-13T05:00:00.000Z",
		Description: {
			DescriptionNote:
				"If no file exists yet at the specified path, a new file will be created. Make sure to include a file extension (usually .txt) at the end of your path.",
			DescriptionResult: "The file that was appended to",
			DescriptionSummary:
				"Adds the text passed as input to the end of the specified file."
		},
		IconName: "Documents.png",
		Input: {
			Multiple: false,
			ParameterKey: "WFInput",
			Required: true,
			Types: ["WFStringContentItem"]
		},
		Name: "Append to File",
		Output: {
			Multiple: false,
			OutputName: "Appended File",
			Types: ["public.data"]
		},
		ParameterCollapsingBehavior: "Never",
		ParameterSummary: "${WFAppendFileWriteMode} ${WFInput}",
		Parameters: [
			{
				AlwaysRequiresServiceResource: true,
				AlwaysShowsButton: true,
				Class: "WFStorageServicePickerParameter",
				Key: "WFFileStorageService",
				Label: "Service"
			},
			{
				AutocapitalizationType: "None",
				Class: "WFTextInputParameter",
				Description:
					"The name or path of the file to retrieve. For example, if you are appending a file called “notes.txt” in a folder called “Public”, use “/Public/notes.txt”.",
				DisableAutocorrection: true,
				Key: "WFFilePath",
				KeyboardType: "WebSearch",
				Label: "File Path",
				Placeholder: "example.txt",
				Prefix: "/Shortcuts/",
				TextAlignment: "Left"
			},
			{
				Class: "WFEnumerationParameter",
				DefaultValue: "Append",
				Items: ["Append", "Prepend"],
				Key: "WFAppendFileWriteMode",
				Label: "Mode"
			},
			{
				Class: "WFSwitchParameter",
				DefaultValue: true,
				Key: "WFAppendOnNewLine",
				Label: "Make New Line"
			},
			{
				Class: "WFTextInputParameter",
				Key: "WFInput",
				Label: "Text"
			}
		],
		ShortName: "Append to File",
		Subcategory: "File Storage"
	},
	"is.workflow.actions.file.createfolder": {
		ActionClass: "WFCreateFolderAction",
		ActionKeywords: ["directory"],
		Category: "Documents",
		CreationDate: "2017-03-13T05:00:00.000Z",
		Description: {
			DescriptionSummary:
				"Makes a new folder in the specified file storage service."
		},
		IconName: "Documents.png",
		Name: "Create Folder",
		Parameters: [
			{
				AlwaysShowsButton: true,
				Class: "WFStorageServicePickerParameter",
				Key: "WFFileStorageService",
				Label: "Service"
			},
			{
				AutocapitalizationType: "None",
				Class: "WFTextInputParameter",
				Description:
					"The path of the new folder. For example, if you want create “Adventure” in an existing folder titled “Photos”, put “/Photos/Adventure/”",
				DisableAutocorrection: true,
				Key: "WFFilePath",
				KeyboardType: "WebSearch",
				Label: "Path",
				TextAlignment: "Left"
			}
		],
		Subcategory: "File Storage",
		SuggestedAsInitialAction: false
	},
	"is.workflow.actions.file.delete": {
		ActionClass: "WFDeleteFileAction",
		ActionKeywords: ["delete", "files", "remove", "obliterate"],
		BlocksOutput: true,
		Category: "Documents",
		CreationDate: "2017-03-13T05:00:00.000Z",
		Description: {
			DescriptionSummary: "Delete the files passed in as input."
		},
		IconName: "Documents.png",
		Input: {
			Multiple: true,
			ParameterKey: "WFInput",
			Required: true,
			Types: ["public.data"]
		},
		Name: "Delete Files",
		ParameterSummary: "Delete ${WFInput}",
		Parameters: [
			{
				Class: "WFSwitchParameter",
				DefaultValue: true,
				Description:
					"When enabled, this action will confirm with you before deleting the file.",
				Key: "WFDeleteFileConfirmDeletion",
				Label: "Confirm Before Deleting"
			},
			{
				Class: "WFVariablePickerParameter",
				Key: "WFInput",
				Label: "Files",
				Placeholder: "Files"
			}
		],
		Subcategory: "File Storage"
	},
	"is.workflow.actions.file.getlink": {
		ActionClass: "WFGetFileLinkAction",
		ActionKeywords: ["url", "share"],
		Category: "Documents",
		CreationDate: "2017-03-13T05:00:00.000Z",
		Description: {
			DescriptionSummary:
				"Gets a public link to the file passed into the action."
		},
		IconName: "Documents.png",
		Input: {
			Multiple: true,
			ParameterKey: "WFFile",
			Required: true,
			Types: []
		},
		Name: "Get Link to File",
		Output: {
			Multiple: true,
			Types: ["NSURL"]
		},
		OutputName: "Link to File",
		ParameterSummary: "Get link to ${WFFile}",
		Parameters: [
			{
				Class: "WFVariablePickerParameter",
				Key: "WFFile",
				Label: "File",
				Placeholder: "File"
			}
		],
		ShortName: "Get Link",
		Subcategory: "File Storage"
	},
	"is.workflow.actions.filter.articles": {
		ActionClass: "WFContentItemFilterAction",
		AppIdentifier: "com.apple.mobilesafari",
		Attribution: "Safari",
		Category: "Web",
		CreationDate: "2015-02-13T08:00:00.000Z",
		Name: "Filter Articles",
		Subcategory: "Articles",
		WFContentItemClass: "WFArticleContentItem",
		Parameters: [
			{
				Class: "WFFilterParameter",
				Key: "WFContentItemFilter",
				Label: "Filter",
				ContentItemClass: "WFArticleContentItem"
			},
			{
				Class: "WFEnumerationParameter",
				Key: "WFContentItemSortProperty",
				Label: "Sort by",
				Items: [
					"Name",
					"Title",
					"Published Date",
					"Author",
					"Number of Words",
					"Main Image URL",
					"URL",
					"Excerpt",
					"Random"
				]
			},
			{
				Class: "WFEnumerationParameter",
				Key: "WFContentItemSortOrder",
				Label: "Order",
				Items: [
					"Oldest First",
					"Newest First",
					"Latest First",
					"Smallest First",
					"Biggest First",
					"Ascending",
					"Descending",
					"Shortest First",
					"Longest First",
					"A to Z",
					"Z to A"
				],
				RequiredResources: [
					{
						WFParameterKey: "WFContentItemSortProperty",
						WFParameterValues: ["Random"],
						WFResourceClass: "WFParameterRelationResource",
						WFParameterRelation: "!="
					}
				]
			},
			{
				Class: "WFSwitchParameter",
				Key: "WFContentItemLimitEnabled",
				Label: "Limit"
			},
			{
				Class: "WFStepperParameter",
				Key: "WFContentItemLimitNumber",
				Label: "Get Items",
				RequiredResources: [
					{
						WFParameterKey: "WFSwitchParameter",
						WFParameterValues: [true],
						WFResourceClass: "WFParameterRelationResource"
					}
				]
			}
		]
	},
	"is.workflow.actions.filter.calendarevents": {
		ActionClass: "WFContentItemFilterAction",
		AppIdentifier: "com.apple.mobilecal",
		Attribution: "Calendar",
		Category: "Calendar",
		CreationDate: "2015-01-22T08:00:00.000Z",
		Name: "Find Calendar Events",
		RequiredResources: ["WFCalendarAccessResource"],
		ShortName: "Find Events",
		Subcategory: "Calendar",
		SuggestedAsInitialAction: false,
		WFContentItemClass: "WFCalendarEventContentItem",
		WFContentItemDefaultProperty: "Calendar",
		WatchCompatible: true,
		Parameters: [
			{
				Class: "WFFilterParameter",
				Key: "WFContentItemFilter",
				Label: "Filter",
				ContentItemClass: "WFCalendarEventContentItem"
			},
			{
				Class: "WFEnumerationParameter",
				Key: "WFContentItemSortProperty",
				Label: "Sort by",
				Items: [
					"Attendees",
					"Calendar",
					"Creation Date",
					"Duration",
					"File Extension",
					"File Size",
					"Has Alarms",
					"Is All Day",
					"Last Modified Date",
					"Location",
					"Name",
					"Notes",
					"Organizer",
					"Start Date",
					"Title",
					"URL",
					"Random"
				]
			},
			{
				Class: "WFEnumerationParameter",
				Key: "WFContentItemSortOrder",
				Label: "Order",
				Items: [
					"Oldest First",
					"Newest First",
					"Latest First",
					"Smallest First",
					"Biggest First",
					"Ascending",
					"Descending",
					"Shortest First",
					"Longest First",
					"A to Z",
					"Z to A"
				],
				RequiredResources: [
					{
						WFParameterKey: "WFContentItemSortProperty",
						WFParameterValues: ["Random"],
						WFResourceClass: "WFParameterRelationResource",
						WFParameterRelation: "!="
					}
				]
			},
			{
				Class: "WFSwitchParameter",
				Key: "WFContentItemLimitEnabled",
				Label: "Limit"
			},
			{
				Class: "WFStepperParameter",
				Key: "WFContentItemLimitNumber",
				Label: "Get Items",
				RequiredResources: [
					{
						WFParameterKey: "WFSwitchParameter",
						WFParameterValues: [true],
						WFResourceClass: "WFParameterRelationResource"
					}
				]
			}
		]
	},
	"is.workflow.actions.filter.contacts": {
		ActionClass: "WFContentItemFilterAction",
		AppIdentifier: "com.apple.MobileAddressBook",
		Attribution: "Contacts",
		Category: "Contacts",
		CreationDate: "2015-01-22T08:00:00.000Z",
		LastModifiedDate: "2015-12-14T08:00:00.000Z",
		Name: "Find Contacts",
		RequiredResources: ["WFContactAccessResource"],
		Subcategory: "Contacts",
		SuggestedAsInitialAction: false,
		WFContentItemClass: "WFContactContentItem",
		Parameters: [
			{
				Class: "WFFilterParameter",
				Key: "WFContentItemFilter",
				Label: "Filter",
				ContentItemClass: "WFContactContentItem"
			},
			{
				Class: "WFEnumerationParameter",
				Key: "WFContentItemSortProperty",
				Label: "Sort by",
				Items: [
					"Email Address",
					"Phonetic First Name",
					"Prefix",
					"URL",
					"Nickname",
					"Last Name",
					"Phone Number",
					"Has Photo",
					"File Size",
					"Creation Date",
					"Last Modified Date",
					"Middle Name",
					"Company",
					"Department",
					"Name",
					"Contact Photo",
					"First Name",
					"Phonetic Last Name",
					"File Extension",
					"Street Address",
					"Suffix",
					"Job Title",
					"Notes",
					"Birthday",
					"Group",
					"Phonetic Middle Name",
					"Random"
				]
			},
			{
				Class: "WFEnumerationParameter",
				Key: "WFContentItemSortOrder",
				Label: "Order",
				Items: [
					"Oldest First",
					"Newest First",
					"Latest First",
					"Smallest First",
					"Biggest First",
					"Ascending",
					"Descending",
					"Shortest First",
					"Longest First",
					"A to Z",
					"Z to A"
				],
				RequiredResources: [
					{
						WFParameterKey: "WFContentItemSortProperty",
						WFParameterValues: ["Random"],
						WFResourceClass: "WFParameterRelationResource",
						WFParameterRelation: "!="
					}
				]
			},
			{
				Class: "WFSwitchParameter",
				Key: "WFContentItemLimitEnabled",
				Label: "Limit"
			},
			{
				Class: "WFStepperParameter",
				Key: "WFContentItemLimitNumber",
				Label: "Get Items",
				RequiredResources: [
					{
						WFParameterKey: "WFSwitchParameter",
						WFParameterValues: [true],
						WFResourceClass: "WFParameterRelationResource"
					}
				]
			}
		]
	},
	"is.workflow.actions.filter.eventattendees": {
		ActionClass: "WFContentItemFilterAction",
		AppIdentifier: "com.apple.mobilecal",
		Attribution: "Calendar",
		Category: "Calendar",
		CreationDate: "2015-01-22T08:00:00.000Z",
		Name: "Filter Event Attendees",
		ShortName: "Filter Attendees",
		Subcategory: "Event Attendees",
		WFContentItemClass: "WFEKParticipantContentItem",
		WatchCompatible: true,
		Parameters: []
	},
	"is.workflow.actions.filter.files": {
		ActionClass: "WFContentItemFilterAction",
		Attribution: "Files",
		Category: "Documents",
		CreationDate: "2015-01-22T08:00:00.000Z",
		IconName: "Documents.png",
		Input: {
			Types: ["public.data"]
		},
		Name: "Filter Files",
		Subcategory: "Files",
		SuggestedNever: true,
		WFContentItemClass: "WFGenericFileContentItem",
		Parameters: [
			{
				Class: "WFFilterParameter",
				Key: "WFContentItemFilter",
				Label: "Filter",
				ContentItemClass: "WFGenericFileContentItem"
			},
			{
				Class: "WFEnumerationParameter",
				Key: "WFContentItemSortProperty",
				Label: "Sort by",
				Items: [
					"Creation Date",
					"File Size",
					"File Extension",
					"Last Modified Date",
					"Name",
					"Random"
				]
			},
			{
				Class: "WFEnumerationParameter",
				Key: "WFContentItemSortOrder",
				Label: "Order",
				Items: [
					"Oldest First",
					"Newest First",
					"Latest First",
					"Smallest First",
					"Biggest First",
					"Ascending",
					"Descending",
					"Shortest First",
					"Longest First",
					"A to Z",
					"Z to A"
				],
				RequiredResources: [
					{
						WFParameterKey: "WFContentItemSortProperty",
						WFParameterValues: ["Random"],
						WFResourceClass: "WFParameterRelationResource",
						WFParameterRelation: "!="
					}
				]
			},
			{
				Class: "WFSwitchParameter",
				Key: "WFContentItemLimitEnabled",
				Label: "Limit"
			},
			{
				Class: "WFStepperParameter",
				Key: "WFContentItemLimitNumber",
				Label: "Get Items",
				RequiredResources: [
					{
						WFParameterKey: "WFSwitchParameter",
						WFParameterValues: [true],
						WFResourceClass: "WFParameterRelationResource"
					}
				]
			}
		]
	},
	"is.workflow.actions.filter.health.quantity": {
		ActionClass: "WFFindHealthSamplesAction",
		AppIdentifier: "com.apple.Health",
		Attribution: "Health",
		Category: "Health",
		CreationDate: "2015-07-03T07:00:00.000Z",
		Description: {
			DescriptionNote:
				"If you only see some but not all of your data in the results, make sure that “Allow Shortcuts to read data” is set to on in the Health app."
		},
		Name: "Find Health Samples",
		RequiredResources: [
			"WFHealthKitResource",
			{
				AccessType: "Read",
				ReadableObjectTypeIdentifierKeyPath: "readableSampleType",
				ReadableType: "Quantity",
				WFResourceClass: "WFHealthKitAccessResource"
			},
			{
				AccessType: "Read",
				ReadableObjectTypeIdentifierKeyPath: "readableSampleType",
				ReadableType: "Category",
				WFResourceClass: "WFHealthKitAccessResource"
			}
		],
		Subcategory: "Get",
		SuggestedAsInitialAction: false,
		WFContentItemClass: "WFHKSampleContentItem",
		WFContentItemDefaultProperty: "Value"
	},
	"is.workflow.actions.filter.images": {
		ActionClass: "WFContentItemFilterAction",
		Attribution: "Images",
		Category: "Media",
		CreationDate: "2015-01-22T08:00:00.000Z",
		IconName: "Image.png",
		Input: {
			Types: [
				"WFPhotoMediaContentItem",
				"WFImageContentItem",
				"WFAVAssetContentItem"
			]
		},
		Name: "Filter Images",
		ResidentCompatible: true,
		Subcategory: "Images",
		WFContentItemClass: "WFImageContentItem",
		Parameters: [
			{
				Class: "WFFilterParameter",
				Key: "WFContentItemFilter",
				Label: "Filter",
				ContentItemClass: "WFImageContentItem"
			},
			{
				Class: "WFEnumerationParameter",
				Key: "WFContentItemSortProperty",
				Label: "Sort by",
				Items: [
					"Width",
					"Time Taken",
					"Is a Screenshot",
					"Media Type",
					"Height",
					"Location",
					"Orientation",
					"Date Taken",
					"Duration",
					"Camera Make",
					"Is Hidden",
					"Frame Rate",
					"File Extension",
					"Camera Model",
					"Is Favorite",
					"Creation Date",
					"Album",
					"Metadata Dictionary",
					"File Size",
					"Photo Type",
					"Last Modified Date",
					"Name",
					"Random"
				]
			},
			{
				Class: "WFEnumerationParameter",
				Key: "WFContentItemSortOrder",
				Label: "Order",
				Items: [
					"Oldest First",
					"Newest First",
					"Latest First",
					"Smallest First",
					"Biggest First",
					"Ascending",
					"Descending",
					"Shortest First",
					"Longest First",
					"A to Z",
					"Z to A"
				],
				RequiredResources: [
					{
						WFParameterKey: "WFContentItemSortProperty",
						WFParameterValues: ["Random"],
						WFResourceClass: "WFParameterRelationResource",
						WFParameterRelation: "!="
					}
				]
			},
			{
				Class: "WFSwitchParameter",
				Key: "WFContentItemLimitEnabled",
				Label: "Limit"
			},
			{
				Class: "WFStepperParameter",
				Key: "WFContentItemLimitNumber",
				Label: "Get Items",
				RequiredResources: [
					{
						WFParameterKey: "WFSwitchParameter",
						WFParameterValues: [true],
						WFResourceClass: "WFParameterRelationResource"
					}
				]
			}
		]
	},
	"is.workflow.actions.filter.locations": {
		ActionClass: "WFContentItemFilterAction",
		Attribution: "Location",
		Category: "Location",
		CreationDate: "2015-01-22T08:00:00.000Z",
		IconName: "Location.png",
		Name: "Filter Locations",
		ResidentCompatible: true,
		WFContentItemClass: "WFLocationContentItem",
		Parameters: [
			{
				Class: "WFFilterParameter",
				Key: "WFContentItemFilter",
				Label: "Filter",
				ContentItemClass: "WFLocationContentItem"
			},
			{
				Class: "WFEnumerationParameter",
				Key: "WFContentItemSortProperty",
				Label: "Sort by",
				Items: [
					"Phone Number",
					"State",
					"Altitude",
					"Name",
					"Longitude",
					"Country",
					"City",
					"Street",
					"URL",
					"Latitude",
					"ZIP Code",
					"Random"
				]
			},
			{
				Class: "WFEnumerationParameter",
				Key: "WFContentItemSortOrder",
				Label: "Order",
				Items: [
					"Oldest First",
					"Newest First",
					"Latest First",
					"Smallest First",
					"Biggest First",
					"Ascending",
					"Descending",
					"Shortest First",
					"Longest First",
					"A to Z",
					"Z to A"
				],
				RequiredResources: [
					{
						WFParameterKey: "WFContentItemSortProperty",
						WFParameterValues: ["Random"],
						WFResourceClass: "WFParameterRelationResource",
						WFParameterRelation: "!="
					}
				]
			},
			{
				Class: "WFSwitchParameter",
				Key: "WFContentItemLimitEnabled",
				Label: "Limit"
			},
			{
				Class: "WFStepperParameter",
				Key: "WFContentItemLimitNumber",
				Label: "Get Items",
				RequiredResources: [
					{
						WFParameterKey: "WFSwitchParameter",
						WFParameterValues: [true],
						WFResourceClass: "WFParameterRelationResource"
					}
				]
			}
		]
	},
	"is.workflow.actions.filter.music": {
		ActionClass: "WFContentItemFilterAction",
		AppIdentifier: "com.apple.Music",
		Attribution: "Music",
		Category: "Media",
		CreationDate: "2015-01-22T08:00:00.000Z",
		Input: {
			Types: [
				"WFMPMediaContentItem",
				"WFAVAssetContentItem",
				"WFGenericFileContentItem"
			]
		},
		Name: "Find Music",
		RequiredResources: ["WFAppleMusicAccessResource"],
		Subcategory: "Music",
		WFContentItemClass: "WFMPMediaContentItem",
		WFContentItemDefaultProperty: "Artist",
		Parameters: [
			{
				Class: "WFFilterParameter",
				Key: "WFContentItemFilter",
				Label: "Filter",
				ContentItemClass: "WFMPMediaContentItem"
			},
			{
				Class: "WFEnumerationParameter",
				Key: "WFContentItemSortProperty",
				Label: "Sort by",
				Items: [
					"Last Played Date",
					"File Extension",
					"Release Date",
					"Genre",
					"Media Kind",
					"Name",
					"Artist",
					"Creation Date",
					"Composer",
					"Duration",
					"Disc #",
					"Last Modified Date",
					"Date Added",
					"Play Count",
					"Album Artwork",
					"Album Track #",
					"Has Album Artwork",
					"Rating",
					"Is Explicit",
					"Comments",
					"Skip Count",
					"File Size",
					"Lyrics",
					"Is Cloud Item",
					"Album Artist",
					"Album",
					"Random"
				]
			},
			{
				Class: "WFEnumerationParameter",
				Key: "WFContentItemSortOrder",
				Label: "Order",
				Items: [
					"Oldest First",
					"Newest First",
					"Latest First",
					"Smallest First",
					"Biggest First",
					"Ascending",
					"Descending",
					"Shortest First",
					"Longest First",
					"A to Z",
					"Z to A"
				],
				RequiredResources: [
					{
						WFParameterKey: "WFContentItemSortProperty",
						WFParameterValues: ["Random"],
						WFResourceClass: "WFParameterRelationResource",
						WFParameterRelation: "!="
					}
				]
			},
			{
				Class: "WFSwitchParameter",
				Key: "WFContentItemLimitEnabled",
				Label: "Limit"
			},
			{
				Class: "WFStepperParameter",
				Key: "WFContentItemLimitNumber",
				Label: "Get Items",
				RequiredResources: [
					{
						WFParameterKey: "WFSwitchParameter",
						WFParameterValues: [true],
						WFResourceClass: "WFParameterRelationResource"
					}
				]
			}
		]
	},
	"is.workflow.actions.filter.notes": {
		ActionClass: "WFContentItemFilterAction",
		AppIdentifier: "com.apple.mobilenotes",
		Category: "Documents",
		CreationDate: "2018-12-26T08:00:00.000Z",
		Input: {
			Required: false,
			Types: ["WFNoteContentItem"]
		},
		Name: "Find Notes",
		RequiredResources: ["WFNotesAccessResource"],
		Subcategory: "Notes",
		SuggestedAsInitialAction: false,
		WFContentItemClass: "WFNoteContentItem",
		WFContentItemDefaultProperty: "Body",
		Parameters: []
	},
	"is.workflow.actions.filter.photos": {
		ActionClass: "WFContentItemFilterAction",
		AppIdentifier: "com.apple.mobileslideshow",
		Attribution: "Photos",
		Category: "Media",
		CreationDate: "2015-01-22T08:00:00.000Z",
		Input: {
			Types: [
				"WFPhotoMediaContentItem",
				"WFImageContentItem",
				"WFAVAssetContentItem",
				"WFGenericFileContentItem"
			]
		},
		LastModifiedDate: "2015-12-14T08:00:00.000Z",
		Name: "Find Photos",
		RequiredResources: ["WFPhotoAccessResource"],
		Subcategory: "Photos",
		SuggestedAsInitialAction: false,
		WFContentItemClass: "WFPhotoMediaContentItem",
		WFContentItemDefaultProperty: "Album",
		Parameters: [
			{
				Class: "WFFilterParameter",
				Key: "WFContentItemFilter",
				Label: "Filter",
				ContentItemClass: "WFPhotoMediaContentItem"
			},
			{
				Class: "WFEnumerationParameter",
				Key: "WFContentItemSortProperty",
				Label: "Sort by",
				Items: [
					"File Size",
					"Camera Make",
					"Last Modified Date",
					"File Extension",
					"Media Type",
					"Creation Date",
					"Location",
					"Album",
					"Photo Type",
					"Date Taken",
					"Duration",
					"Width",
					"Time Taken",
					"Is a Screenshot",
					"Is Hidden",
					"Frame Rate",
					"Height",
					"Camera Model",
					"Is Favorite",
					"Orientation",
					"Metadata Dictionary",
					"Name",
					"Random"
				]
			},
			{
				Class: "WFEnumerationParameter",
				Key: "WFContentItemSortOrder",
				Label: "Order",
				Items: [
					"Oldest First",
					"Newest First",
					"Latest First",
					"Smallest First",
					"Biggest First",
					"Ascending",
					"Descending",
					"Shortest First",
					"Longest First",
					"A to Z",
					"Z to A"
				],
				RequiredResources: [
					{
						WFParameterKey: "WFContentItemSortProperty",
						WFParameterValues: ["Random"],
						WFResourceClass: "WFParameterRelationResource",
						WFParameterRelation: "!="
					}
				]
			},
			{
				Class: "WFSwitchParameter",
				Key: "WFContentItemLimitEnabled",
				Label: "Limit"
			},
			{
				Class: "WFStepperParameter",
				Key: "WFContentItemLimitNumber",
				Label: "Get Items",
				RequiredResources: [
					{
						WFParameterKey: "WFSwitchParameter",
						WFParameterValues: [true],
						WFResourceClass: "WFParameterRelationResource"
					}
				]
			}
		]
	},
	"is.workflow.actions.filter.reminders": {
		ActionClass: "WFContentItemFilterAction",
		AppIdentifier: "com.apple.reminders",
		Attribution: "Reminders",
		Category: "Calendar",
		CreationDate: "2015-01-22T08:00:00.000Z",
		Name: "Find Reminders",
		RequiredResources: ["WFReminderAccessResource"],
		Subcategory: "Reminders",
		SuggestedAsInitialAction: false,
		WFContentItemClass: "WFReminderContentItem",
		WFContentItemDefaultProperty: "List",
		WatchCompatible: true,
		Parameters: []
	},
	"is.workflow.actions.flashlight": {
		ACECommandClass: "SASettingSetFlashlight",
		ActionClass: "WFToggleFlashlightAction",
		ActionKeywords: ["flash", "torch"],
		Category: "Scripting",
		Description: {
			DescriptionSummary:
				"Turns on or off the flashlight near the device's camera."
		},
		IconName: "Flashlight.png",
		InputPassthrough: true,
		Name: "Set Flashlight",
		ParameterSummary: "Turn flashlight ${WFFlashlightSetting}",
		Parameters: [
			{
				Class: "WFEnumerationParameter",
				DefaultValue: "On",
				Items: ["Off", "On", "Toggle"],
				Key: "WFFlashlightSetting",
				Label: "Flashlight"
			},
			{
				Class: "WFSliderParameter",
				DefaultValue: 1,
				Hidden: true,
				Key: "WFFlashlightLevel",
				Label: "Brightness",
				RequiredResources: [
					{
						WFParameterKey: "WFFlashlightSetting",
						WFParameterValues: ["On", "Toggle"],
						WFResourceClass: "WFParameterRelationResource"
					}
				]
			}
		],
		Subcategory: "Device"
	},
	"is.workflow.actions.format.date": {
		ActionClass: "WFFormatDateAction",
		ActionKeywords: ["date", "time", "formatter"],
		Category: "Calendar",
		Description: {
			DescriptionNote:
				"Custom format strings use the format patterns from Unicode Technical Standard #35 (unicode.org/reports/tr35/tr35-31/tr35-dates.html#Date_Format_Patterns).",
			DescriptionSummary: "Formats a date and time into text."
		},
		IconName: "Date.png",
		Input: {
			Multiple: true,
			ParameterKey: "WFDate",
			Required: true,
			Types: ["WFDateContentItem"]
		},
		LastModifiedDate: "2015-12-14T08:00:00.000Z",
		Name: "Format Date",
		Output: {
			Multiple: true,
			OutputName: "Formatted Date",
			Types: ["NSString"]
		},
		ParameterSummary: "Format ${WFDate}",
		Parameters: [
			{
				Class: "WFEnumerationParameter",
				DefaultValue: "Short",
				Items: [
					"None",
					"Short",
					"Medium",
					"Long",
					"Relative",
					"RFC 2822",
					"ISO 8601",
					"Custom"
				],
				Key: "WFDateFormatStyle",
				Label: "Date Format",
				RequiredResources: [
					{
						WFParameterKey: "WFTimeFormatStyle",
						WFParameterValues: ["None", "Short", "Medium", "Long"],
						WFResourceClass: "WFParameterRelationResource"
					}
				]
			},
			{
				Class: "WFEnumerationParameter",
				DefaultValue: "Medium",
				Items: ["Short", "Medium", "Long"],
				Key: "WFRelativeDateFormatStyle",
				Label: "Alternate Format",
				RequiredResources: [
					{
						WFParameterKey: "WFDateFormatStyle",
						WFParameterValue: "Relative",
						WFResourceClass: "WFParameterRelationResource"
					}
				]
			},
			{
				Class: "WFEnumerationParameter",
				DefaultValue: "Short",
				Items: ["None", "Short", "Medium", "Long", "Relative"],
				Key: "WFTimeFormatStyle",
				Label: "Time Format",
				RequiredResources: [
					{
						WFParameterKey: "WFDateFormatStyle",
						WFParameterValues: [
							"None",
							"Short",
							"Medium",
							"Long",
							"Relative"
						],
						WFResourceClass: "WFParameterRelationResource"
					}
				]
			},
			{
				Class: "WFSwitchParameter",
				Key: "WFISO8601IncludeTime",
				Label: "Include ISO 8601 Time",
				RequiredResources: [
					{
						WFParameterKey: "WFDateFormatStyle",
						WFParameterValue: "ISO 8601",
						WFResourceClass: "WFParameterRelationResource"
					}
				]
			},
			{
				Class: "WFCustomDateFormatParameter",
				Key: "WFDateFormat",
				Label: "Format String",
				RequiredResources: [
					{
						WFParameterKey: "WFDateFormatStyle",
						WFParameterValue: "Custom",
						WFResourceClass: "WFParameterRelationResource"
					}
				]
			},
			{
				Class: "WFDateFieldParameter",
				Key: "WFDate",
				Label: "Date",
				Placeholder: "Date"
			}
		],
		ResidentCompatible: true,
		Subcategory: "Dates"
	},
	"is.workflow.actions.format.filesize": {
		ActionClass: "WFFormatFileSizeAction",
		ActionKeywords: ["byte", "bytes", "megabyte", "megabytes", "count"],
		AppIdentifier: "com.apple.calculator",
		Attribution: "Math",
		Category: "Scripting",
		CreationDate: "2016-03-15T07:00:00.000Z",
		Description: {
			DescriptionInput:
				"A file size from another action, or a number of bytes",
			DescriptionNote: "1000 bytes are shown as 1 KB.",
			DescriptionSummary: "Formats a file size into text."
		},
		Input: {
			Multiple: true,
			ParameterKey: "WFFileSize",
			Required: true,
			Types: ["WFFileSizeContentItem", "WFNumberContentItem"]
		},
		Name: "Format File Size",
		Output: {
			Multiple: true,
			OutputName: "Formatted File Size",
			Types: ["NSString"]
		},
		ParameterSummary: "Format ${WFFileSize} into ${WFFileSizeFormat}",
		Parameters: [
			{
				Class: "WFFileSizePickerParameter",
				DefaultValue: "Automatic",
				Items: [
					"Automatic",
					"Bytes",
					"KB",
					"MB",
					"GB",
					"TB",
					"PB",
					"EB",
					"ZB",
					"YB or Higher"
				],
				Key: "WFFileSizeFormat",
				Label: "Format"
			},
			{
				Class: "WFSwitchParameter",
				DefaultValue: true,
				Key: "WFFileSizeIncludeUnits",
				Label: "Include Units",
				RequiredResources: [
					{
						WFParameterKey: "WFFileSizeFormat",
						WFParameterRelation: "!=",
						WFParameterValue: "Automatic",
						WFResourceClass: "WFParameterRelationResource"
					}
				]
			},
			{
				Class: "WFNumberFieldParameter",
				Key: "WFFileSize",
				Label: "File Size",
				Placeholder: "File Size"
			}
		],
		Subcategory: "Numbers"
	},
	"is.workflow.actions.format.number": {
		ActionClass: "WFFormatNumberAction",
		ActionKeywords: ["digits", "decimal"],
		AppIdentifier: "com.apple.calculator",
		Attribution: "Math",
		Category: "Scripting",
		Description: {
			DescriptionSummary: "Formats a number into text."
		},
		Input: {
			Multiple: true,
			ParameterKey: "WFNumber",
			Required: true,
			Types: ["WFBooleanContentItem", "WFNumberContentItem"]
		},
		Name: "Format Number",
		Output: {
			Multiple: true,
			OutputName: "Formatted Number",
			Types: ["NSString"]
		},
		ParameterSummary:
			"Format ${WFNumber} to ${WFNumberFormatDecimalPlaces}",
		Parameters: [
			{
				AllowsDecimalNumbers: true,
				Class: "WFNumberFieldParameter",
				Key: "WFNumber",
				Label: "Number"
			},
			{
				Class: "WFStepperParameter",
				DefaultValue: 2,
				Key: "WFNumberFormatDecimalPlaces",
				MinimumValue: 0,
				StepperDescription: "Decimal Places",
				StepperNoun: "Decimal Place",
				StepperPluralNoun: "Decimal Places"
			}
		],
		ResidentCompatible: true,
		Subcategory: "Numbers"
	},
	"is.workflow.actions.generatebarcode": {
		ActionClass: "WFGenerateMachineReadableCodeAction",
		Category: "Documents",
		Description: {
			DescriptionSummary: "Generates a QR code from the input text."
		},
		IconName: "QRCode.png",
		Input: {
			Multiple: true,
			ParameterKey: "WFText",
			Required: true,
			Types: ["NSString"]
		},
		LastModifiedDate: "2015-04-06T05:00:00.000Z",
		Name: "Generate QR Code",
		Output: {
			Multiple: true,
			OutputName: "QR Code",
			Types: ["UIImage"]
		},
		ParameterSummary: "Generate QR code from ${WFText}",
		Parameters: [
			{
				Class: "WFEnumerationParameter",
				DefaultValue: "Medium",
				Items: ["Low", "Medium", "Quartile", "High"],
				Key: "WFQRErrorCorrectionLevel",
				Label: "Error Correction"
			},
			{
				Class: "WFTextInputParameter",
				Key: "WFText",
				Label: "Text",
				Placeholder: "Text"
			}
		],
		ResidentCompatible: true,
		ShortName: "Generate QR",
		Subcategory: "QR Codes"
	},
	"is.workflow.actions.get.playlist": {
		ActionClass: "WFGetPlaylistAction",
		ActionKeywords: ["song", "track"],
		AppIdentifier: "com.apple.Music",
		Category: "Media",
		CreationDate: "2015-04-06T07:00:00.000Z",
		Description: {
			DescriptionSummary: "Gets every song in the specified playlist."
		},
		Name: "Get Playlist",
		Output: {
			Multiple: true,
			OutputName: "Playlist",
			Types: ["MPMediaItem"]
		},
		ParameterSummary: "Get songs in ${WFPlaylistName}",
		Parameters: [
			{
				Class: "WFPlaylistPickerParameter",
				Key: "WFPlaylistName",
				Label: "Playlist"
			}
		],
		RequiredResources: ["WFAppleMusicAccessResource"],
		Subcategory: "Playlists"
	},
	"is.workflow.actions.getarticle": {
		ActionClass: "WFCoercionAction",
		ActionKeywords: [
			"web",
			"pages",
			"author",
			"word",
			"excerpt",
			"title",
			"content",
			"body",
			"published",
			"reader"
		],
		AppIdentifier: "com.apple.mobilesafari",
		Category: "Web",
		CoercionItemClass: "WFArticleContentItem",
		CreationDate: "2015-02-13T08:00:00.000Z",
		Description: {
			DescriptionNote:
				"Use a Get Details of Article action immediately after this action to get specific details about the article. This action only supports getting one article from each URL.",
			DescriptionSummary:
				"Gets article details, including body text, author, publish date, and more, from every URL passed into the action."
		},
		Input: {
			Multiple: true,
			ParameterKey: "WFWebPage",
			Required: true,
			Types: ["WFURLContentItem"]
		},
		InputPassthrough: false,
		Name: "Get Article using Safari Reader",
		Output: {
			OutputName: "Article",
			Types: ["WFArticleContentItem"]
		},
		ParameterSummary: "Get article from ${WFWebPage}",
		Parameters: [
			{
				Class: "WFTextInputParameter",
				Key: "WFWebPage",
				KeyboardType: "URL",
				Label: "URL"
			}
		],
		ShortName: "Get Article",
		Subcategory: "Articles"
	},
	"is.workflow.actions.getbatterylevel": {
		ActionClass: "WFBatteryLevelAction",
		ActionKeywords: ["remaining", "percentage", "left", "power"],
		Category: "Scripting",
		CreationDate: "2015-01-11T06:00:00.000Z",
		Description: {
			DescriptionSummary:
				"Outputs the percentage of battery remaining as a number from 0 to 100."
		},
		IconName: "Battery.png",
		Name: "Get Battery Level",
		Output: {
			Multiple: false,
			OutputName: "Battery Level",
			Types: ["NSDecimalNumber"]
		},
		ParameterSummary: "Get battery level",
		Subcategory: "Device",
		SuggestedNever: true
	},
	"is.workflow.actions.getclassaction": {
		ActionClass: "WFGetClassAction",
		Category: "Scripting",
		Description: {
			DescriptionSummary:
				"Returns a particular object class from the input."
		},
		IconName: "Scripting.png",
		Input: {
			Multiple: true,
			ParameterKey: "Input",
			Required: true,
			Types: ["WFContentItem"]
		},
		IsDebugAction: true,
		Name: "Get Object of Class",
		Output: {
			Multiple: true,
			OutputName: "Object of Class",
			Types: ["WFContentItem"]
		},
		ParameterSummary: "Get object of class ${Class} from ${Input}",
		Parameters: [
			{
				Class: "WFTextInputParameter",
				DefaultValue: "NSURL",
				Key: "Class",
				Label: "Class",
				Placeholder: "NSURL"
			},
			{
				Class: "WFVariablePickerParameter",
				Key: "Input",
				Label: "Input",
				Placeholder: "Input"
			}
		],
		ShortName: "Object of Class",
		Subcategory: "Content"
	},
	"is.workflow.actions.getclipboard": {
		ActionClass: "WFGetClipboardAction",
		ActionKeywords: [
			"text",
			"clipboard",
			"copy",
			"paste",
			"contents",
			"of"
		],
		Category: "Sharing",
		Description: {
			DescriptionSummary:
				"Passes the contents of the clipboard to the next action."
		},
		IconName: "Clipboard.png",
		Name: "Get Clipboard",
		Output: {
			Multiple: true,
			OutputName: "Clipboard",
			Types: ["WFContentItem"]
		},
		ParameterSummary: "Get clipboard",
		RequiredResources: ["WFMainThreadResource"],
		Subcategory: "Clipboard"
	},
	"is.workflow.actions.getcurrentlocation": {
		ActionClass: "WFGetCurrentLocationAction",
		ActionKeywords: ["gps", "map", "place", "address"],
		Category: "Location",
		Description: {
			DescriptionSummary: "Gets the current location of the device."
		},
		IconName: "Location.png",
		Name: "Get Current Location",
		Output: {
			Multiple: false,
			OutputName: "Current Location",
			Types: ["CLLocation"]
		},
		ParameterSummary: "Get current location",
		RequiredResources: ["WFMainThreadResource", "WFLocationAccessResource"],
		ResidentCompatible: true,
		ShortName: "Current Location"
	},
	"is.workflow.actions.getcurrentsong": {
		ActionClass: "WFGetCurrentSongAction",
		ActionKeywords: [
			"current",
			"song",
			"ipod",
			"track",
			"music",
			"itunes",
			"library",
			"listening",
			"playing"
		],
		AppIdentifier: "com.apple.Music",
		Category: "Media",
		Description: {
			DescriptionSummary:
				"Returns the song that is currently playing in the Music app, if any."
		},
		InputPassthrough: false,
		Name: "Get Current Song",
		Output: {
			Multiple: false,
			OutputName: "Current Song",
			Types: ["MPMediaItem"]
		},
		ParameterSummary: "Get current song",
		RequiredResources: [
			"WFMainThreadResource",
			"WFAppleMusicAccessResource"
		],
		Subcategory: "Music"
	},
	"is.workflow.actions.getdevicedetails": {
		ActionClass: "WFGetDeviceDetailsAction",
		ActionKeywords: [
			"name",
			"model",
			"screen",
			"dimensions",
			"version",
			"system",
			"os",
			"ios",
			"software",
			"current",
			"brightness",
			"volume",
			"firmware"
		],
		Category: "Scripting",
		CreationDate: "2016-03-07T08:00:00.000Z",
		Description: {
			DescriptionSummary: "Gets information about the current device."
		},
		IconName: "Scripting.png",
		InputPassthrough: false,
		Name: "Get Device Details",
		Output: {
			Multiple: false,
			OutputName: "Device Details",
			Types: ["NSString", "NSNumber"]
		},
		ParameterSummary: "Get the ${WFDeviceDetail}",
		Parameters: [
			{
				Class: "WFEnumerationParameter",
				DefaultValue: "Device Name",
				Items: [
					"Device Name",
					"Device Model",
					"System Version",
					"Screen Width",
					"Screen Height",
					"Current Volume",
					"Current Brightness"
				],
				Key: "WFDeviceDetail",
				Label: "Get"
			}
		],
		ResidentCompatible: true,
		ShortName: "Device Details",
		Subcategory: "Device",
		SuggestedAsInitialAction: false
	},
	"is.workflow.actions.getdirections": {
		ActionClass: "WFGetDirectionsAction",
		ActionKeywords: [
			"get",
			"maps",
			"search",
			"query",
			"place",
			"location",
			"find",
			"waze",
			"google",
			"transit",
			"citymapper"
		],
		Category: "Location",
		Description: {
			DescriptionInput: "The destination address",
			DescriptionSummary:
				"Open directions to the location passed into this action in your choice of Maps, Google Maps, Citymapper, Transit, or Waze. For example, you can use this action to get directions to an upcoming event on your calendar."
		},
		Input: {
			Multiple: false,
			ParameterKey: "WFDestination",
			Required: true,
			Types: ["NSString", "CLLocation", "MKMapItem"]
		},
		InputPassthrough: true,
		Name: "Show Directions",
		ParameterSummary: {
			WFDestination: "Show directions to ${WFDestination}",
			"WFDestination,WFGetDirectionsActionApp":
				"Show directions to ${WFDestination} using ${WFGetDirectionsActionApp}",
			"WFDestination,WFGetDirectionsActionMode":
				"Show ${WFGetDirectionsActionMode} directions to ${WFDestination}",
			"WFDestination,WFGetDirectionsActionMode,WFGetDirectionsActionApp":
				"Show ${WFGetDirectionsActionMode} directions to ${WFDestination} using ${WFGetDirectionsActionApp}"
		},
		Parameters: [
			{
				AllowCurrentLocation: false,
				Class: "WFLocationParameter",
				Key: "WFDestination",
				Label: "Destination"
			},
			{
				Class: "WFMapsAppPickerParameter",
				DefaultValue: "Maps",
				Key: "WFGetDirectionsActionApp",
				Label: "App",
				SupportedApps: [
					"Maps",
					"Citymapper",
					"Google Maps",
					"Transit",
					"Waze",
					"Baidu Maps"
				]
			},
			{
				Class: "WFDynamicEnumerationParameter",
				DefaultValue: "Driving",
				Key: "WFGetDirectionsActionMode",
				Label: "Mode",
				RequiredResources: [
					{
						WFParameterKey: "WFGetDirectionsActionApp",
						WFParameterValues: [
							"Maps",
							"Google Maps",
							"Baidu Maps"
						],
						WFResourceClass: "WFParameterRelationResource"
					}
				]
			}
		],
		RequiredResources: ["WFURLOpenResource"],
		Subcategory: "Maps",
		UserInterfaces: ["WatchKit", "UIKit", "UIKitWidget"],
		WatchCompatible: true
	},
	"is.workflow.actions.getdistance": {
		ActionClass: "WFGetDistanceAction",
		ActionKeywords: ["maps", "directions", "calculate"],
		AppIdentifier: "com.apple.Maps",
		Category: "Location",
		CreationDate: "2015-01-11T06:00:00.000Z",
		Description: {
			DescriptionInput: "The destination",
			DescriptionResult:
				"The distance to the location in miles or kilometers.",
			DescriptionSummary:
				"Calculates the distance to the location passed into this action."
		},
		Input: {
			Multiple: false,
			ParameterKey: "WFGetDistanceDestination",
			Required: true,
			Types: ["NSString", "CLLocation", "MKMapItem"]
		},
		Name: "Get Distance",
		Output: {
			Multiple: false,
			OutputName: "Distance",
			Types: ["NSNumber"]
		},
		ParameterSummary:
			"Get distance from ${WFGetDirectionsCustomLocation} to ${WFGetDistanceDestination}",
		Parameters: [
			{
				Class: "WFLocationParameter",
				CurrentLocationAccuracy: "HundredMeters",
				DefaultToCurrentLocation: true,
				Key: "WFGetDirectionsCustomLocation",
				Label: "Start Location",
				SkipProcessingCurrentLocation: true
			},
			{
				Class: "WFLocationParameter",
				CurrentLocationAccuracy: "HundredMeters",
				DefaultToCurrentLocation: false,
				Key: "WFGetDistanceDestination",
				Label: "End Location",
				SkipProcessingCurrentLocation: true
			},
			{
				Class: "WFEnumerationParameter",
				DefaultValue: "Direct",
				Items: ["Direct", "Driving", "Walking"],
				Key: "WFGetDirectionsActionMode",
				Label: "Route Type"
			},
			{
				Class: "WFGetDistanceUnitPickerParameter",
				Items: ["Miles", "Kilometers"],
				Key: "WFDistanceUnit",
				Label: "Unit"
			}
		],
		RequiredResources: [
			"WFMainThreadResource",
			{
				RequiredResources: [
					{
						WFParameterKey: "WFGetDirectionsCustomLocation",
						WFParameterValue: {
							isCurrentLocation: true
						},
						WFResourceClass: "WFParameterRelationResource"
					}
				],
				WFResourceClass: "WFLocationAccessResource"
			},
			{
				RequiredResources: [
					{
						WFParameterKey: "WFGetDistanceDestination",
						WFParameterValue: {
							isCurrentLocation: true
						},
						WFResourceClass: "WFParameterRelationResource"
					}
				],
				WFResourceClass: "WFLocationAccessResource"
			}
		],
		ResidentCompatible: true,
		Subcategory: "Routing"
	},
	"is.workflow.actions.getepisodesforpodcast": {
		ActionClass: "WFGetEpisodesForPodcastAction",
		ActionKeywords: ["episodes", "podcast", "show", "library"],
		AppIdentifier: "com.apple.podcasts",
		Description: {
			DescriptionSummary:
				"Returns a list of episodes from a podcast show."
		},
		Input: {
			Multiple: false,
			ParameterKey: "WFInput",
			Required: true,
			Types: ["WFiTunesProductContentItem"]
		},
		Name: "Get Episodes of Podcast",
		Output: {
			Multiple: true,
			OutputName: "Episodes",
			Types: ["WFPodcastEpisodeContentItem"]
		},
		ParameterSummary: "Get episodes of ${WFInput}",
		Parameters: [
			{
				Class: "WFPodcastPickerParameter",
				Key: "WFInput",
				Label: "Podcast",
				Placeholder: "Podcast"
			}
		]
	},
	"is.workflow.actions.getframesfromimage": {
		ActionClass: "WFGetFramesFromImageAction",
		ActionKeywords: [
			"animated",
			"gif",
			"burst",
			"split",
			"individual",
			"explode",
			"separate"
		],
		Category: "Media",
		CreationDate: "2015-12-08T08:00:00.000Z",
		Description: {
			DescriptionInput: "An animated GIF or photo burst",
			DescriptionResult: "The frames",
			DescriptionSummary:
				"Splits an animated GIF or a photo burst into individual frames."
		},
		IconName: "GIF.png",
		Input: {
			Multiple: false,
			ParameterKey: "WFImage",
			Required: true,
			Types: ["com.compuserve.gif"]
		},
		InputPassthrough: false,
		Name: "Get Frames from Image",
		Output: {
			Multiple: true,
			OutputName: "Frames from Image",
			Types: ["WFImageContentItem", "WFPhotoMediaContentItem"]
		},
		ParameterSummary: "Get frames from ${WFImage}",
		Parameters: [
			{
				Class: "WFVariablePickerParameter",
				Key: "WFImage",
				Label: "Image",
				Placeholder: "Image"
			}
		],
		ResidentCompatible: true,
		ShortName: "Get Frames",
		Subcategory: "GIFs"
	},
	"is.workflow.actions.gethalfwaypoint": {
		ActionClass: "WFGetHalfwayPointAction",
		ActionKeywords: ["Location", "Maps", "Two", "Places"],
		AppIdentifier: "com.apple.Maps",
		Category: "Location",
		CreationDate: "2015-08-29T17:26:33.000Z",
		Description: {
			DescriptionSummary: "Gets the halfway point between two locations."
		},
		Name: "Get Halfway Point",
		Output: {
			OutputName: "Halfway Point",
			Types: ["CLLocation"]
		},
		ParameterSummary:
			"Get halfway point between ${WFGetHalfwayPointFirstLocation} and ${WFGetHalfwayPointSecondLocation}",
		Parameters: [
			{
				AllowTextOnly: true,
				Class: "WFLocationParameter",
				Key: "WFGetHalfwayPointFirstLocation",
				Label: "First Location"
			},
			{
				AllowTextOnly: true,
				Class: "WFLocationParameter",
				Key: "WFGetHalfwayPointSecondLocation",
				Label: "Second Location"
			}
		],
		RequiredResources: [
			{
				RequiredResources: [
					{
						WFParameterKey: "WFGetHalfwayPointSecondLocation",
						WFParameterValue: {
							isCurrentLocation: true
						},
						WFResourceClass: "WFParameterRelationResource"
					}
				],
				WFResourceClass: "WFLocationAccessResource"
			},
			{
				RequiredResources: [
					{
						WFParameterKey: "WFGetHalfwayPointFirstLocation",
						WFParameterValue: {
							isCurrentLocation: true
						},
						WFResourceClass: "WFParameterRelationResource"
					}
				],
				WFResourceClass: "WFLocationAccessResource"
			}
		],
		ResidentCompatible: true,
		Subcategory: "Routing",
		SuggestedNever: true
	},
	"is.workflow.actions.gethomeaccessorystate": {
		ActionClass: "WFGetHomeAccessoryStateAction",
		ActionKeywords: [
			"homekit",
			"accessories",
			"accessory",
			"automation",
			"smart",
			"house",
			"scene"
		],
		AppIdentifier: "com.apple.Home",
		Category: "Home",
		CreationDate: "2018-12-07T08:00:00.000Z",
		Description: {
			DescriptionSummary: "Gets the state of a Home accessory."
		},
		Name: "Home",
		Output: {
			Multiple: false,
			OutputName: "Accessory State"
		},
		ParameterSummary: {
			WFHMService: "Get ${WFHMService}",
			"WFHMService,WFHMCharacteristic":
				"Get ${WFHMService} ${WFHMCharacteristic}"
		},
		Parameters: [
			{
				Class: "WFHomeServicePickerParameter",
				DisallowedVariableTypes: ["Variable"],
				Key: "WFHMService"
			},
			{
				Class: "WFHomeCharacteristicPickerParameter",
				DisallowedVariableTypes: ["Variable"],
				Key: "WFHMCharacteristic"
			}
		],
		RequiredResources: ["WFHomeKitAccessResource"],
		ResidentCompatible: true,
		WatchCompatible: true
	},
	"is.workflow.actions.gethtmlfromrichtext": {
		ActionClass: "WFHTMLFromRichTextAction",
		ActionKeywords: ["page", "source", "web", "get"],
		Category: "Documents",
		Description: {
			DescriptionResult: "HTML",
			DescriptionSummary:
				"Converts the rich text passed as input to HTML text."
		},
		IconName: "RichText.png",
		Input: {
			Multiple: false,
			ParameterKey: "WFInput",
			Required: true,
			Types: ["WFRichTextContentItem"]
		},
		Name: "Make HTML from Rich Text",
		Output: {
			Multiple: false,
			OutputName: "HTML from Rich Text",
			Types: ["NSString"]
		},
		ParameterSummary: "Make HTML from ${WFInput}",
		Parameters: [
			{
				Class: "WFSwitchParameter",
				Description:
					"This indicates whether or not this action writes out an entire HTML document. If this is turned off, partial HTML will be returned if possible.",
				Key: "WFMakeFullDocument",
				Label: "Make Full Document"
			},
			{
				Class: "WFVariablePickerParameter",
				Key: "WFInput",
				Label: "Rich Text",
				Placeholder: "Rich Text"
			}
		],
		ResidentCompatible: true,
		ShortName: "Make HTML",
		Subcategory: "Rich Text"
	},
	"is.workflow.actions.getipaddress": {
		ActionClass: "WFGetIPAddressAction",
		ActionKeywords: [
			"network",
			"local",
			"external",
			"cellular",
			"wi-fi",
			"wifi"
		],
		Category: "Scripting",
		CreationDate: "2015-08-20T07:00:00.000Z",
		Description: {
			DescriptionSummary:
				"Returns the local or external IP address of the device."
		},
		IconName: "Network.png",
		Name: "Get Current IP Address",
		Output: {
			Multiple: false,
			OutputName: "Current IP Address",
			Types: ["NSString"]
		},
		ParameterSummary: "Get current IP address",
		Parameters: [
			{
				Class: "WFEnumerationParameter",
				DefaultValue: "External",
				Items: ["External", "Local"],
				Key: "WFIPAddressSourceOption",
				Label: "Address"
			},
			{
				Class: "WFEnumerationParameter",
				DefaultValue: "IPv4",
				Items: ["IPv4", "IPv6"],
				Key: "WFIPAddressTypeOption",
				Label: "Type"
			}
		],
		ResidentCompatible: true,
		Subcategory: "Network",
		SuggestedNever: true
	},
	"is.workflow.actions.getitemfromlist": {
		ActionClass: "WFGetItemFromListAction",
		Category: "Scripting",
		Description: {
			DescriptionNote:
				"Lists are one-indexed, so the first item is at index 1, the second is at index 2, etc.",
			DescriptionSummary:
				"Returns one or more items from the list passed as input. You can get the first item, the last item, a random item, the item at a particular index, or items in a range of indexes."
		},
		IconName: "Scripting.png",
		Input: {
			Multiple: true,
			ParameterKey: "WFInput",
			Required: true,
			TypePassthrough: true,
			Types: ["WFContentItem"]
		},
		LastModifiedDate: "2016-05-23T07:00:00.000Z",
		Name: "Get Item from List",
		Output: {
			Multiple: true,
			OutputName: "Item from List",
			Types: ["WFContentItem"]
		},
		ParameterSummary: {
			"WFItemSpecifier(First Item),WFInput":
				"Get ${WFItemSpecifier} from ${WFInput}",
			"WFItemSpecifier(Item At Index),WFItemIndex,WFInput":
				"Get ${WFItemSpecifier} ${WFItemIndex} from ${WFInput}",
			"WFItemSpecifier(Items in Range),WFItemRangeStart,WFItemRangeEnd,WFInput":
				"Get ${WFItemSpecifier} ${WFItemRangeStart} to ${WFItemRangeEnd} from ${WFInput}",
			"WFItemSpecifier(Last Item),WFInput":
				"Get ${WFItemSpecifier} from ${WFInput}",
			"WFItemSpecifier(Random Item),WFInput":
				"Get ${WFItemSpecifier} from ${WFInput}"
		},
		Parameters: [
			{
				ActionKeywords: ["indices", "subset"],
				Class: "WFEnumerationParameter",
				DefaultValue: "First Item",
				DisallowedVariableTypes: ["Variable"],
				Items: [
					"First Item",
					"Last Item",
					"Random Item",
					"Item At Index",
					"Items in Range"
				],
				Key: "WFItemSpecifier",
				Label: "Get"
			},
			{
				Class: "WFNumberFieldParameter",
				Key: "WFItemIndex",
				Label: "Index",
				Placeholder: "1",
				RequiredResources: [
					{
						WFParameterKey: "WFItemSpecifier",
						WFParameterValue: "Item At Index",
						WFResourceClass: "WFParameterRelationResource"
					}
				],
				TextAlignment: "Right"
			},
			{
				Class: "WFNumberFieldParameter",
				Key: "WFItemRangeStart",
				Label: "Start Index",
				RequiredResources: [
					{
						WFParameterKey: "WFItemSpecifier",
						WFParameterValue: "Items in Range",
						WFResourceClass: "WFParameterRelationResource"
					}
				],
				TextAlignment: "Right"
			},
			{
				Class: "WFNumberFieldParameter",
				Key: "WFItemRangeEnd",
				Label: "End Index",
				RequiredResources: [
					{
						WFParameterKey: "WFItemSpecifier",
						WFParameterValue: "Items in Range",
						WFResourceClass: "WFParameterRelationResource"
					}
				],
				TextAlignment: "Right"
			},
			{
				Class: "WFVariablePickerParameter",
				Key: "WFInput",
				Label: "List",
				Placeholder: "List"
			}
		],
		ResidentCompatible: true,
		Subcategory: "Lists"
	},
	"is.workflow.actions.getitemname": {
		ActionClass: "WFGetItemNameAction",
		ActionKeywords: ["title"],
		Category: "Scripting",
		Description: {
			DescriptionSummary:
				"Returns the name of every item passed as input. Depending on the input, this could be a file name, the title of a website, the title of a calendar event, etc."
		},
		IconName: "Scripting.png",
		Input: {
			Multiple: true,
			ParameterKey: "WFInput",
			Required: true,
			Types: ["WFContentItem"]
		},
		Name: "Get Name",
		Output: {
			Multiple: true,
			OutputName: "Name",
			Types: ["NSString"]
		},
		ParameterSummary: "Get name of ${WFInput}",
		Parameters: [
			{
				Class: "WFVariablePickerParameter",
				Key: "WFInput",
				Label: "Item",
				Placeholder: "Item"
			}
		],
		ResidentCompatible: true,
		Subcategory: "Items"
	},
	"is.workflow.actions.getitemtype": {
		ActionClass: "WFGetItemTypeAction",
		ActionKeywords: ["content", "item", "class"],
		Category: "Scripting",
		Description: {
			DescriptionSummary:
				"Returns the type of every item passed as input. For example, if a URL is passed, this action will return “URL”."
		},
		IconName: "Scripting.png",
		Input: {
			Multiple: true,
			ParameterKey: "WFInput",
			Required: true,
			Types: ["WFContentItem"]
		},
		Name: "Get Type",
		Output: {
			Multiple: true,
			OutputName: "Type",
			Types: ["NSString"]
		},
		ParameterSummary: "Get type of ${WFInput}",
		Parameters: [
			{
				Class: "WFVariablePickerParameter",
				Key: "WFInput",
				Label: "Item",
				Placeholder: "Item"
			}
		],
		ResidentCompatible: true,
		Subcategory: "Items",
		SuggestedNever: true
	},
	"is.workflow.actions.getlastphoto": {
		ActionClass: "WFGetLatestPhotosAction",
		ActionKeywords: ["camera", "roll", "picture", "last"],
		AppIdentifier: "com.apple.mobileslideshow",
		Category: "Media",
		Description: {
			DescriptionSummary:
				"Gets the most recent photos from the photo library."
		},
		Name: "Get Latest Photos",
		Output: {
			Multiple: true,
			OutputName: "Latest Photos",
			Types: ["PHAsset"]
		},
		ParameterSummary: "Get the latest ${WFGetLatestPhotoCount}",
		Parameters: [
			{
				Class: "WFStepperParameter",
				DefaultValue: 1,
				Key: "WFGetLatestPhotoCount",
				StepperDescription: "Number of Photos",
				StepperNoun: "Photo",
				StepperPluralNoun: "Photos"
			},
			{
				Class: "WFSwitchParameter",
				DefaultValue: true,
				Key: "WFGetLatestPhotosActionIncludeScreenshots",
				Label: "Include Screenshots"
			}
		],
		RequiredResources: ["WFPhotoAccessResource"],
		ShortName: "Get Photos",
		Subcategory: "Photos",
		WFGetLatestPhotosActionType: "Photo"
	},
	"is.workflow.actions.getlastscreenshot": {
		ActionClass: "WFGetLatestPhotosAction",
		ActionKeywords: ["camera", "roll", "picture", "photo", "screen"],
		AppIdentifier: "com.apple.mobileslideshow",
		Category: "Media",
		Description: {
			DescriptionSummary:
				"Gets the most recent screenshots from the photo library."
		},
		Name: "Get Latest Screenshots",
		Output: {
			Multiple: true,
			OutputName: "Latest Screenshots",
			Types: ["PHAsset"]
		},
		ParameterSummary: "Get the latest ${WFGetLatestPhotoCount}",
		Parameters: [
			{
				Class: "WFStepperParameter",
				DefaultValue: 1,
				Key: "WFGetLatestPhotoCount",
				StepperDescription: "Number of Screenshots",
				StepperNoun: "Screenshot",
				StepperPluralNoun: "Screenshots"
			}
		],
		RequiredResources: ["WFPhotoAccessResource"],
		ShortName: "Get Screenshots",
		Subcategory: "Photos",
		WFGetLatestPhotosActionType: "Screenshot"
	},
	"is.workflow.actions.getlastvideo": {
		ActionClass: "WFGetLatestPhotosAction",
		ActionKeywords: ["video", "camera", "roll", "movie"],
		AppIdentifier: "com.apple.mobileslideshow",
		Category: "Media",
		Description: {
			DescriptionSummary:
				"Gets the most recent videos from the photo library."
		},
		Name: "Get Latest Videos",
		Output: {
			Multiple: true,
			OutputName: "Latest Videos",
			Types: ["PHAsset"]
		},
		ParameterSummary: "Get the latest ${WFGetLatestPhotoCount}",
		Parameters: [
			{
				Class: "WFStepperParameter",
				DefaultValue: 1,
				Key: "WFGetLatestPhotoCount",
				StepperDescription: "Number of Videos",
				StepperNoun: "Video",
				StepperPluralNoun: "Videos"
			}
		],
		RequiredResources: ["WFPhotoAccessResource"],
		ShortName: "Get Videos",
		Subcategory: "Photos",
		WFGetLatestPhotosActionType: "Video"
	},
	"is.workflow.actions.getlatestbursts": {
		ActionClass: "WFGetLatestPhotosAction",
		ActionKeywords: ["camera", "roll", "picture", "photo", "animated"],
		AppIdentifier: "com.apple.mobileslideshow",
		Category: "Media",
		CreationDate: "2015-12-08T08:00:00.000Z",
		Description: {
			DescriptionSummary:
				"Gets the most recent burst photos from the photo library."
		},
		Name: "Get Latest Bursts",
		Output: {
			Multiple: true,
			OutputName: "Latest Bursts",
			Types: ["PHAsset"]
		},
		ParameterSummary: "Get the latest ${WFGetLatestPhotoCount}",
		Parameters: [
			{
				Class: "WFStepperParameter",
				DefaultValue: 1,
				Key: "WFGetLatestPhotoCount",
				StepperDescription: "Number of Bursts",
				StepperNoun: "Burst",
				StepperPluralNoun: "Bursts"
			}
		],
		RequiredResources: ["WFPhotoAccessResource"],
		ShortName: "Get Bursts",
		Subcategory: "Photos",
		WFGetLatestPhotosActionType: "Burst"
	},
	"is.workflow.actions.getlatestlivephotos": {
		ActionClass: "WFGetLatestPhotosAction",
		ActionKeywords: ["camera", "roll", "picture", "photo", "animated"],
		AppIdentifier: "com.apple.mobileslideshow",
		Category: "Media",
		CreationDate: "2015-12-08T08:00:00.000Z",
		Description: {
			DescriptionSummary:
				"Gets the most recent Live Photos from the photo library."
		},
		Name: "Get Latest Live Photos",
		Output: {
			Multiple: true,
			OutputName: "Latest Live Photos",
			Types: ["PHAsset"]
		},
		ParameterSummary: "Get the latest ${WFGetLatestPhotoCount}",
		Parameters: [
			{
				Class: "WFStepperParameter",
				DefaultValue: 1,
				Key: "WFGetLatestPhotoCount",
				StepperDescription: "Number of Live Photos",
				StepperNoun: "Live Photo",
				StepperPluralNoun: "Live Photos"
			}
		],
		RequiredResources: ["WFPhotoAccessResource"],
		ShortName: "Get Live Photos",
		Subcategory: "Photos",
		WFGetLatestPhotosActionType: "Live Photo"
	},
	"is.workflow.actions.getlatestphotoimport": {
		ActionClass: "WFGetLatestPhotoImportAction",
		ActionKeywords: [
			"camera",
			"roll",
			"picture",
			"photo",
			"import",
			"camera",
			"sd",
			"card",
			"usb"
		],
		AppIdentifier: "com.apple.mobileslideshow",
		Category: "Media",
		CreationDate: "2018-09-28T07:00:00.000Z",
		Description: {
			DescriptionSummary:
				"Gets the most recent photo import from the Photos app."
		},
		Name: "Get Last Import",
		Output: {
			Multiple: true,
			OutputName: "Imported Photos",
			Types: ["PHAsset"]
		},
		ParameterSummary: "Get last import",
		Parameters: [],
		RequiredResources: ["WFPhotoAccessResource"],
		Subcategory: "Photos"
	},
	"is.workflow.actions.getmapslink": {
		ActionClass: "WFGetMapsLinkAction",
		ActionKeywords: ["link", "location", "app"],
		AppIdentifier: "com.apple.Maps",
		Category: "Location",
		Description: {
			DescriptionSummary:
				"Creates a URL to search for the location, place, or text that was passed into the action in a separate maps app."
		},
		Input: {
			Multiple: true,
			ParameterKey: "WFInput",
			Required: true,
			Types: ["NSString", "CLLocation", "MKMapItem"]
		},
		Name: "Get Maps URL",
		Output: {
			Multiple: true,
			OutputName: "Maps URL",
			Types: ["NSURL"]
		},
		ParameterSummary: "Get maps URL from ${WFInput}",
		Parameters: [
			{
				Class: "WFVariablePickerParameter",
				Key: "WFInput",
				Label: "Location",
				Placeholder: "Location"
			}
		]
	},
	"is.workflow.actions.getmarkdownfromrichtext": {
		ActionClass: "WFMarkdownFromRichTextAction",
		ActionKeywords: ["html2text", "source"],
		Category: "Documents",
		CreationDate: "2016-03-07T08:00:00.000Z",
		Description: {
			DescriptionResult: "Markdown",
			DescriptionSummary:
				"Converts the rich text passed as input to Markdown text (comparable to Aaron Swartz's html2text script)."
		},
		IconName: "RichText.png",
		Input: {
			Multiple: false,
			ParameterKey: "WFInput",
			Required: true,
			Types: ["WFRichTextContentItem"]
		},
		Name: "Make Markdown from Rich Text",
		Output: {
			Multiple: false,
			OutputName: "Markdown from Rich Text",
			Types: ["NSString"]
		},
		ParameterSummary: "Make Markdown from ${WFInput}",
		Parameters: [
			{
				Class: "WFVariablePickerParameter",
				Key: "WFInput",
				Label: "Rich Text",
				Placeholder: "Rich Text"
			}
		],
		ResidentCompatible: true,
		ShortName: "Make Markdown",
		Subcategory: "Rich Text"
	},
	"is.workflow.actions.getmyworkflows": {
		ActionClass: "WFGetMyWorkflowsAction",
		ActionKeywords: ["installed", "downloaded", "workflow"],
		AppIdentifier: "com.apple.shortcuts",
		Category: "Scripting",
		CreationDate: "2015-08-16T05:00:00.000Z",
		Description: {
			DescriptionSummary:
				"Gets the shortcuts stored on this device. For example, you could use this action with the Make Archive action to zip up your shortcuts."
		},
		Name: "Get My Shortcuts",
		Output: {
			Multiple: true,
			OutputName: "My Shortcuts",
			Types: ["WFWorkflowRecord"]
		},
		ParameterSummary: "Get my shortcuts",
		Subcategory: "Shortcuts",
		SuggestedNever: true
	},
	"is.workflow.actions.getnameofemoji": {
		ActionClass: "WFGetEmojiNameAction",
		Category: "Documents",
		CreationDate: "2015-03-07T08:00:00.000Z",
		Description: {
			DescriptionSummary:
				"Gets the names of emoji passed into the action."
		},
		IconName: "Smiley.png",
		Input: {
			ParameterKey: "WFInput",
			Required: true,
			Types: ["NSString"]
		},
		InputPassthrough: false,
		Name: "Get Name of Emoji",
		Output: {
			Multiple: true,
			OutputName: "Name of Emoji",
			Types: ["NSString"]
		},
		ParameterSummary: "Get name of emoji in ${WFInput}",
		Parameters: [
			{
				Class: "WFTextInputParameter",
				Key: "WFInput",
				Label: "Text",
				Placeholder: "Text"
			}
		],
		ResidentCompatible: true,
		ShortName: "Get Emoji Name",
		Subcategory: "Text",
		SuggestedNever: true
	},
	"is.workflow.actions.getpodcastsfromlibrary": {
		ActionClass: "WFGetPodcastsFromLibraryAction",
		ActionKeywords: ["podcast", "show", "library"],
		AppIdentifier: "com.apple.podcasts",
		CreationDate: "2019-02-11T08:00:00.000Z",
		Description: {
			DescriptionSummary:
				"Gets a list of all shows in your Podcast library."
		},
		Name: "Get Podcasts from Library",
		Output: {
			Multiple: true,
			OutputName: "Podcasts",
			Types: ["WFiTunesProductContentItem"]
		},
		Required: "",
		RequiredResources: ["WFPodcastsAccessResource"]
	},
	"is.workflow.actions.getrichtextfromhtml": {
		ActionClass: "WFRichTextFromHTMLAction",
		ActionKeywords: ["page", "source", "web", "get"],
		Category: "Documents",
		Description: {
			DescriptionInput: "HTML",
			DescriptionSummary:
				"Takes the inputted HTML and turns it into rich text, which can then be converted to other formats."
		},
		IconName: "RichText.png",
		Input: {
			Multiple: false,
			ParameterKey: "WFHTML",
			Required: true,
			Types: ["WFStringContentItem"]
		},
		Name: "Make Rich Text from HTML",
		Output: {
			Multiple: false,
			OutputName: "Rich Text from HTML",
			Types: ["public.html"]
		},
		ParameterSummary: "Make rich text from ${WFHTML}",
		Parameters: [
			{
				Class: "WFVariablePickerParameter",
				Key: "WFHTML",
				Label: "HTML",
				Placeholder: "HTML"
			}
		],
		ResidentCompatible: true,
		ShortName: "Make Rich Text",
		Subcategory: "Rich Text",
		SuggestedNever: true
	},
	"is.workflow.actions.getrichtextfrommarkdown": {
		ActionClass: "WFRichTextFromMarkdownAction",
		ActionKeywords: ["html", "get"],
		Category: "Documents",
		Description: {
			DescriptionInput: "Markdown",
			DescriptionSummary:
				"Takes the inputted Markdown and turns it into rich text, which can then be converted to other formats."
		},
		IconName: "RichText.png",
		Input: {
			Multiple: false,
			ParameterKey: "WFInput",
			Required: true,
			Types: ["WFStringContentItem"]
		},
		Name: "Make Rich Text from Markdown",
		Output: {
			Multiple: false,
			OutputName: "Rich Text from Markdown",
			Types: ["public.html"]
		},
		ParameterSummary: "Make rich text from ${WFInput}",
		Parameters: [
			{
				Class: "WFVariablePickerParameter",
				Key: "WFInput",
				Label: "Markdown Text",
				Placeholder: "Markdown Text"
			}
		],
		ResidentCompatible: true,
		ShortName: "Make Rich Text",
		Subcategory: "Rich Text",
		SuggestedNever: true
	},
	"is.workflow.actions.gettext": {
		ActionClass: "WFTextAction",
		ActionKeywords: [
			"text",
			"such text",
			"very speech",
			"much words",
			"so wow",
			"string"
		],
		Category: "Documents",
		Constructor: true,
		Description: {
			DescriptionSummary: "Passes the specified text to the next action."
		},
		IconName: "Text.png",
		Name: "Text",
		Output: {
			Multiple: false,
			OutputName: "Text",
			Types: ["NSString"]
		},
		Parameters: [
			{
				Class: "WFTextInputParameter",
				DefaultValue: "",
				Key: "WFTextActionText",
				Multiline: true,
				Placeholder: "Text"
			}
		],
		Subcategory: "Text"
	},
	"is.workflow.actions.gettimebetweendates": {
		ActionClass: "WFTimeUntilDateAction",
		ActionKeywords: [
			"between",
			"after",
			"before",
			"seconds",
			"minutes",
			"hours",
			"days",
			"weeks",
			"years",
			"math",
			"calculate",
			"interval"
		],
		Category: "Calendar",
		CreationDate: "2015-02-17T08:00:00.000Z",
		Description: {
			DescriptionNote:
				"This action outputs a negative number if the input date takes place before the specified date.",
			DescriptionSummary:
				"Subtracts the specified date from the date passed into the action. For example, this action could get the number of minutes from now until a calendar event passed in as input."
		},
		IconName: "Date.png",
		Input: {
			ParameterKey: "WFInput",
			Required: true,
			Types: ["NSDate"]
		},
		InputPassthrough: false,
		Name: "Get Time Between Dates",
		Output: {
			OutputName: "Time Between Dates",
			Types: ["NSNumber"]
		},
		ParameterSummary:
			"Get time between ${WFTimeUntilFromDate} and ${WFInput} in ${WFTimeUntilUnit}",
		Parameters: [
			{
				Class: "WFDateFieldParameter",
				Key: "WFTimeUntilFromDate",
				Label: "First Date"
			},
			{
				Class: "WFDateFieldParameter",
				Key: "WFInput",
				Label: "Second Date"
			},
			{
				Class: "WFEnumerationParameter",
				DefaultValue: "Minutes",
				Items: [
					"Total Time",
					"Seconds",
					"Minutes",
					"Hours",
					"Days",
					"Weeks",
					"Months",
					"Years"
				],
				Key: "WFTimeUntilUnit",
				Label: "In"
			}
		],
		ResidentCompatible: true,
		ShortName: "Subtract Dates",
		Subcategory: "Dates"
	},
	"is.workflow.actions.gettraveltime": {
		ActionClass: "WFGetTravelTimeAction",
		ActionKeywords: [
			"maps",
			"directions",
			"calculate",
			"estimated",
			"arrival",
			"eta"
		],
		AppIdentifier: "com.apple.Maps",
		Category: "Location",
		Description: {
			DescriptionInput: "The destination",
			DescriptionNote:
				"Travel times are provided by Apple Maps and take into account current traffic conditions.",
			DescriptionResult:
				"The amount of time it will take to get to the destination. If passed into an action expecting a date, this will be the date and time of arrival if you leave now.",
			DescriptionSummary:
				"Estimates the amount of time it will take to travel to the location passed into this action."
		},
		Input: {
			Multiple: false,
			ParameterKey: "WFDestination",
			Required: true,
			Types: ["NSString", "CLLocation", "MKMapItem"]
		},
		LastModifiedDate: "2015-08-20T07:00:00.000Z",
		Name: "Get Travel Time",
		Output: {
			Multiple: false,
			OutputName: "Travel Time",
			Types: ["WFTripInfo"]
		},
		ParameterSummary:
			"Get travel time from ${WFGetDirectionsCustomLocation} to ${WFDestination}",
		Parameters: [
			{
				Class: "WFLocationParameter",
				DefaultToCurrentLocation: true,
				Key: "WFGetDirectionsCustomLocation",
				Label: "Start Location",
				SkipProcessingCurrentLocation: true
			},
			{
				Class: "WFLocationParameter",
				Key: "WFDestination",
				Label: "End Location",
				SkipProcessingCurrentLocation: true
			},
			{
				Class: "WFEnumerationParameter",
				DefaultValue: "Driving",
				Items: ["Driving", "Walking", "Transit"],
				Key: "WFGetDirectionsActionMode",
				Label: "Mode"
			}
		],
		RequiredResources: ["WFMainThreadResource", "WFLocationAccessResource"],
		ResidentCompatible: true,
		Subcategory: "Routing"
	},
	"is.workflow.actions.gettypeaction": {
		ActionClass: "WFGetTypeAction",
		Category: "Scripting",
		Description: {
			DescriptionSummary: "Returns a particular file type from the input."
		},
		IconName: "Scripting.png",
		Input: {
			Multiple: true,
			ParameterKey: "WFInput",
			Required: true,
			Types: ["WFContentItem"]
		},
		IsDebugAction: true,
		Name: "Get File of Type",
		Output: {
			Multiple: true,
			OutputName: "File of Type",
			Types: ["public.data"]
		},
		ParameterSummary: "Get file of type ${WFFileType} from ${WFInput}",
		Parameters: [
			{
				AutocapitalizationType: "None",
				Class: "WFTextInputParameter",
				DefaultValue: "public.rtf",
				DisableAutocorrection: true,
				Key: "WFFileType",
				KeyboardType: "URL",
				Label: "Type",
				Placeholder: "UTI"
			},
			{
				Class: "WFVariablePickerParameter",
				Key: "WFInput",
				Label: "Input",
				Placeholder: "Input"
			}
		],
		Subcategory: "Content"
	},
	"is.workflow.actions.getupcomingevents": {
		ActionClass: "WFGetUpcomingCalendarItemsAction",
		ActionKeywords: ["calendar", "event", "events", "next", "upcoming"],
		AppIdentifier: "com.apple.mobilecal",
		Category: "Calendar",
		Description: {
			DescriptionSummary:
				"Gets upcoming calendar events, ordered from nearest to farthest away in time."
		},
		LastModifiedDate: "2015-02-03T08:00:00.000Z",
		Name: "Get Upcoming Events",
		Output: {
			Multiple: true,
			OutputName: "Upcoming Events",
			Types: ["EKEvent"]
		},
		ParameterSummary:
			"Get ${WFGetUpcomingItemCount} from ${WFGetUpcomingItemCalendar}",
		Parameters: [
			{
				AllowsAllCalendars: true,
				Class: "WFCalendarPickerParameter",
				EventKitEntityType: "Event",
				Key: "WFGetUpcomingItemCalendar",
				Label: "Calendar"
			},
			{
				Class: "WFStepperParameter",
				DefaultValue: 1,
				Key: "WFGetUpcomingItemCount",
				StepperDescription: "Number of Events",
				StepperNoun: "Event",
				StepperPluralNoun: "Events",
				StepperPrefix: "Get"
			},
			{
				Class: "WFEnumerationParameter",
				DefaultValue: "Any Day",
				Items: ["Any Day", "Today", "Tomorrow", "Specified Day"],
				Key: "WFDateSpecifier",
				Label: "Day"
			},
			{
				Class: "WFDateFieldParameter",
				HintDateMode: "Date",
				Key: "WFSpecifiedDate",
				Label: "Specified Day",
				Placeholder: "June 29, 2007",
				RequiredResources: [
					{
						WFParameterKey: "WFDateSpecifier",
						WFParameterValue: "Specified Day",
						WFResourceClass: "WFParameterRelationResource"
					}
				],
				TextAlignment: "Right"
			}
		],
		RequiredResources: ["WFCalendarAccessResource"],
		ShortName: "Get Events",
		Subcategory: "Calendar",
		WFGetUpcomingItemType: 0,
		WatchCompatible: true
	},
	"is.workflow.actions.getupcomingreminders": {
		ActionClass: "WFGetUpcomingCalendarItemsAction",
		ActionKeywords: ["calendar", "reminder", "next", "upcoming"],
		AppIdentifier: "com.apple.reminders",
		Category: "Calendar",
		Description: {
			DescriptionSummary:
				"Gets upcoming reminders, ordered from nearest to farthest away due date."
		},
		LastModifiedDate: "2015-02-03T08:00:00.000Z",
		Name: "Get Upcoming Reminders",
		Output: {
			Multiple: true,
			OutputName: "Upcoming Reminders",
			Types: ["EKReminder"]
		},
		ParameterSummary:
			"Get ${WFGetUpcomingItemCount} from ${WFGetUpcomingItemCalendar}",
		Parameters: [
			{
				AllowsAllCalendars: true,
				Class: "WFCalendarPickerParameter",
				EventKitEntityType: "Reminder",
				Key: "WFGetUpcomingItemCalendar",
				Label: "List"
			},
			{
				Class: "WFStepperParameter",
				DefaultValue: 1,
				Key: "WFGetUpcomingItemCount",
				StepperDescription: "Number of Reminders",
				StepperNoun: "Reminder",
				StepperPluralNoun: "Reminders",
				StepperPrefix: "Get"
			}
		],
		RequiredResources: ["WFReminderAccessResource"],
		ShortName: "Get Reminders",
		Subcategory: "Reminders",
		WFGetUpcomingItemType: 1,
		WatchCompatible: true
	},
	"is.workflow.actions.geturlcomponent": {
		ActionClass: "WFURLGetComponentAction",
		ActionKeywords: [
			"Scheme",
			"User",
			"Password",
			"Host",
			"Port",
			"Path",
			"Query",
			"Fragment"
		],
		Attribution: "URL",
		Category: "Web",
		Description: {
			DescriptionNote:
				"URLs are structured as follows: scheme://user:password@host:port/path?query#fragment",
			DescriptionSummary:
				"Gets the specified part of the URL passed into the action."
		},
		IconName: "URL.png",
		Input: {
			Multiple: false,
			ParameterKey: "WFURL",
			Required: true,
			Types: ["WFURLContentItem"]
		},
		InputPassthrough: false,
		Name: "Get Component of URL",
		Output: {
			Multiple: false,
			OutputName: "Component of URL",
			Types: ["NSString"]
		},
		ParameterSummary: "Get ${WFURLComponent} from ${WFURL}",
		Parameters: [
			{
				Class: "WFTextInputParameter",
				Key: "WFURL",
				KeyboardType: "URL",
				Label: "URL"
			},
			{
				Class: "WFEnumerationParameter",
				DefaultValue: "Scheme",
				Items: [
					"Scheme",
					"User",
					"Password",
					"Host",
					"Port",
					"Path",
					"Query",
					"Fragment"
				],
				Key: "WFURLComponent",
				Label: "Component"
			}
		],
		ResidentCompatible: true,
		ShortName: "Get Component",
		Subcategory: "URLs",
		SuggestedNever: true
	},
	"is.workflow.actions.getvalueforkey": {
		ActionClass: "WFGetDictionaryValueAction",
		ActionKeywords: [
			"json",
			"plist",
			"xml",
			"urlencoded",
			"query",
			"string",
			"for",
			"key"
		],
		Category: "Scripting",
		Description: {
			DescriptionNote:
				'You can reference values deep inside of a dictionary by providing multiple keys separated by dots. For example, to get the value "soup" from the dictionary {"beverages": [{"favorite": "soup"}]}, you can specify the key path "beverages.1.favorite".',
			DescriptionSummary:
				"Gets the value for the specified key in the dictionary passed into the action. "
		},
		IconName: "Scripting.png",
		Input: {
			Multiple: false,
			ParameterKey: "WFInput",
			Required: true,
			Types: ["WFDictionaryContentItem"]
		},
		InputPassthrough: false,
		LastModifiedDate: "2016-10-10T19:00:00.000Z",
		Name: "Get Dictionary Value",
		Output: {
			Multiple: true,
			OutputName: "Dictionary Value",
			Types: [
				"WFStringContentItem",
				"WFNumberContentItem",
				"WFDateContentItem",
				"WFDictionaryContentItem",
				"WFBooleanContentItem"
			]
		},
		ParameterSummary: {
			"WFGetDictionaryValueType(All Keys),WFInput":
				"Get ${WFGetDictionaryValueType} in ${WFInput}",
			"WFGetDictionaryValueType(All Values),WFInput":
				"Get ${WFGetDictionaryValueType} in ${WFInput}",
			"WFGetDictionaryValueType(Value),WFDictionaryKey,WFInput":
				"Get ${WFGetDictionaryValueType} for ${WFDictionaryKey} in ${WFInput}"
		},
		Parameters: [
			{
				Class: "WFEnumerationParameter",
				DefaultValue: "Value",
				DisallowedVariableTypes: ["Ask", "Variable"],
				Items: ["Value", "All Keys", "All Values"],
				Key: "WFGetDictionaryValueType",
				Label: "Get"
			},
			{
				AutocapitalizationType: "None",
				Class: "WFTextInputParameter",
				DisableAutocorrection: true,
				Key: "WFDictionaryKey",
				Label: "Key",
				Placeholder: "Key",
				RequiredResources: [
					{
						WFParameterKey: "WFGetDictionaryValueType",
						WFParameterValue: "Value",
						WFResourceClass: "WFParameterRelationResource"
					}
				],
				TextAlignment: "Right"
			},
			{
				Class: "WFVariablePickerParameter",
				Key: "WFInput",
				Label: "Dictionary",
				Placeholder: "Dictionary"
			}
		],
		ResidentCompatible: true,
		Subcategory: "Dictionaries"
	},
	"is.workflow.actions.getvariable": {
		ActionClass: "WFGetVariableAction",
		ActionKeywords: ["programming", "scripting", "var"],
		Attribution: "Variables",
		Category: "Scripting",
		Description: {
			DescriptionSummary:
				"Gets the value of the specified variable and passes it to the next action."
		},
		Discoverable: false,
		IconName: "Variable.png",
		Name: "Get Variable",
		Output: {
			Multiple: true,
			OutputName: "Variable",
			Types: ["WFContentItem"]
		},
		ParameterSummary: "Get ${WFVariable}",
		Parameters: [
			{
				Class: "WFVariablePickerParameter",
				DisallowedVariableTypes: ["Clipboard"],
				Key: "WFVariable",
				Label: "Variable",
				Placeholder: "Variable"
			}
		],
		ResidentCompatible: true,
		Subcategory: "Variables"
	},
	"is.workflow.actions.getwebpagecontents": {
		ActionClass: "WFGetWebPageAction",
		AppIdentifier: "com.apple.mobilesafari",
		Category: "Web",
		Description: {
			DescriptionSummary:
				"Extracts the contents of the webpages passed into the action."
		},
		Input: {
			Multiple: true,
			ParameterKey: "WFInput",
			Required: true,
			Types: ["WFURLContentItem"]
		},
		Name: "Get Contents of Webpage",
		Output: {
			Multiple: true,
			OutputName: "Contents of Webpage",
			Types: ["NSAttributedString"]
		},
		ParameterSummary: "Get contents of webpage at ${WFInput}",
		Parameters: [
			{
				AutocapitalizationType: "None",
				Class: "WFTextInputParameter",
				DisableAutocorrection: true,
				Key: "WFInput",
				KeyboardType: "URL",
				Label: "URL",
				TextContentType: "URL"
			}
		],
		RequiredResources: ["WFRemoteServerAccessResource"],
		ResidentCompatible: true,
		ShortName: "Get Webpage",
		Subcategory: "Web Requests",
		UnsupportedEnvironments: ["MemoryConstrained"]
	},
	"is.workflow.actions.getwifi": {
		ActionClass: "WFGetNetworkDetailsAction",
		ActionKeywords: [
			"wifi",
			"wi-fi",
			"mac",
			"address",
			"name",
			"technology",
			"code",
			"radio",
			"country",
			"carrier",
			"cellular",
			"wlan"
		],
		Category: "Scripting",
		CreationDate: "2015-08-20T07:00:00.000Z",
		Description: {
			DescriptionSummary:
				"Gets information about the currently connected networks."
		},
		IconName: "Wi-Fi.png",
		Name: "Get Network Details",
		Output: {
			Multiple: false,
			OutputName: "Network Details",
			Types: ["NSString"]
		},
		ParameterSummary: {
			"WFNetworkDetailsNetwork(Cellular),WFCellularDetail":
				"Get ${WFNetworkDetailsNetwork} network's ${WFCellularDetail}",
			"WFNetworkDetailsNetwork(Wi-Fi),WFWiFiDetail":
				"Get ${WFNetworkDetailsNetwork} network's ${WFWiFiDetail}"
		},
		Parameters: [
			{
				Class: "WFNetworkPickerParameter",
				Key: "WFNetworkDetailsNetwork",
				Label: "Network"
			},
			{
				Class: "WFEnumerationParameter",
				DefaultValue: "Network Name",
				Items: ["Network Name", "BSSID"],
				Key: "WFWiFiDetail",
				Label: "Get",
				RequiredResources: [
					{
						WFParameterKey: "WFNetworkDetailsNetwork",
						WFParameterValue: "Wi-Fi",
						WFResourceClass: "WFParameterRelationResource"
					}
				]
			},
			{
				Class: "WFEnumerationParameter",
				DefaultValue: "Carrier Name",
				Items: ["Carrier Name", "Radio Technology", "Country Code"],
				Key: "WFCellularDetail",
				Label: "Get",
				RequiredResources: [
					{
						WFParameterKey: "WFNetworkDetailsNetwork",
						WFParameterValue: "Cellular",
						WFResourceClass: "WFParameterRelationResource"
					}
				]
			}
		],
		ResidentCompatible: true,
		Subcategory: "Network",
		SuggestedNever: true
	},
	"is.workflow.actions.giphy": {
		ActionClass: "WFGiphyAction",
		ActionKeywords: ["gif"],
		Category: "Web",
		CreationDate: "2015-02-19T08:00:00.000Z",
		Description: {
			DescriptionNote: "Powered by Giphy (giphy.com)",
			DescriptionSummary:
				"Searches for GIFs representing the text specified using Giphy."
		},
		IconName: "Giphy",
		Name: "Search Giphy",
		Output: {
			Multiple: true,
			OutputName: "GIFs",
			Types: ["WFGiphyObject"]
		},
		ParameterSummary: "Search Giphy for ${WFGiphyQuery}",
		Parameters: [
			{
				AutocapitalizationType: "None",
				Class: "WFTextInputParameter",
				Key: "WFGiphyQuery",
				Label: "Search",
				Placeholder: "Trending",
				TextAlignment: "Right"
			},
			{
				Class: "WFSwitchParameter",
				DefaultValue: true,
				Key: "WFGiphyShowPicker",
				Label: "Show GIF Picker"
			},
			{
				Class: "WFStepperParameter",
				DefaultValue: 1,
				Key: "WFGiphyLimit",
				RequiredResources: [
					{
						WFParameterKey: "WFGiphyShowPicker",
						WFParameterValue: false,
						WFResourceClass: "WFParameterRelationResource"
					}
				],
				StepperDescription: "Number of GIFs",
				StepperNoun: "GIF",
				StepperPluralNoun: "GIFs",
				StepperPrefix: "Get"
			},
			{
				Class: "WFSwitchParameter",
				Key: "WFGiphySelectMultiple",
				Label: "Select Multiple",
				RequiredResources: [
					{
						WFParameterKey: "WFGiphyShowPicker",
						WFParameterValue: true,
						WFResourceClass: "WFParameterRelationResource"
					}
				]
			}
		],
		RequiredResources: [
			{
				RequiredResources: [
					{
						WFParameterKey: "WFGiphyShowPicker",
						WFParameterValue: true,
						WFResourceClass: "WFParameterRelationResource"
					}
				],
				WFResourceClass: "WFUserInteractionResource"
			}
		],
		Subcategory: "Giphy",
		UserInterfaces: ["UIKit", "WatchKit"]
	},
	"is.workflow.actions.goodreader.open": {
		ActionClass: "WFSendToGoodReaderAction",
		ActionKeywords: ["save", "file", "document"],
		AppIdentifier: "com.goodiware.goodreader4",
		Category: "Documents",
		CreationDate: "2015-02-03T08:00:00.000Z",
		Description: {
			DescriptionSummary: "Opens a file in GoodReader."
		},
		Input: {
			Multiple: false,
			ParameterKey: "WFInput",
			Required: true,
			Types: ["public.data"]
		},
		InputPassthrough: true,
		Name: "Open in GoodReader",
		ParameterSummary: "Open ${WFInput}",
		Parameters: [
			{
				Class: "WFVariablePickerParameter",
				Key: "WFInput",
				Label: "File",
				Placeholder: "File"
			}
		],
		RequiredResources: [
			"WFURLOpenResource",
			{
				AppIdentifier: "com.goodiware.goodreader4",
				WFResourceClass: "WFAppInstalledResource"
			}
		]
	},
	"is.workflow.actions.handoff": {
		ActionClass: "WFHandoffAction",
		ActionKeywords: [
			"apple",
			"watch",
			"send",
			"phone",
			"transfer",
			"switch",
			"handoff",
			"continuity",
			"workflow"
		],
		Category: "Scripting",
		CreationDate: "2015-08-20T07:00:00.000Z",
		Description: {
			DescriptionSummary:
				"Switches into the Shortcuts app and continues to the next action."
		},
		IconName: "HandoffAction.png",
		InputPassthrough: true,
		Name: "Continue in Shortcuts App",
		ParameterSummary: "Continue in Shortcuts app",
		RequiredResources: ["WFUserInteractionResource"],
		Subcategory: "Control Flow"
	},
	"is.workflow.actions.handoffplayback": {
		ActionClass: "WFHandOffPlaybackAction",
		ActionKeywords: ["device", "airplay", "playback", "audio", "route"],
		Attribution: "Now Playing",
		Category: "Media",
		Description: {
			DescriptionSummary:
				"Hands off Music or Podcasts playback between two devices."
		},
		Discontinued: true,
		IconName: "HandoffMusic.png",
		Name: "Hand Off Playback",
		ParameterSummary:
			"Hand off playback from ${WFSourceMediaRoute} to ${WFDestinationMediaRoute}",
		Parameters: [
			{
				Class: "WFMediaRoutePickerParameter",
				Description: "The device to hand off playback from.",
				DisallowedVariableTypes: ["Variable"],
				Key: "WFSourceMediaRoute",
				Label: "Source",
				RouteType: "HandoffEndpoint"
			},
			{
				Class: "WFMediaRoutePickerParameter",
				Description: "The device to hand off playback to.",
				DisallowedVariableTypes: ["Variable"],
				Key: "WFDestinationMediaRoute",
				Label: "Destination",
				RouteType: "HandoffEndpoint"
			}
		],
		RequiredResources: ["WFUnavailableResource"],
		Subcategory: "Playback"
	},
	"is.workflow.actions.hash": {
		ActionClass: "WFGenerateHashAction",
		ActionKeywords: ["crypto"],
		Category: "Scripting",
		CreationDate: "2015-01-11T06:00:00.000Z",
		Description: {
			DescriptionSummary: "Generates a MD5/SHA1 hash from the input."
		},
		IconName: "Scripting.png",
		Input: {
			Multiple: true,
			ParameterKey: "WFInput",
			Required: true,
			Types: ["WFGenericFileContentItem"]
		},
		Name: "Generate Hash",
		Output: {
			Multiple: true,
			OutputName: "Hash",
			Types: ["NSString"]
		},
		ParameterSummary: "Generate ${WFHashType} hash of ${WFInput}",
		Parameters: [
			{
				Class: "WFEnumerationParameter",
				DefaultValue: "MD5",
				Items: ["MD5", "SHA1", "SHA256", "SHA512"],
				Key: "WFHashType",
				Label: "Type"
			},
			{
				Class: "WFVariablePickerParameter",
				Key: "WFInput",
				Label: "Input"
			}
		],
		ResidentCompatible: true,
		Subcategory: "Files",
		SuggestedNever: true
	},
	"is.workflow.actions.health.quantity.log": {
		ActionClass: "WFLogHealthSampleAction",
		ActionKeywords: ["health", "quantity", "steps", "weight", "fitness"],
		AppIdentifier: "com.apple.Health",
		Category: "Health",
		CreationDate: "2015-06-16T07:00:00.000Z",
		Description: {
			DescriptionSummary:
				"Adds a data point into the Health app. You can log anything that the Health app supports, including your weight, steps taken, running distance, caloric intake and more."
		},
		LastModifiedDate: "2016-12-06T08:00:00.000Z",
		Name: "Log Health Sample",
		Output: {
			Multiple: false,
			OutputName: "Health Sample",
			Types: ["WFHKSampleContentItem"]
		},
		Parameters: [
			{
				Class: "WFQuantityTypePickerParameter",
				DisallowedVariableTypes: ["Variable"],
				Key: "WFQuantitySampleType",
				Label: "Type",
				Placeholder: "Type"
			},
			{
				AutocapitalizationType: "None",
				Class: "WFHealthQuantityFieldParameter",
				Key: "WFQuantitySampleQuantity",
				KeyboardType: "DecimalPad",
				Label: "Value",
				Placeholder: "Value",
				QuantityTypeKey: "WFQuantitySampleType",
				TextAlignment: "Right"
			},
			{
				AutocapitalizationType: "None",
				Class: "WFHealthQuantityAdditionalFieldParameter",
				Key: "WFQuantitySampleAdditionalQuantity",
				KeyboardType: "DecimalPad",
				Placeholder: "10",
				QuantityTypeKey: "WFQuantitySampleType",
				TextAlignment: "Right"
			},
			{
				Class: "WFHealthQuantityAdditionalPickerParameter",
				DisallowedVariableTypes: ["Variable"],
				Key: "WFQuantitySampleAdditionalEnumeration",
				Label: "Reason"
			},
			{
				Class: "WFHealthCategoryPickerParameter",
				DisallowedVariableTypes: ["Variable"],
				Key: "WFCategorySampleEnumeration",
				Label: "Value"
			},
			{
				Class: "WFHealthCategoryAdditionalPickerParameter",
				DisallowedVariableTypes: ["Variable"],
				Key: "WFCategorySampleAdditionalEnumerationKey",
				Label: "Value"
			},
			{
				Class: "WFHealthActionStartDateFieldParameter",
				Description:
					"The date and time of the data point. The current date will be used if you don't provide a date.",
				Key: "WFQuantitySampleDate",
				Label: "Date",
				Placeholder: "optional",
				TextAlignment: "Right"
			},
			{
				Class: "WFHealthActionEndDateFieldParameter",
				Description:
					"The date and time for the end of the data point. The current date will be used if you don't provide a date.",
				Key: "WFSampleEndDate",
				Label: "End Date",
				Placeholder: "optional",
				TextAlignment: "Right"
			}
		],
		RequiredResources: [
			"WFHealthKitResource",
			{
				AccessType: "Write",
				ReadableObjectTypeIdentifierParameterKey:
					"WFQuantitySampleType",
				ReadableType: "Quantity",
				WFResourceClass: "WFHealthKitAccessResource"
			}
		],
		Subcategory: "Log",
		WatchCompatible: true
	},
	"is.workflow.actions.health.workout.log": {
		ActionClass: "WFLogWorkoutAction",
		ActionKeywords: ["health", "workout", "sport", "fitness", "activity"],
		AppIdentifier: "com.apple.Health",
		Category: "Health",
		CreationDate: "2015-06-16T07:00:00.000Z",
		Description: {
			DescriptionSummary:
				"Adds a workout into the Health app. You can log all kinds of activities, from running and cycling to playing a sport."
		},
		Name: "Log Workout",
		Output: {
			Multiple: false,
			OutputName: "Workout",
			Types: ["WFHKWorkoutContentItem"]
		},
		ParameterSummary: "Log ${WFWorkoutReadableActivityType} workout",
		Parameters: [
			{
				Class: "WFWorkoutTypePickerParameter",
				Key: "WFWorkoutReadableActivityType",
				Label: "Type"
			},
			{
				Class: "WFDateFieldParameter",
				Description: "The date and time of the start of the workout",
				Key: "WFWorkoutDate",
				Label: "Date",
				Placeholder: "optional",
				TextAlignment: "Right"
			},
			{
				AllowsDecimalNumbers: false,
				Class: "WFDurationQuantityFieldParameter",
				Description: "The duration of the workout (optional)",
				Key: "WFWorkoutDuration",
				Label: "Duration",
				Placeholder: "30",
				PossibleUnits: ["sec", "min", "hr"],
				TextAlignment: "Right"
			},
			{
				Class: "WFHealthQuantityFieldParameter",
				Description:
					"The calories burned during the activity (optional)",
				Key: "WFWorkoutCaloriesQuantity",
				Label: "Calories",
				Placeholder: "400",
				QuantityType: "Active Calories",
				TextAlignment: "Right"
			},
			{
				AutocapitalizationType: "None",
				Class: "WFHealthQuantityFieldParameter",
				Description:
					"The distance covered during the activity. Only provide this if it makes sense for the activity. (optional)",
				Key: "WFWorkoutDistanceQuantity",
				Label: "Distance",
				Placeholder: "10",
				QuantityType: "Walking + Running Distance",
				TextAlignment: "Right"
			}
		],
		RequiredResources: [
			"WFHealthKitResource",
			{
				Resources: [
					{
						AccessType: "Write",
						ReadableType: "Workout"
					},
					{
						AccessType: "Write",
						ReadableObjectTypeIdentifier:
							"Walking + Running Distance",
						ReadableType: "Quantity"
					},
					{
						AccessType: "Write",
						ReadableObjectTypeIdentifier: "Active Calories",
						ReadableType: "Quantity"
					}
				],
				WFResourceClass: "WFHealthKitAccessResource"
			}
		],
		Subcategory: "Log",
		WatchCompatible: true
	},
	"is.workflow.actions.homeaccessory": {
		ActionClass: "WFHomeAccessoryAction",
		ActionKeywords: [
			"homekit",
			"accessories",
			"accessory",
			"automation",
			"smart",
			"house"
		],
		AppIdentifier: "com.apple.Home",
		Category: "Home",
		ConfigurationViewClass: "WFHomeAccessoryActionView",
		CreationDate: "2018-12-07T08:00:00.000Z",
		Description: {
			DescriptionSummary: "Sets a Home accessory."
		},
		InputPassthrough: true,
		Name: "Home",
		ParameterSummary: "Set ${WFHomeTriggerActionSets}",
		Parameters: [
			{
				Class: "WFHomeAccessoryPickerParameter",
				DisallowedVariableTypes: ["Variable"],
				Key: "WFHomeTriggerActionSets"
			}
		],
		RequiredResources: ["WFHomeKitAccessResource"],
		ResidentCompatible: true,
		WatchCompatible: true
	},
	"is.workflow.actions.image.combine": {
		ActionClass: "WFImageCombineAction",
		ActionKeywords: [
			"horizontal",
			"vertical",
			"compile",
			"connect",
			"montage",
			"photos"
		],
		Category: "Media",
		CreationDate: "2015-01-11T06:00:00.000Z",
		Description: {
			DescriptionSummary:
				"Combines the images passed into the action horizontally, vertically, or in a grid."
		},
		IconName: "Image.png",
		Input: {
			Multiple: true,
			ParameterKey: "WFInput",
			Required: true,
			Types: ["UIImage"]
		},
		InputPassthrough: false,
		LastModifiedDate: "2015-08-20T07:00:00.000Z",
		Name: "Combine Images",
		Output: {
			Multiple: false,
			OutputName: "Combined Image",
			Types: ["UIImage"]
		},
		ParameterSummary: "Combine ${WFInput} ${WFImageCombineMode}",
		Parameters: [
			{
				Class: "WFEnumerationParameter",
				DefaultValue: "Horizontally",
				Items: ["Horizontally", "Vertically", "In a Grid"],
				Key: "WFImageCombineMode",
				Label: "Mode"
			},
			{
				AllowsDecimalNumbers: true,
				Class: "WFNumberFieldParameter",
				DefaultValue: 0,
				Description:
					"The number of pixels of transparent space to place between consecutive images.",
				Key: "WFImageCombineSpacing",
				Label: "Spacing",
				Placeholder: "0",
				TextAlignment: "Right"
			},
			{
				AllowsMultipleValues: true,
				Class: "WFVariablePickerParameter",
				Key: "WFInput",
				Label: "Images",
				Placeholder: "Images"
			}
		],
		ResidentCompatible: true,
		Subcategory: "Image Editing"
	},
	"is.workflow.actions.image.convert": {
		ActionClass: "WFImageConvertAction",
		ActionKeywords: [
			"jpeg",
			"jpg",
			"png",
			"bmp",
			"tiff",
			"strip",
			"remove",
			"preserve",
			"metadata"
		],
		Category: "Media",
		CreationDate: "2015-01-11T06:00:00.000Z",
		Description: {
			DescriptionSummary:
				"Converts the images passed into the action to the specified image format."
		},
		IconName: "Image.png",
		Input: {
			Multiple: true,
			ParameterKey: "WFInput",
			Required: true,
			Types: ["UIImage"]
		},
		InputPassthrough: false,
		Name: "Convert Image",
		Output: {
			Multiple: false,
			OutputName: "Converted Image",
			Types: ["UIImage"]
		},
		ParameterSummary: "Convert ${WFInput} to ${WFImageFormat}",
		Parameters: [
			{
				Class: "WFImageConvertFormatPickerParameter",
				DefaultValue: "JPEG",
				Key: "WFImageFormat",
				Label: "Format"
			},
			{
				Class: "WFSliderParameter",
				DefaultValue: 0.75,
				Description:
					"Allows you to choose the image quality used when compressing the image file. Higher quality images will look better, but result in larger files.",
				Key: "WFImageCompressionQuality",
				Label: "Quality",
				RequiredResources: [
					{
						WFParameterKey: "WFImageFormat",
						WFParameterValues: ["JPEG", "JPEG-2000"],
						WFResourceClass: "WFParameterRelationResource"
					}
				]
			},
			{
				Class: "WFSwitchParameter",
				DefaultValue: true,
				Description:
					"When Preserve Metadata is turned off, all metadata, such as the GPS coordinates where the photo was taken, will be stripped from the image file.",
				Key: "WFImagePreserveMetadata",
				Label: "Preserve Metadata",
				RequiredResources: [
					{
						WFParameterKey: "WFImageFormat",
						WFParameterValues: [
							"JPEG",
							"PNG",
							"TIFF",
							"HEIF",
							"Match Input"
						],
						WFResourceClass: "WFParameterRelationResource"
					}
				]
			},
			{
				Class: "WFVariablePickerParameter",
				Key: "WFInput",
				Label: "Image",
				Placeholder: "Image"
			}
		],
		ResidentCompatible: true,
		Subcategory: "Images"
	},
	"is.workflow.actions.image.crop": {
		ActionClass: "WFImageCropAction",
		ActionKeywords: [
			"transform",
			"shrink",
			"stretch",
			"expand",
			"rectangle",
			"clip",
			"canvas"
		],
		Category: "Media",
		CreationDate: "2015-01-11T06:00:00.000Z",
		Description: {
			DescriptionSummary: "Crops images to a smaller rectangle."
		},
		IconName: "Image.png",
		Input: {
			Multiple: true,
			ParameterKey: "WFInput",
			Required: true,
			Types: ["UIImage"]
		},
		InputPassthrough: false,
		LastModifiedDate: "2015-08-20T07:00:00.000Z",
		Name: "Crop Image",
		Output: {
			Multiple: true,
			OutputName: "Cropped Image",
			Types: ["UIImage"]
		},
		ParameterSummary: "Crop ${WFInput}",
		Parameters: [
			{
				Class: "WFVariablePickerParameter",
				Key: "WFInput",
				Label: "Image",
				Placeholder: "Image"
			},
			{
				Class: "WFEnumerationParameter",
				DefaultValue: "Center",
				Description:
					"Where on the original image the crop should occur.",
				Items: [
					"Center",
					"Top Left",
					"Top Right",
					"Bottom Left",
					"Bottom Right",
					"Custom"
				],
				Key: "WFImageCropPosition",
				Label: "Position"
			},
			{
				Class: "WFNumberFieldParameter",
				Key: "WFImageCropX",
				Label: "X Coordinate",
				Placeholder: "0",
				RequiredResources: [
					{
						WFParameterKey: "WFImageCropPosition",
						WFParameterValue: "Custom",
						WFResourceClass: "WFParameterRelationResource"
					}
				],
				TextAlignment: "Right"
			},
			{
				Class: "WFNumberFieldParameter",
				Key: "WFImageCropY",
				Label: "Y Coordinate",
				Placeholder: "0",
				RequiredResources: [
					{
						WFParameterKey: "WFImageCropPosition",
						WFParameterValue: "Custom",
						WFResourceClass: "WFParameterRelationResource"
					}
				],
				TextAlignment: "Right"
			},
			{
				Class: "WFNumberFieldParameter",
				DefaultValue: 100,
				Key: "WFImageCropWidth",
				Label: "Width",
				Placeholder: "100",
				TextAlignment: "Right"
			},
			{
				Class: "WFNumberFieldParameter",
				DefaultValue: 100,
				Key: "WFImageCropHeight",
				Label: "Height",
				Placeholder: "100",
				TextAlignment: "Right"
			}
		],
		ResidentCompatible: true,
		Subcategory: "Image Editing",
		SuggestedNever: true
	},
	"is.workflow.actions.image.flip": {
		ActionClass: "WFImageFlipAction",
		ActionKeywords: ["portrait", "landscape", "horizontal", "vertical"],
		Category: "Media",
		Description: {
			DescriptionSummary:
				"Reverses the direction of images either horizontally or vertically."
		},
		IconName: "Image.png",
		Input: {
			Multiple: true,
			ParameterKey: "WFInput",
			Required: true,
			Types: ["UIImage"]
		},
		InputPassthrough: false,
		LastModifiedDate: "2015-08-20T07:00:00.000Z",
		Name: "Flip Image",
		Output: {
			Multiple: true,
			OutputName: "Flipped Image",
			Types: ["UIImage"]
		},
		ParameterSummary: "Flip ${WFInput} ${WFImageFlipDirection}",
		Parameters: [
			{
				Class: "WFFlipImageDirectionPickerParameter",
				DefaultValue: "Horizontal",
				Items: ["Horizontal", "Vertical"],
				Key: "WFImageFlipDirection",
				Label: "Direction"
			},
			{
				Class: "WFVariablePickerParameter",
				Key: "WFInput",
				Label: "Image",
				Placeholder: "Image"
			}
		],
		ResidentCompatible: true,
		Subcategory: "Image Editing",
		SuggestedNever: true
	},
	"is.workflow.actions.image.mask": {
		ActionClass: "WFMaskImageAction",
		ActionKeywords: [
			"photos",
			"transform",
			"overlay",
			"clip",
			"corner",
			"radius"
		],
		Category: "Media",
		CreationDate: "2018-02-02T08:00:00.000Z",
		Description: {
			DescriptionInput: "Images to mask",
			DescriptionResult: "The masked images",
			DescriptionSummary:
				"Applies a mask to each image passed into the action. For example, you can cut images into a rounded rectangle, ellipse or icon shape, or provide a custom alpha mask."
		},
		IconName: "Image.png",
		Input: {
			Multiple: true,
			ParameterKey: "WFInput",
			Required: true,
			Types: ["WFImageContentItem"]
		},
		InputPassthrough: false,
		Name: "Mask Image",
		Output: {
			Multiple: true,
			OutputName: "Masked Image",
			Types: ["WFImageContentItem"]
		},
		ParameterSummary: {
			"WFInput,WFMaskType": "Mask ${WFInput} with ${WFMaskType} shape",
			"WFInput,WFMaskType(Custom Image),WFCustomMaskImage":
				"Mask ${WFInput} with ${WFMaskType} ${WFCustomMaskImage}",
			"WFInput,WFMaskType(Rounded Rectangle),WFMaskCornerRadius":
				"Mask ${WFInput} with ${WFMaskType} shape"
		},
		Parameters: [
			{
				Class: "WFVariablePickerParameter",
				Key: "WFInput",
				Label: "Image",
				Placeholder: "Image"
			},
			{
				Class: "WFEnumerationParameter",
				DefaultValue: "Rounded Rectangle",
				DisallowedVariableTypes: ["Ask", "Variable"],
				Items: ["Rounded Rectangle", "Ellipse", "Icon", "Custom Image"],
				Key: "WFMaskType",
				Label: "Type"
			},
			{
				Class: "WFNumberFieldParameter",
				Description:
					"A radius to apply to each corner of the source image in pixels.",
				Key: "WFMaskCornerRadius",
				Label: "Corner Radius",
				Placeholder: "0",
				RequiredResources: [
					{
						WFParameterKey: "WFMaskType",
						WFParameterValue: "Rounded Rectangle",
						WFResourceClass: "WFParameterRelationResource"
					}
				],
				TextAlignment: "Right"
			},
			{
				Class: "WFVariablePickerParameter",
				Description:
					"An alpha mask to apply to the source image, where darker colors become transparent and lighter colors remain opaque. If the mask is sized differently than the source image, the mask is resized to match the dimensions of the source image.",
				Key: "WFCustomMaskImage",
				Label: "Custom Image",
				Placeholder: "Image",
				RequiredResources: [
					{
						WFParameterKey: "WFMaskType",
						WFParameterValue: "Custom Image",
						WFResourceClass: "WFParameterRelationResource"
					}
				]
			}
		],
		ResidentCompatible: true,
		Subcategory: "Image Editing"
	},
	"is.workflow.actions.image.resize": {
		ActionClass: "WFImageResizeAction",
		ActionKeywords: [
			"scale",
			"transform",
			"shrink",
			"stretch",
			"expand",
			"width",
			"height"
		],
		Category: "Media",
		Description: {
			DescriptionNote:
				"If the width or height is not set, that dimension is automatically calculated to maintain the original image's aspect ratio.",
			DescriptionSummary:
				"Scales images to a particular width and height."
		},
		IconName: "Image.png",
		Input: {
			Multiple: true,
			ParameterKey: "WFImage",
			Required: true,
			Types: ["UIImage"]
		},
		InputPassthrough: false,
		LastModifiedDate: "2015-08-20T07:00:00.000Z",
		Name: "Resize Image",
		Output: {
			Multiple: true,
			OutputName: "Resized Image",
			Types: ["UIImage"]
		},
		ParameterSummary:
			"Resize ${WFImage} to ${WFImageResizeWidth}x${WFImageResizeHeight}",
		Parameters: [
			{
				Class: "WFNumberFieldParameter",
				DefaultValue: 640,
				Key: "WFImageResizeWidth",
				Label: "Width",
				Placeholder: "Auto Width",
				TextAlignment: "Right"
			},
			{
				Class: "WFNumberFieldParameter",
				Key: "WFImageResizeHeight",
				Label: "Height",
				Placeholder: "Auto Height",
				TextAlignment: "Right"
			},
			{
				Class: "WFVariablePickerParameter",
				Key: "WFImage",
				Label: "Image",
				Placeholder: "Image"
			}
		],
		ResidentCompatible: true,
		Subcategory: "Image Editing"
	},
	"is.workflow.actions.image.rotate": {
		ActionClass: "WFImageRotateAction",
		ActionKeywords: [
			"portrait",
			"landscape",
			"degrees",
			"rotation",
			"orientation"
		],
		Category: "Media",
		Description: {
			DescriptionSummary:
				"Turns an image clockwise by a particular number of degrees."
		},
		IconName: "Image.png",
		Input: {
			Multiple: true,
			ParameterKey: "WFImage",
			Required: true,
			Types: ["UIImage"]
		},
		InputPassthrough: false,
		LastModifiedDate: "2015-08-20T07:00:00.000Z",
		Name: "Rotate Image",
		Output: {
			Multiple: true,
			OutputName: "Rotated Image",
			Types: ["UIImage"]
		},
		ParameterSummary: "Rotate ${WFImage} by ${WFImageRotateAmount} degrees",
		Parameters: [
			{
				AllowsDecimalNumbers: true,
				Class: "WFNumberFieldParameter",
				DefaultValue: 90,
				Key: "WFImageRotateAmount",
				Label: "Degrees",
				Placeholder: "90",
				TextAlignment: "Right"
			},
			{
				Class: "WFVariablePickerParameter",
				Key: "WFImage",
				Label: "Image",
				Placeholder: "Image"
			}
		],
		ResidentCompatible: true,
		Subcategory: "Image Editing",
		SuggestedNever: true
	},
	"is.workflow.actions.imgur.upload": {
		ActionClass: "WFImgurUploadAction",
		ActionKeywords: ["image", "reddit", "album", "photo"],
		AppIdentifier: "imgurmobile",
		Category: "Media",
		CreationDate: "2015-05-03T05:00:00.000Z",
		Description: {
			DescriptionNote: "Powered by Imgur (imgur.com)",
			DescriptionSummary: "Uploads the input to Imgur."
		},
		Input: {
			Multiple: true,
			ParameterKey: "WFInput",
			Required: true,
			Types: ["WFImageContentItem"]
		},
		Name: "Upload to Imgur",
		Output: {
			Multiple: true,
			OutputName: "Imgur URLs",
			Types: ["NSURL"]
		},
		ParameterSummary: "Upload ${WFInput}",
		Parameters: [
			{
				Class: "WFVariablePickerParameter",
				Key: "WFInput",
				Label: "Images",
				Placeholder: "Images"
			},
			{
				Class: "WFSwitchParameter",
				DefaultValue: true,
				Key: "WFImgurAnonymous",
				Label: "Upload Anonymously"
			},
			{
				Class: "WFSwitchParameter",
				Description:
					"If enabled, the action will return a link to the image, and not its Imgur page.",
				Key: "WFImgurDirectLink",
				Label: "Direct Link",
				RequiredResources: [
					{
						WFParameterKey: "WFImgurAlbum",
						WFParameterValue: false,
						WFResourceClass: "WFParameterRelationResource"
					}
				]
			},
			{
				Class: "WFSwitchParameter",
				DefaultValue: false,
				Description:
					"If enabled, the input images will be grouped into an album. Otherwise, the individual links will be returned.",
				Key: "WFImgurAlbum",
				Label: "Create Album"
			},
			{
				Class: "WFEnumerationParameter",
				DefaultValue: "Blog",
				Items: ["Blog", "Grid", "Horizontal", "Vertical"],
				Key: "WFImgurAlbumLayout",
				Label: "Album Layout",
				RequiredResources: [
					{
						WFParameterKey: "WFImgurAlbum",
						WFParameterValue: true,
						WFResourceClass: "WFParameterRelationResource"
					}
				]
			},
			{
				Class: "WFEnumerationParameter",
				DefaultValue: "Hidden",
				Items: ["Public", "Hidden", "Secret"],
				Key: "WFImgurAlbumPrivacy",
				Label: "Album Privacy",
				RequiredResources: [
					{
						WFParameterKey: "WFImgurAlbum",
						WFParameterValue: true,
						WFResourceClass: "WFParameterRelationResource"
					}
				]
			},
			{
				Class: "WFTextInputParameter",
				Key: "WFImgurTitle",
				Label: "Title",
				Placeholder: "optional",
				TextAlignment: "Right"
			},
			{
				Class: "WFTextInputParameter",
				Key: "WFImgurDescription",
				Label: "Description",
				Multiline: true,
				Placeholder: "Description"
			}
		],
		RequiredResources: [
			{
				RequiredResources: [
					{
						WFParameterKey: "WFImgurAnonymous",
						WFParameterValue: false,
						WFResourceClass: "WFParameterRelationResource"
					}
				],
				WFAccountClass: "WFImgurAccount",
				WFResourceClass: "WFAccountAccessResource"
			}
		]
	},
	"is.workflow.actions.instapaper.add": {
		ActionClass: "WFInstapaperAddAction",
		AppIdentifier: "com.marcoarment.instapaperpro",
		Category: "Web",
		CreationDate: "2015-01-11T06:00:00.000Z",
		Description: {
			DescriptionSummary: "Adds the input to Instapaper."
		},
		Input: {
			Multiple: true,
			ParameterKey: "WFInputURL",
			Required: true,
			Types: ["WFURLContentItem"]
		},
		InputPassthrough: true,
		Name: "Add to Instapaper",
		ParameterSummary: "Add ${WFInputURL}",
		Parameters: [
			{
				AlwaysShowsButton: true,
				Class: "WFDynamicEnumerationParameter",
				Description:
					"This action will save your input to the specified folder. Leaving this empty will save the input to Instapaper's Home folder.",
				Key: "WFInstapaperFolder",
				Label: "Folder",
				NoneLabel: "None"
			},
			{
				AutocapitalizationType: "None",
				Class: "WFTextInputParameter",
				DisableAutocorrection: true,
				Key: "WFInputURL",
				KeyboardType: "URL",
				Label: "URL",
				Placeholder: "URL",
				TextContentType: "URL"
			}
		],
		RequiredResources: [
			"WFInstapaperAccessResource",
			"WFMainThreadResource"
		],
		ShortName: "Add"
	},
	"is.workflow.actions.instapaper.get": {
		ActionClass: "WFInstapaperGetAction",
		AppIdentifier: "com.marcoarment.instapaperpro",
		Category: "Web",
		CreationDate: "2015-04-23T05:00:00.000Z",
		Description: {
			DescriptionSummary:
				"Gets the contents of a folder in Instapaper. Requires Instapaper Premium."
		},
		Name: "Get Instapaper Bookmarks",
		Output: {
			Multiple: true,
			OutputName: "Instapaper Bookmarks",
			Types: ["WFURLContentItem"]
		},
		ParameterSummary: "Get ${WFBookmarkCount} from ${WFInstapaperFolder}",
		Parameters: [
			{
				AlwaysShowsButton: true,
				Class: "WFDynamicEnumerationParameter",
				Description:
					"The folder to get bookmarks from. Leaving this empty will get items from Instapaper's Home folder.",
				Key: "WFInstapaperFolder",
				Label: "Folder",
				NoneLabel: "None"
			},
			{
				Class: "WFStepperParameter",
				DefaultValue: 5,
				Key: "WFBookmarkCount",
				StepperDescription: "Number of Bookmarks",
				StepperNoun: "Bookmark",
				StepperPluralNoun: "Bookmarks",
				StepperPrefix: "Get"
			}
		],
		RequiredResources: ["WFInstapaperAccessResource"],
		ShortName: "Get Bookmarks"
	},
	"is.workflow.actions.lightroom.import": {
		ActionClass: "WFImportToLightroomAction",
		ActionKeywords: [],
		AppIdentifier: "com.adobe.lrmobile",
		Category: "Media",
		Description: {
			DescriptionSummary:
				"Imports the photos passed as input into Lightroom"
		},
		Input: {
			Multiple: true,
			ParameterKey: "WFInput",
			Required: true,
			Types: ["WFPhotoMediaContentItem"]
		},
		InputPassthrough: true,
		IntentName: "THImportIntent",
		Name: "Import to Lightroom",
		ParameterSummary: "Import ${WFInput} to Lightroom",
		Parameters: [
			{
				Class: "WFSwitchParameter",
				DefaultValue: false,
				Key: "applyPreset",
				Label: "Apply Preset"
			},
			{
				AlwaysShowsButton: true,
				Class: "WFEnumerationParameter",
				DefaultValue: "Color",
				DisallowedVariableTypes: ["Variable"],
				DoNotLocalizeValues: true,
				Items: [
					"B&W",
					"Color",
					"Creative",
					"Curve",
					"Grain",
					"Sharpening",
					"Vignetting"
				],
				Key: "presetGroup",
				Label: "Preset Group",
				RequiredResources: [
					{
						WFParameterKey: "applyPreset",
						WFParameterValue: true,
						WFResourceClass: "WFParameterRelationResource"
					}
				]
			},
			{
				AlwaysShowsButton: true,
				Class: "WFLightroomPresetPickerParameter",
				DoNotLocalizeValues: true,
				Key: "preset",
				Label: "Preset",
				PresetGroupKey: "presetGroup",
				RequiredResources: [
					{
						WFParameterKey: "applyPreset",
						WFParameterValue: true,
						WFResourceClass: "WFParameterRelationResource"
					},
					{
						WFParameterKey: "presetGroup",
						WFParameterRelation: "??",
						WFResourceClass: "WFParameterRelationResource"
					}
				]
			},
			{
				Class: "WFVariablePickerParameter",
				Key: "WFInput",
				Label: "Photos",
				Placeholder: "Photos"
			}
		]
	},
	"is.workflow.actions.list": {
		ActionClass: "WFListAction",
		ActionKeywords: ["array"],
		Category: "Scripting",
		Constructor: true,
		Description: {
			DescriptionNote:
				"If you specify a variable, the contents of that variable will be included in the list.",
			DescriptionSummary:
				"Allows you to specify a list of items to be passed to the next action."
		},
		IconName: "Scripting.png",
		Name: "List",
		Output: {
			Multiple: true,
			OutputName: "List",
			Types: ["WFContentItem"]
		},
		Parameters: [
			{
				Class: "WFContentArrayParameter",
				DefaultValue: ["One", "Two"],
				Key: "WFItems",
				Label: "Items"
			}
		],
		ResidentCompatible: true,
		Subcategory: "Lists",
		SuggestedNever: true
	},
	"is.workflow.actions.location": {
		ActionClass: "WFLocationAction",
		ActionKeywords: [
			"maps",
			"search",
			"query",
			"place",
			"location",
			"find"
		],
		Category: "Location",
		Constructor: true,
		Description: {
			DescriptionSummary:
				"Passes the specified location to the next action."
		},
		IconName: "Location",
		InputPassthrough: false,
		Name: "Location",
		Output: {
			Multiple: false,
			OutputName: "Location",
			Types: ["WFLocationContentItem"]
		},
		ParameterSummary: "${WFLocation}",
		Parameters: [
			{
				Class: "WFLocationParameter",
				Key: "WFLocation",
				Label: "Location"
			}
		],
		RequiredResources: [
			{
				RequiredResources: [
					{
						WFParameterKey: "WFLocation",
						WFParameterValue: {
							isCurrentLocation: true
						},
						WFResourceClass: "WFParameterRelationResource"
					}
				],
				WFResourceClass: "WFLocationAccessResource"
			}
		],
		ResidentCompatible: true
	},
	"is.workflow.actions.lowpowermode.set": {
		ACECommandClass: "SASettingSetPowerSavingMode",
		ACESettingValueKey: "OnValue",
		ActionClass: "WFACESetSettingAction",
		ActionKeywords: ["battery", "life", "charge"],
		Category: "Scripting",
		Description: {
			DescriptionSummary: "Sets the device’s Low Power Mode to on or off."
		},
		IconName: "Battery.png",
		InputPassthrough: true,
		Name: "Set Low Power Mode",
		ParameterSummary: "Turn Low Power Mode ${OnValue}",
		Parameters: [
			{
				Class: "WFSwitchParameter",
				DefaultValue: true,
				Key: "OnValue",
				Label: "Low Power Mode"
			}
		],
		RequiredResources: [
			"WFSiriAccessResource",
			{
				WFDeviceAttributes: {
					WFDeviceAttributeIdiom: "Phone"
				},
				WFResourceClass: "WFDeviceAttributesResource"
			}
		],
		Subcategory: "Device",
		UnsupportedEnvironments: ["WatchOS"]
	},
	"is.workflow.actions.makegif": {
		ActionClass: "WFMakeGIFAction",
		ActionKeywords: ["animate", "make", "generate", "gif"],
		Category: "Media",
		Description: {
			DescriptionResult: "An animated GIF",
			DescriptionSummary:
				"Creates an animated GIF from the images or video passed into the action."
		},
		IconName: "GIF.png",
		Input: {
			Multiple: true,
			ParameterKey: "WFInput",
			Required: true,
			Types: ["UIImage", "public.mpeg-4"]
		},
		InputPassthrough: false,
		LastModifiedDate: "2015-02-03T08:00:00.000Z",
		Name: "Make GIF",
		Output: {
			Multiple: false,
			OutputName: "GIF",
			Types: ["com.compuserve.gif"]
		},
		ParameterSummary: "Make GIF from ${WFInput}",
		Parameters: [
			{
				AllowsDecimalNumbers: true,
				Class: "WFNumberFieldParameter",
				DefaultValue: 0.2,
				Key: "WFMakeGIFActionDelayTime",
				Label: "Seconds Per Photo",
				Placeholder: "0.2",
				TextAlignment: "Right"
			},
			{
				Class: "WFSwitchParameter",
				DefaultValue: true,
				Key: "WFMakeGIFActionLoopEnabled",
				Label: "Loop Forever"
			},
			{
				Class: "WFStepperParameter",
				Key: "WFMakeGIFActionLoopCount",
				RequiredResources: [
					{
						WFParameterKey: "WFMakeGIFActionLoopEnabled",
						WFParameterValue: false,
						WFResourceClass: "WFParameterRelationResource"
					}
				],
				StepperDescription: "Number of Loops",
				StepperNoun: "Time",
				StepperPluralNoun: "Times",
				StepperPrefix: "Loop"
			},
			{
				Class: "WFSwitchParameter",
				DefaultValue: true,
				Key: "WFMakeGIFActionAutoSize",
				Label: "Auto Size"
			},
			{
				Class: "WFNumberFieldParameter",
				Key: "WFMakeGIFActionManualSizeWidth",
				Label: "Width",
				Placeholder: "500",
				RequiredResources: [
					{
						WFParameterKey: "WFMakeGIFActionAutoSize",
						WFParameterValue: false,
						WFResourceClass: "WFParameterRelationResource"
					}
				],
				TextAlignment: "Right"
			},
			{
				Class: "WFNumberFieldParameter",
				Key: "WFMakeGIFActionManualSizeHeight",
				Label: "Height",
				Placeholder: "500",
				RequiredResources: [
					{
						WFParameterKey: "WFMakeGIFActionAutoSize",
						WFParameterValue: false,
						WFResourceClass: "WFParameterRelationResource"
					}
				],
				TextAlignment: "Right"
			},
			{
				Class: "WFVariablePickerParameter",
				Key: "WFInput",
				Label: "Content",
				Placeholder: "Content"
			}
		],
		ResidentCompatible: true,
		Subcategory: "GIFs"
	},
	"is.workflow.actions.makepdf": {
		ActionClass: "WFMakePDFAction",
		ActionKeywords: ["make", "generate", "pdf", "print"],
		Category: "Documents",
		Description: {
			DescriptionSummary:
				"Makes a PDF out of the input. The resulting PDF can optionally include a quarter-inch margin for better printing."
		},
		IconName: "PDF.png",
		Input: {
			Multiple: true,
			ParameterKey: "WFInput",
			Required: true,
			Types: ["WFContentItem"]
		},
		LastModifiedDate: "2015-11-24T06:00:00.000Z",
		Name: "Make PDF",
		Output: {
			Multiple: false,
			OutputName: "PDF",
			Types: ["WFPDFContentItem"]
		},
		ParameterSummary: "Make PDF from ${WFInput}",
		Parameters: [
			{
				Class: "WFSwitchParameter",
				DefaultValue: false,
				Key: "WFPDFIncludeMargin",
				Label: "Include Margin"
			},
			{
				Class: "WFEnumerationParameter",
				DefaultValue: "All Pages",
				Items: ["All Pages", "Single Page", "Page Range"],
				Key: "WFPDFIncludedPages",
				Label: "Include"
			},
			{
				AllowsDecimalNumbers: true,
				Class: "WFNumberFieldParameter",
				Key: "WFPDFSinglePage",
				Label: "Page #",
				Placeholder: "1",
				RequiredResources: [
					{
						WFParameterKey: "WFPDFIncludedPages",
						WFParameterValue: "Single Page",
						WFResourceClass: "WFParameterRelationResource"
					}
				],
				TextAlignment: "Right"
			},
			{
				AllowsDecimalNumbers: true,
				Class: "WFNumberFieldParameter",
				Key: "WFPDFPageRangeStart",
				Label: "Start Page #",
				Placeholder: "1",
				RequiredResources: [
					{
						WFParameterKey: "WFPDFIncludedPages",
						WFParameterValue: "Page Range",
						WFResourceClass: "WFParameterRelationResource"
					}
				],
				TextAlignment: "Right"
			},
			{
				AllowsDecimalNumbers: true,
				Class: "WFNumberFieldParameter",
				Key: "WFPDFPageRangeEnd",
				Label: "End Page #",
				Placeholder: "3",
				RequiredResources: [
					{
						WFParameterKey: "WFPDFIncludedPages",
						WFParameterValue: "Page Range",
						WFResourceClass: "WFParameterRelationResource"
					}
				],
				TextAlignment: "Right"
			},
			{
				Class: "WFVariablePickerParameter",
				Key: "WFInput",
				Label: "Input",
				Placeholder: "Input"
			}
		],
		ResidentCompatible: true,
		Subcategory: "Printing",
		UnsupportedEnvironments: ["MemoryConstrained"]
	},
	"is.workflow.actions.makevideofromgif": {
		ActionClass: "WFMakeVideoFromGIFAction",
		ActionKeywords: ["video", "gif", "convert", "make"],
		Category: "Media",
		CreationDate: "2015-02-03T08:00:00.000Z",
		Description: {
			DescriptionInput: "An animated GIF",
			DescriptionResult: "A video",
			DescriptionSummary: "Converts an animated GIF into a video."
		},
		IconName: "GIF.png",
		Input: {
			Multiple: false,
			ParameterKey: "WFInputGIF",
			Required: true,
			Types: ["com.compuserve.gif"]
		},
		InputPassthrough: false,
		Name: "Make Video from GIF",
		Output: {
			Multiple: false,
			OutputName: "Video",
			Types: ["public.mpeg-4"]
		},
		ParameterSummary: "Make video from GIF ${WFInputGIF}",
		Parameters: [
			{
				Class: "WFStepperParameter",
				DefaultValue: 1,
				Key: "WFMakeVideoFromGIFActionLoopCount",
				StepperDescription: "Number of Loops",
				StepperNoun: "Time",
				StepperPluralNoun: "Times",
				StepperPrefix: "Loop"
			},
			{
				Class: "WFVariablePickerParameter",
				Key: "WFInputGIF",
				Label: "Image",
				Placeholder: "Image"
			}
		],
		ResidentCompatible: true,
		ShortName: "Make Video",
		Subcategory: "GIFs",
		SuggestedNever: true
	},
	"is.workflow.actions.makezip": {
		ActionClass: "WFMakeArchiveAction",
		ActionKeywords: ["make", "generate", "gzip"],
		Category: "Documents",
		Description: {
			DescriptionResult: "Archive",
			DescriptionSummary:
				"Makes an archive out of the files passed as input. Supports creating zip, tar.gz, tar.bz2, tar.xz, tar, gzip, cpio, or iso archives."
		},
		IconName: "Documents.png",
		Input: {
			Multiple: true,
			ParameterKey: "WFInput",
			Required: true,
			Types: ["WFContentItem"]
		},
		LastModifiedDate: "2016-09-23T05:00:00.000Z",
		Name: "Make Archive",
		Output: {
			Multiple: false,
			OutputName: "Archive",
			Types: ["WFGenericFileContentItem"]
		},
		ParameterSummary: "Make ${WFArchiveFormat} archive from ${WFInput}",
		Parameters: [
			{
				Class: "WFTextInputParameter",
				Key: "WFZIPName",
				Label: "Archive Name",
				Placeholder: "optional",
				TextAlignment: "Right"
			},
			{
				Class: "WFArchiveFormatParameter",
				Key: "WFArchiveFormat",
				Label: "Format"
			},
			{
				Class: "WFVariablePickerParameter",
				Key: "WFInput",
				Label: "Input",
				Placeholder: "Input"
			}
		],
		ResidentCompatible: true,
		Subcategory: "Archives"
	},
	"is.workflow.actions.math": {
		ActionClass: "WFMathAction",
		ActionKeywords: [
			"scientific",
			"math",
			"calculator",
			"number",
			"add",
			"addition",
			"subtract",
			"subtraction",
			"multiply",
			"multiplication",
			"times",
			"divide",
			"division",
			"modulus",
			"square",
			"squared",
			"exponent",
			"exponential",
			"power",
			"^",
			"ln",
			"log",
			"logarithm",
			"root",
			"sin",
			"cos",
			"tan",
			"sine",
			"cosine",
			"tangent",
			"trig",
			"abs",
			"absolute",
			"value",
			"factorial"
		],
		AppIdentifier: "com.apple.calculator",
		Attribution: "Math",
		Category: "Scripting",
		Description: {
			DescriptionSummary:
				"Performs a number operation on the input and returns the result."
		},
		Input: {
			Multiple: false,
			ParameterKey: "WFInput",
			Required: true,
			Types: ["NSDecimalNumber"]
		},
		LastModifiedDate: "2015-02-03T08:00:00.000Z",
		Name: "Calculate",
		Output: {
			Multiple: false,
			OutputName: "Calculation Result",
			Types: ["NSDecimalNumber"]
		},
		ParameterCollapsingBehavior: "Never",
		ParameterSummary: {
			"WFInput,WFMathOperation(...),WFScientificMathOperation(Modulus),WFScientificMathOperand":
				"${WFInput} ${WFMathOperation} ${WFScientificMathOperand}",
			"WFInput,WFMathOperation,WFMathOperand":
				"${WFInput} ${WFMathOperation} ${WFMathOperand}"
		},
		Parameters: [
			{
				AllowsDecimalNumbers: true,
				Class: "WFNumberFieldParameter",
				Key: "WFInput",
				Label: "Number",
				Placeholder: "Number"
			},
			{
				Class: "WFEnumerationParameter",
				DefaultValue: "+",
				Items: ["+", "-", "×", "÷", "…"],
				Key: "WFMathOperation",
				Label: "Operation"
			},
			{
				Class: "WFEnumerationParameter",
				Items: [
					"Modulus",
					"x^2",
					"x^3",
					"x^y",
					"e^x",
					"10^x",
					"ln(x)",
					"log(x)",
					"√x",
					"∛x",
					"x!",
					"sin(x)",
					"cos(x)",
					"tan(x)",
					"abs(x)"
				],
				Key: "WFScientificMathOperation",
				Label: "Scientific Operation",
				RequiredResources: [
					{
						WFParameterKey: "WFMathOperation",
						WFParameterValue: "…",
						WFResourceClass: "WFParameterRelationResource"
					}
				]
			},
			{
				AllowsDecimalNumbers: true,
				Class: "WFNumberFieldParameter",
				Key: "WFMathOperand",
				Label: "Operand",
				Placeholder: "Number",
				RequiredResources: [
					{
						WFParameterKey: "WFMathOperation",
						WFParameterRelation: "!=",
						WFParameterValue: "…",
						WFResourceClass: "WFParameterRelationResource"
					}
				],
				TextAlignment: "Right"
			},
			{
				AllowsDecimalNumbers: true,
				Class: "WFNumberFieldParameter",
				Key: "WFScientificMathOperand",
				Label: "Operand",
				Placeholder: "Number",
				RequiredResources: [
					{
						WFParameterKey: "WFMathOperation",
						WFParameterValue: "…",
						WFResourceClass: "WFParameterRelationResource"
					},
					{
						WFParameterKey: "WFScientificMathOperation",
						WFParameterValues: ["Modulus", "x^y"],
						WFResourceClass: "WFParameterRelationResource"
					}
				],
				TextAlignment: "Right"
			}
		],
		ResidentCompatible: true,
		Subcategory: "Math"
	},
	"is.workflow.actions.measurement.convert": {
		ActionClass: "WFMeasurementConvertAction",
		ActionKeywords: [
			"degrees",
			"distance",
			"pressure",
			"measure",
			"speed",
			"weather"
		],
		AppIdentifier: "com.apple.calculator",
		Attribution: "Measurement",
		Category: "Scripting",
		CreationDate: "2018-09-22T05:00:00.000Z",
		Description: {
			DescriptionSummary:
				"Converts the measurements passed into the action to the specified unit."
		},
		Input: {
			Multiple: false,
			ParameterKey: "WFInput",
			Required: true,
			Types: ["NSMeasurement"]
		},
		InputPassthrough: false,
		Name: "Convert Measurement",
		Output: {
			Multiple: false,
			OutputName: "Converted Measurement",
			Types: ["NSMeasurement"]
		},
		ParameterSummary: {
			"WFInput,WFMeasurementUnitType":
				"Convert ${WFInput} into ${WFMeasurementUnitType}",
			"WFInput,WFMeasurementUnitType,WFMeasurementUnit":
				"Convert ${WFInput} into ${WFMeasurementUnitType} in ${WFMeasurementUnit}"
		},
		Parameters: [
			{
				Class: "WFUnitTypePickerParameter",
				DefaultValue: "Length",
				DisallowedVariableTypes: ["Variable"],
				Key: "WFMeasurementUnitType",
				Label: "Type"
			},
			{
				AlwaysShowsButton: true,
				Class: "WFMeasurementUnitPickerParameter",
				Key: "WFMeasurementUnit",
				Label: "Unit",
				RequiredResources: [
					{
						WFParameterKey: "WFMeasurementUnitType",
						WFParameterRelation: "??",
						WFResourceClass: "WFParameterRelationResource"
					}
				],
				WFMeasurementUnitTypeKey: "WFMeasurementUnitType"
			},
			{
				Class: "WFVariablePickerParameter",
				Key: "WFInput",
				Label: "Measurement",
				Placeholder: "Measurement"
			}
		],
		ResidentCompatible: true,
		Subcategory: "Measurements"
	},
	"is.workflow.actions.measurement.create": {
		ActionClass: "WFMeasurementCreateAction",
		ActionKeywords: [
			"degrees",
			"distance",
			"pressure",
			"measure",
			"speed",
			"weather"
		],
		AppIdentifier: "com.apple.calculator",
		Attribution: "Measurement",
		Category: "Scripting",
		Constructor: true,
		CreationDate: "2018-09-22T05:00:00.000Z",
		Description: {
			DescriptionSummary:
				"Passes the specified measurement (including number and unit) to the next action."
		},
		InputPassthrough: false,
		Name: "Measurement",
		Output: {
			Multiple: false,
			OutputName: "Measurement",
			Types: ["NSMeasurement"]
		},
		ParameterSummary: "${WFMeasurementUnitType}\n${WFMeasurementUnit}",
		Parameters: [
			{
				Class: "WFUnitTypePickerParameter",
				DefaultValue: "Length",
				DisallowedVariableTypes: ["Variable"],
				Key: "WFMeasurementUnitType",
				Label: "Type"
			},
			{
				AllowsNegativeNumbers: true,
				Class: "WFUnitQuantityFieldParameter",
				Key: "WFMeasurementUnit",
				KeyboardType: "DecimalPad",
				Label: "Value",
				RequiredResources: [
					{
						WFParameterKey: "WFMeasurementUnitType",
						WFParameterRelation: "??",
						WFResourceClass: "WFParameterRelationResource"
					}
				],
				TextAlignment: "Right"
			}
		],
		ResidentCompatible: true,
		Subcategory: "Measurements"
	},
	"is.workflow.actions.nothing": {
		ActionClass: "WFNothingAction",
		ActionKeywords: ["nil", "nothing", "empty", "discard", "clear"],
		BlocksOutput: true,
		Category: "Scripting",
		Constructor: true,
		Description: {
			DescriptionSummary:
				"This action does nothing and produces no output. It is useful to separate blocks of actions, or to ensure that no input is passed to the next action."
		},
		IconName: "Scripting.png",
		InputPassthrough: false,
		Name: "Nothing",
		ParameterSummary: "Nothing",
		ResidentCompatible: true,
		Subcategory: "No-ops"
	},
	"is.workflow.actions.notification": {
		ActionClass: "WFNotificationAction",
		ActionKeywords: [
			"local",
			"notification",
			"show",
			"alert",
			"reminder",
			"push"
		],
		Attribution: "Notifications",
		Category: "Scripting",
		Description: {
			DescriptionInput:
				"An image or video to include in the notification",
			DescriptionSummary: "Displays a local notification."
		},
		IconName: "Notification.png",
		Input: {
			Multiple: true,
			ParameterKey: "WFInput",
			Required: false,
			Types: ["UIImage", "AVAsset"]
		},
		InputPassthrough: true,
		LastModifiedDate: "2016-09-10T07:00:00.000Z",
		Name: "Show Notification",
		ParameterSummary: "Show notification ${WFNotificationActionBody}",
		Parameters: [
			{
				Class: "WFTextInputParameter",
				DisallowedVariableTypes: ["Ask"],
				Key: "WFNotificationActionTitle",
				Label: "Title",
				Placeholder: "optional"
			},
			{
				Class: "WFTextInputParameter",
				DefaultValue: "Hello World",
				DisallowedVariableTypes: ["Ask"],
				Key: "WFNotificationActionBody",
				Label: "Body",
				Multiline: true,
				Placeholder: "Text"
			},
			{
				Class: "WFSwitchParameter",
				DefaultValue: true,
				Key: "WFNotificationActionSound",
				Label: "Play Sound"
			},
			{
				Class: "WFVariablePickerParameter",
				Key: "WFInput",
				Label: "Attachment",
				Placeholder: "Choose Variable"
			}
		],
		RequiredResources: [
			"WFMainThreadResource",
			"WFLocalNotificationAccessResource"
		],
		Subcategory: "Notification",
		UserInterfaces: ["UIKit", "UIKitWidget", "WatchKit", "Siri"]
	},
	"is.workflow.actions.number": {
		ActionClass: "WFNumberAction",
		ActionKeywords: ["decimal", "math"],
		AppIdentifier: "com.apple.calculator",
		Category: "Scripting",
		Constructor: true,
		Description: {
			DescriptionSummary: "Passes a number to the next action."
		},
		Name: "Number",
		Output: {
			Multiple: false,
			OutputName: "Number",
			Types: ["NSDecimalNumber"]
		},
		ParameterSummary: "${WFNumberActionNumber}",
		Parameters: [
			{
				AllowsDecimalNumbers: true,
				Class: "WFNumberFieldParameter",
				Key: "WFNumberActionNumber",
				Label: "Number",
				Placeholder: "42",
				TextAlignment: "Right"
			}
		],
		ResidentCompatible: true,
		Subcategory: "Numbers",
		SuggestedNever: true
	},
	"is.workflow.actions.number.random": {
		ActionClass: "WFRandomNumberAction",
		ActionKeywords: ["decimal", "math", "generate", "generator"],
		AppIdentifier: "com.apple.calculator",
		Attribution: "Math",
		Category: "Scripting",
		CreationDate: "2015-01-11T06:00:00.000Z",
		Description: {
			DescriptionSummary:
				"Passes a random number between the given minimum and maximum to the next action. The minimum and maximum numbers are included as possible results."
		},
		Name: "Random Number",
		Output: {
			Multiple: false,
			OutputName: "Random Number",
			Types: ["NSDecimalNumber"]
		},
		ParameterSummary:
			"Random number between ${WFRandomNumberMinimum} and ${WFRandomNumberMaximum}",
		Parameters: [
			{
				AllowsDecimalNumbers: true,
				Class: "WFNumberFieldParameter",
				Key: "WFRandomNumberMinimum",
				Label: "Minimum",
				Placeholder: "Minimum",
				TextAlignment: "Right"
			},
			{
				AllowsDecimalNumbers: true,
				Class: "WFNumberFieldParameter",
				Key: "WFRandomNumberMaximum",
				Label: "Maximum",
				Placeholder: "Maximum",
				TextAlignment: "Right"
			}
		],
		ResidentCompatible: true,
		Subcategory: "Numbers",
		SuggestedNever: true
	},
	"is.workflow.actions.openapp": {
		ActionClass: "WFOpenAppAction",
		ActionKeywords: ["launch", "run", "switch"],
		Category: "Scripting",
		Description: {
			DescriptionSummary: "Opens the specified app."
		},
		IconName: "Apps.png",
		InputPassthrough: true,
		Name: "Open App",
		ParameterSummary: "Open ${WFAppIdentifier}",
		Parameters: [
			{
				AppSearchType: "OpenApp",
				Class: "WFAppPickerParameter",
				Key: "WFAppIdentifier",
				Label: "App"
			},
			{
				Class: "WFTextInputParameter",
				Hidden: true,
				Key: "WFAppName"
			}
		],
		RequiredResources: ["WFURLOpenResource"],
		Subcategory: "Apps",
		SuggestedNever: true
	},
	"is.workflow.actions.openin": {
		ActionClass: "WFOpenInAction",
		ActionKeywords: [
			"open",
			"file",
			"document",
			"in",
			"app",
			"application",
			"uidocumentinteractioncontroller"
		],
		Category: "Documents",
		Description: {
			DescriptionSummary:
				"Opens the input as a file in the specified app."
		},
		IconName: "Apps.png",
		Input: {
			Multiple: false,
			ParameterKey: "WFInput",
			Required: true,
			Types: ["public.data"]
		},
		InputPassthrough: true,
		Name: "Open In...",
		ParameterCollapsingBehavior: "Never",
		ParameterSummary: {
			"WFInput,WFOpenInAskWhenRun(0),WFOpenInAppIdentifier":
				"Open ${WFInput} in ${WFOpenInAppIdentifier}",
			"WFInput,WFOpenInAskWhenRun(1)": "Open ${WFInput}"
		},
		Parameters: [
			{
				Class: "WFSwitchParameter",
				DefaultValue: true,
				Key: "WFOpenInAskWhenRun",
				Label: "Show Open In Menu"
			},
			{
				AppSearchType: "OpenIn",
				Class: "WFAppPickerParameter",
				Key: "WFOpenInAppIdentifier",
				Label: "App",
				RequiredResources: [
					{
						WFParameterKey: "WFOpenInAskWhenRun",
						WFParameterValue: false,
						WFResourceClass: "WFParameterRelationResource"
					}
				]
			},
			{
				Class: "WFTextInputParameter",
				Hidden: true,
				Key: "WFAppName"
			},
			{
				Class: "WFVariablePickerParameter",
				Key: "WFInput",
				Label: "File",
				Placeholder: "File"
			}
		],
		RequiredResources: ["WFUserInteractionResource"],
		Subcategory: "Files",
		UserInterfaces: ["UIKit", "UIKitWidget"]
	},
	"is.workflow.actions.openurl": {
		ActionClass: "WFOpenURLAction",
		ActionKeywords: [
			"URL",
			"web",
			"display",
			"site",
			"open",
			"show",
			"multiple"
		],
		AppIdentifier: "com.apple.mobilesafari",
		Category: "Web",
		Description: {
			DescriptionSummary: "Opens URLs passed into the action in Safari."
		},
		Input: {
			Multiple: true,
			ParameterKey: "WFInput",
			Required: true,
			Types: ["NSURL"]
		},
		InputPassthrough: true,
		IntentIdentifier:
			"sirikit.intents.custom.com.apple.mobilesafari.OpenURLsIntent",
		LastModifiedDate: "2015-12-14T08:00:00.000Z",
		Name: "Open URLs",
		ParameterSummary: "Open ${WFInput}",
		Parameters: [
			{
				AllowsMultipleValues: true,
				AutocapitalizationType: "None",
				Class: "WFTextInputParameter",
				DisableAutocorrection: true,
				Key: "WFInput",
				KeyboardType: "URL",
				Label: "URL",
				TextContentType: "URL"
			}
		],
		RequiredResources: ["WFURLOpenResource"],
		Subcategory: "Safari"
	},
	"is.workflow.actions.openxcallbackurl": {
		ActionClass: "WFOpenXCallbackURLAction",
		ActionKeywords: ["xcallback"],
		Category: "Scripting",
		Description: {
			DescriptionResult:
				"When the app that's opened calls back to Shortcuts using x-success, it may include parameters in the URL. These will be passed as output to the next action, as text if there is just one parameter, or as a dictionary if there are multiple (use Get Dictionary Value to access it).",
			DescriptionSummary:
				"Performs the specified x-callback-url action. The x-success, x-cancel, and x-error parameters will be added automatically."
		},
		IconName: "URL.png",
		Input: {
			Multiple: false,
			ParameterKey: "WFXCallbackURL",
			Required: true,
			Types: ["WFURLContentItem"]
		},
		LastModifiedDate: "2016-02-18T18:00:00.000Z",
		Name: "Open X-Callback URL",
		Output: {
			Multiple: false,
			OutputName: "X-Callback Result",
			Types: ["NSString", "NSDictionary"]
		},
		ParameterSummary: "Open ${WFXCallbackURL} with x-callback",
		Parameters: [
			{
				Class: "WFSwitchParameter",
				Description:
					"Turn this on if you want to open a callback URL that is not x-callback-url compliant and uses keys other than “x-success”, “x-error”, and “x-cancel”.",
				Key: "WFXCallbackCustomCallbackEnabled",
				Label: "Custom Callback"
			},
			{
				Class: "WFTextInputParameter",
				DefaultValue: "x-success",
				Key: "WFXCallbackCustomSuccessKey",
				KeyboardType: "URL",
				Label: "Success Key",
				RequiredResources: [
					{
						WFParameterKey: "WFXCallbackCustomCallbackEnabled",
						WFParameterValue: true,
						WFResourceClass: "WFParameterRelationResource"
					}
				]
			},
			{
				Class: "WFTextInputParameter",
				Key: "WFXCallbackCustomCancelKey",
				KeyboardType: "URL",
				Label: "Cancel Key",
				Placeholder: "optional",
				RequiredResources: [
					{
						WFParameterKey: "WFXCallbackCustomCallbackEnabled",
						WFParameterValue: true,
						WFResourceClass: "WFParameterRelationResource"
					}
				]
			},
			{
				Class: "WFTextInputParameter",
				Key: "WFXCallbackCustomErrorKey",
				KeyboardType: "URL",
				Label: "Error Key",
				Placeholder: "optional",
				RequiredResources: [
					{
						WFParameterKey: "WFXCallbackCustomCallbackEnabled",
						WFParameterValue: true,
						WFResourceClass: "WFParameterRelationResource"
					}
				]
			},
			{
				Class: "WFSwitchParameter",
				Description:
					"If enabled, Shortcuts will use a custom success callback URL. This is useful if the app you are calling uses placeholders in the x-success URL to pass output.",
				Key: "WFXCallbackCustomSuccessURLEnabled",
				Label: "Custom X-Success URL"
			},
			{
				Class: "WFTextInputParameter",
				DefaultValue: "shortcuts://callback",
				Description:
					"For example, you might use shortcuts://callback?result=[[output]]",
				Key: "WFXCallbackCustomSuccessURL",
				KeyboardType: "URL",
				Label: "X-Success URL",
				RequiredResources: [
					{
						WFParameterKey: "WFXCallbackCustomSuccessURLEnabled",
						WFParameterValue: true,
						WFResourceClass: "WFParameterRelationResource"
					}
				]
			},
			{
				AutocapitalizationType: "None",
				Class: "WFTextInputParameter",
				DisableAutocorrection: true,
				Key: "WFXCallbackURL",
				KeyboardType: "URL",
				Label: "X-Callback URL",
				Placeholder: "X-Callback URL",
				TextContentType: "URL"
			}
		],
		RequiredResources: ["WFURLOpenResource"],
		ShortName: "Open X-Callback",
		Subcategory: "X-Callback",
		UnsupportedEnvironments: ["Extension"]
	},
	"is.workflow.actions.overlayimageonimage": {
		ActionClass: "WFOverlayImageAction",
		ActionKeywords: ["picture", "edit", "editor"],
		Category: "Media",
		CreationDate: "2016-03-07T08:00:00.000Z",
		Description: {
			DescriptionInput: "Background images",
			DescriptionResult: "The combined images",
			DescriptionSummary: "Overlays an image on top of another image."
		},
		IconName: "Image.png",
		Input: {
			Multiple: true,
			ParameterKey: "WFInput",
			Required: true,
			Types: ["WFImageContentItem"]
		},
		InputPassthrough: false,
		Name: "Overlay Image",
		Output: {
			Multiple: true,
			OutputName: "Overlaid Image",
			Types: ["WFImageContentItem"]
		},
		ParameterSummary: "Overlay ${WFImage} on ${WFInput}",
		Parameters: [
			{
				Class: "WFVariablePickerParameter",
				Key: "WFImage",
				Label: "Image",
				Placeholder: "Image"
			},
			{
				Class: "WFVariablePickerParameter",
				Key: "WFInput",
				Label: "Image",
				Placeholder: "Image"
			},
			{
				Class: "WFSwitchParameter",
				DefaultValue: true,
				Key: "WFShouldShowImageEditor",
				Label: "Show Image Editor"
			},
			{
				Class: "WFEnumerationParameter",
				DefaultValue: "Center",
				Items: [
					"Center",
					"Top Left",
					"Top Right",
					"Bottom Left",
					"Bottom Right",
					"Custom"
				],
				Key: "WFImagePosition",
				Label: "Position",
				RequiredResources: [
					{
						WFParameterKey: "WFShouldShowImageEditor",
						WFParameterValue: false,
						WFResourceClass: "WFParameterRelationResource"
					}
				]
			},
			{
				Class: "WFNumberFieldParameter",
				Key: "WFImageWidth",
				Label: "Width",
				Placeholder: "Auto",
				RequiredResources: [
					{
						WFParameterKey: "WFShouldShowImageEditor",
						WFParameterValue: false,
						WFResourceClass: "WFParameterRelationResource"
					}
				],
				TextAlignment: "Right"
			},
			{
				Class: "WFNumberFieldParameter",
				Key: "WFImageHeight",
				Label: "Height",
				Placeholder: "Auto",
				RequiredResources: [
					{
						WFParameterKey: "WFShouldShowImageEditor",
						WFParameterValue: false,
						WFResourceClass: "WFParameterRelationResource"
					}
				],
				TextAlignment: "Right"
			},
			{
				AllowsDecimalNumbers: true,
				Class: "WFNumberFieldParameter",
				Key: "WFImageX",
				Label: "X Coordinate",
				Placeholder: "0",
				RequiredResources: [
					{
						WFParameterKey: "WFShouldShowImageEditor",
						WFParameterValue: false,
						WFResourceClass: "WFParameterRelationResource"
					},
					{
						WFParameterKey: "WFImagePosition",
						WFParameterValue: "Custom",
						WFResourceClass: "WFParameterRelationResource"
					}
				],
				TextAlignment: "Right"
			},
			{
				AllowsDecimalNumbers: true,
				Class: "WFNumberFieldParameter",
				Key: "WFImageY",
				Label: "Y Coordinate",
				Placeholder: "0",
				RequiredResources: [
					{
						WFParameterKey: "WFShouldShowImageEditor",
						WFParameterValue: false,
						WFResourceClass: "WFParameterRelationResource"
					},
					{
						WFParameterKey: "WFImagePosition",
						WFParameterValue: "Custom",
						WFResourceClass: "WFParameterRelationResource"
					}
				],
				TextAlignment: "Right"
			},
			{
				AllowsDecimalNumbers: true,
				Class: "WFNumberFieldParameter",
				DefaultValue: 0,
				Key: "WFRotation",
				Label: "Rotation (Degrees)",
				Placeholder: "0",
				RequiredResources: [
					{
						WFParameterKey: "WFShouldShowImageEditor",
						WFParameterValue: false,
						WFResourceClass: "WFParameterRelationResource"
					}
				],
				TextAlignment: "Right"
			},
			{
				Class: "WFNumberFieldParameter",
				DefaultValue: 100,
				Key: "WFOverlayImageOpacity",
				Label: "Opacity",
				Placeholder: "100%",
				RequiredResources: [
					{
						WFParameterKey: "WFShouldShowImageEditor",
						WFParameterValue: false,
						WFResourceClass: "WFParameterRelationResource"
					}
				],
				TextAlignment: "Right"
			}
		],
		RequiredResources: [
			{
				RequiredResources: [
					{
						WFParameterKey: "WFShouldShowImageEditor",
						WFParameterValue: true,
						WFResourceClass: "WFParameterRelationResource"
					}
				],
				WFResourceClass: "WFUserInteractionResource"
			}
		],
		Subcategory: "Image Editing",
		UnsupportedEnvironments: ["MemoryConstrained"],
		UserInterfaces: ["UIKit", "UIKitWidget"]
	},
	"is.workflow.actions.pausemusic": {
		ActionClass: "WFPlayPauseAction",
		ActionKeywords: [
			"pause",
			"play",
			"song",
			"podcast",
			"ipod",
			"track",
			"music",
			"itunes"
		],
		Attribution: "Now Playing",
		Category: "Media",
		Description: {
			DescriptionSummary: "Plays or pauses the currently playing media."
		},
		IconName: "PlayPause.png",
		InputPassthrough: true,
		Name: "Play/Pause",
		ParameterSummary: "${WFPlayPauseBehavior} on ${WFMediaRoute}",
		Parameters: [
			{
				Class: "WFEnumerationParameter",
				DefaultValue: "Play/Pause",
				Items: ["Play/Pause", "Play", "Pause"],
				Key: "WFPlayPauseBehavior"
			},
			{
				Class: "WFMediaRoutePickerParameter",
				DefaultValue: "Local",
				DisallowedVariableTypes: ["Variable"],
				Key: "WFMediaRoute",
				Label: "Device",
				RouteType: "Endpoint"
			}
		],
		RequiredResources: ["WFMainThreadResource"],
		Subcategory: "Playback"
	},
	"is.workflow.actions.phonenumber": {
		ActionClass: "WFPhoneNumberAction",
		ActionKeywords: [
			"phone",
			"number",
			"mobile",
			"home",
			"cellular",
			"telephone"
		],
		Category: "Contacts",
		Constructor: true,
		Description: {
			DescriptionSummary:
				"Passes the specified phone numbers to the next action."
		},
		IconName: "PhoneNumber.png",
		LastModifiedDate: "2015-01-11T06:00:00.000Z",
		Name: "Phone Number",
		Output: {
			Multiple: true,
			OutputName: "Phone Number",
			Types: ["WFPhoneNumber"]
		},
		Parameters: [
			{
				AllowsMultipleValues: true,
				Class: "WFPhoneNumberFieldParameter",
				Key: "WFPhoneNumber",
				Placeholder: "Type in a phone number"
			}
		],
		ResidentCompatible: true,
		Subcategory: "Phone"
	},
	"is.workflow.actions.pinboard.add": {
		ActionClass: "WFPinboardAddAction",
		ActionKeywords: ["URL", "web", "later", "save", "pinboard"],
		AppSection: "Pinboard",
		Attribution: "Pinboard",
		Category: "Web",
		CreationDate: "2015-01-11T06:00:00.000Z",
		Description: {
			DescriptionSummary:
				"Adds the URL passed into the action to your Pinboard."
		},
		IconName: "Pinboard.png",
		Input: {
			Multiple: false,
			ParameterKey: "WFPinboardURL",
			Required: true,
			Types: ["WFURLContentItem"]
		},
		InputPassthrough: true,
		Name: "Add to Pinboard",
		ParameterSummary: "Add ${WFPinboardURL}",
		Parameters: [
			{
				AutocapitalizationType: "Words",
				Class: "WFTextInputParameter",
				Key: "WFPinTitle",
				Label: "Title",
				Placeholder: "optional"
			},
			{
				AutocapitalizationType: "None",
				Class: "WFTextInputParameter",
				Key: "WFPinTags",
				Label: "Tags",
				Placeholder: "apple longread"
			},
			{
				Class: "WFSwitchParameter",
				DefaultValue: true,
				Key: "WFPinPublic",
				Label: "Public"
			},
			{
				Class: "WFSwitchParameter",
				DefaultValue: true,
				Key: "WFPinUnread",
				Label: "Unread"
			},
			{
				Class: "WFTextInputParameter",
				Key: "WFPinDescription",
				Label: "Description",
				Multiline: true,
				Placeholder: "Description"
			},
			{
				Class: "WFTextInputParameter",
				DisableAutocorrection: true,
				Key: "WFPinboardURL",
				KeyboardType: "URL",
				Label: "URL",
				TextContentType: "URL"
			}
		],
		RequiredResources: ["WFPinboardAccessResource"]
	},
	"is.workflow.actions.pinboard.get": {
		ActionClass: "WFPinboardGetAction",
		ActionKeywords: ["URL", "web", "later", "save", "pinboard"],
		AppSection: "Pinboard",
		Category: "Web",
		CreationDate: "2015-04-23T05:00:00.000Z",
		Description: {
			DescriptionSummary: "Gets bookmarks in your Pinboard account."
		},
		IconName: "Pinboard.png",
		Name: "Get Pinboard Bookmarks",
		Output: {
			Multiple: true,
			OutputName: "Pinboard Bookmarks",
			Types: ["WFURLContentItem"]
		},
		ParameterSummary: "Get ${WFBookmarkCount}",
		Parameters: [
			{
				AutocapitalizationType: "None",
				Class: "WFTextInputParameter",
				Description:
					"If specified, only items matching all of these tags will be returned. Supports a maximum of three tags.",
				Key: "WFPinTags",
				Label: "Tags",
				Placeholder: "apple longread"
			},
			{
				Class: "WFStepperParameter",
				DefaultValue: 5,
				Key: "WFBookmarkCount",
				StepperDescription: "Number of Bookmarks",
				StepperNoun: "Bookmark",
				StepperPluralNoun: "Bookmarks",
				StepperPrefix: "Get"
			}
		],
		RequiredResources: ["WFPinboardAccessResource"],
		ShortName: "Get Bookmarks"
	},
	"is.workflow.actions.playmusic": {
		ActionClass: "WFPlayMusicAction",
		ActionKeywords: [
			"play",
			"song",
			"ipod",
			"track",
			"music",
			"itunes",
			"library"
		],
		AppIdentifier: "com.apple.Music",
		Category: "Media",
		Description: {
			DescriptionInput: "The music to be played",
			DescriptionSummary: "Plays music using the Music app."
		},
		Input: {
			Multiple: true,
			ParameterKey: "WFMediaItems",
			Types: ["MPMediaItem", "WFMediaItemCollectionContentItem"]
		},
		InputPassthrough: true,
		Name: "Play Music",
		ParameterSummary: "Play ${WFMediaItems}",
		Parameters: [
			{
				AlwaysShowsButton: true,
				Class: "WFMediaPickerParameter",
				Description: "Selects music to start playing.",
				Key: "WFMediaItems",
				Label: "Music"
			},
			{
				Class: "WFEnumerationParameter",
				Items: ["Off", "Songs"],
				Key: "WFPlayMusicActionShuffle",
				Label: "Shuffle"
			},
			{
				Class: "WFEnumerationParameter",
				Items: ["None", "One", "All"],
				Key: "WFPlayMusicActionRepeat",
				Label: "Repeat"
			}
		],
		RequiredResources: [
			"WFAppleMusicAccessResource",
			"WFMainThreadResource"
		],
		Subcategory: "Music"
	},
	"is.workflow.actions.playpodcast": {
		ActionClass: "WFPlayPodcastAction",
		ActionKeywords: ["play", "podcast", "show", "library"],
		AppIdentifier: "com.apple.podcasts",
		CreationDate: "Feb 1, 2019 at 10:00:00 PM",
		Description: {
			DescriptionInput: "The podcast to be played",
			DescriptionSummary: "Plays a podcast using the Podcasts app."
		},
		Input: {
			Multiple: true,
			ParameterKey: "WFPodcastShow",
			Types: ["WFiTunesProductContentItem", "WFPodcastEpisodeContentItem"]
		},
		InputPassthrough: true,
		Name: "Play Podcast",
		ParameterSummary: "Play ${WFPodcastShow}",
		Parameters: [
			{
				Class: "WFPodcastPickerParameter",
				Key: "WFPodcastShow",
				Label: "Podcast"
			}
		],
		RequiredResources: ["WFPodcastsAccessResource"]
	},
	"is.workflow.actions.playsound": {
		ActionClass: "WFPlaySoundAction",
		ActionKeywords: ["notification", "audio", "music"],
		Category: "Scripting",
		Description: {
			DescriptionSummary:
				"Plays the audio file passed as input, or a default notification sound if no audio file was passed."
		},
		IconName: "Sound.png",
		Input: {
			Multiple: false,
			ParameterKey: "WFInput",
			Required: false,
			Types: ["AVAsset"]
		},
		InputPassthrough: true,
		LastModifiedDate: "2015-11-24T06:00:00.000Z",
		Name: "Play Sound",
		ParameterSummary: "Play sound",
		Parameters: [
			{
				Class: "WFVariablePickerParameter",
				Key: "WFInput",
				Label: "Sound File",
				Placeholder: "Choose Variable"
			}
		],
		Subcategory: "Notification"
	},
	"is.workflow.actions.pocket.add": {
		ActionClass: "WFPocketAddAction",
		AppIdentifier: "com.ideashower.ReadItLaterPro",
		Category: "Web",
		Description: {
			DescriptionSummary: "Adds the input to Pocket."
		},
		Input: {
			Multiple: true,
			ParameterKey: "WFInputURL",
			Required: true,
			Types: ["WFURLContentItem"]
		},
		InputPassthrough: true,
		Name: "Add to Pocket",
		ParameterSummary: "Add ${WFInputURL}",
		Parameters: [
			{
				Class: "WFTextInputParameter",
				Description:
					"A comma-separated list of tags to apply to the items added to Pocket.",
				Key: "WFPocketTags",
				Label: "Tags",
				Placeholder: "example, tags"
			},
			{
				AutocapitalizationType: "None",
				Class: "WFTextInputParameter",
				DisableAutocorrection: true,
				Key: "WFInputURL",
				KeyboardType: "URL",
				Label: "URL",
				Placeholder: "URL",
				TextContentType: "URL"
			}
		],
		RequiredResources: ["WFPocketAccessResource"]
	},
	"is.workflow.actions.pocket.get": {
		ActionClass: "WFPocketGetAction",
		AppIdentifier: "com.ideashower.ReadItLaterPro",
		Category: "Web",
		Description: {
			DescriptionSummary: "Returns items in your Pocket account."
		},
		Name: "Get Items from Pocket",
		Output: {
			Multiple: true,
			OutputName: "Items from Pocket",
			Types: ["NSURL"]
		},
		ParameterSummary: "Get ${WFPocketItemCount}",
		Parameters: [
			{
				Class: "WFStepperParameter",
				Key: "WFPocketItemCount",
				StepperDescription: "Number of Items",
				StepperNoun: "Item",
				StepperPluralNoun: "Items",
				StepperPrefix: "Get"
			},
			{
				Class: "WFEnumerationParameter",
				DefaultValue: "All",
				Items: ["Unread", "Archived", "All"],
				Key: "WFPocketItemState",
				Label: "Type"
			},
			{
				Class: "WFTextInputParameter",
				Description:
					"If specified, only items with titles or URLs matching this search will be returned.",
				Key: "WFPocketItemSearchTerm",
				Label: "Search",
				Placeholder: "optional",
				TextAlignment: "Right"
			},
			{
				Class: "WFTextInputParameter",
				Description:
					"If specified, only items matching this tag will be returned.",
				Key: "WFPocketItemSearchTags",
				Label: "Tag",
				Placeholder: "optional",
				TextAlignment: "Right"
			}
		],
		RequiredResources: ["WFPocketAccessResource"],
		ShortName: "Get Pocket Items"
	},
	"is.workflow.actions.podcasts.subscribe": {
		ActionClass: "WFSubscribeToPodcastAction",
		ActionKeywords: ["URL", "podcast", "show", "subscribe"],
		AppIdentifier: "com.apple.podcasts",
		Description: {
			DescriptionSummary:
				"Subscribes to podcasts or podcast feed URLs passed into the action."
		},
		Input: {
			Multiple: true,
			ParameterKey: "WFInput",
			Required: true,
			Types: ["WFURLContentItem", "WFiTunesProductContentItem"]
		},
		InputPassthrough: true,
		Name: "Subscribe to Podcast",
		ParameterSummary: "Subscribe to ${WFInput}",
		Parameters: [
			{
				AllowsMultipleValues: true,
				AutocapitalizationType: "None",
				Class: "WFTextInputParameter",
				DisableAutocorrection: true,
				Key: "WFInput",
				KeyboardType: "URL",
				Label: "Podcast URL",
				TextContentType: "URL"
			}
		],
		RequiredResources: ["WFPodcastsAccessResource"]
	},
	"is.workflow.actions.postonfacebook": {
		ActionClass: "WFSocialAction",
		AppIdentifier: "com.facebook.Facebook",
		ConvertsAnimatedImagesToVideo: true,
		ICActionIdentifier: "com.facebook.Facebook.ShareExtension"
	},
	"is.workflow.actions.previewdocument": {
		ActionClass: "WFQuickLookAction",
		ActionKeywords: [
			"preview",
			"show",
			"file",
			"document",
			"quicklook",
			"quick",
			"look"
		],
		Category: "Documents",
		Description: {
			DescriptionSummary: "Displays a preview of the input."
		},
		IconName: "Quick Look.png",
		Input: {
			Multiple: true,
			ParameterKey: "WFInput",
			Required: true,
			Types: ["public.data"]
		},
		InputPassthrough: true,
		Name: "Quick Look",
		ParameterSummary: "Show ${WFInput} in Quick Look",
		Parameters: [
			{
				Class: "WFVariablePickerParameter",
				Key: "WFInput",
				Label: "Input",
				Placeholder: "Input"
			},
			{
				Class: "WFSwitchParameter",
				Key: "WFQuickLookActionFullScreen",
				Label: "Full Screen",
				RequiredResources: [
					{
						WFDeviceAttributes: {
							WFDeviceAttributeIdiom: "Pad"
						},
						WFResourceClass: "WFDeviceAttributesResource"
					}
				]
			}
		],
		RequiredResources: ["WFUserInteractionResource"],
		Subcategory: "Previewing",
		UserInterfaces: ["WatchKit", "UIKit"]
	},
	"is.workflow.actions.print": {
		ActionClass: "WFPrintAction",
		ActionKeywords: ["pdf", "print", "printer", "airprint"],
		Category: "Documents",
		Description: {
			DescriptionSummary: "Prints the input using AirPrint."
		},
		IconName: "Print.png",
		Input: {
			Multiple: false,
			ParameterKey: "WFInput",
			Required: true,
			Types: ["UIPrintFormatter", "com.adobe.pdf"]
		},
		InputPassthrough: true,
		Name: "Print",
		ParameterSummary: "Print ${WFInput}",
		Parameters: [
			{
				Class: "WFVariablePickerParameter",
				Key: "WFInput",
				Label: "Input",
				Placeholder: "Input"
			}
		],
		RequiredResources: ["WFUserInteractionResource"],
		Subcategory: "Printing",
		UserInterfaces: ["UIKit"]
	},
	"is.workflow.actions.properties.appstore": {
		ActionClass: "WFContentItemPropertiesAction",
		AppIdentifier: "com.apple.AppStore",
		Category: "Media",
		CreationDate: "2016-03-15T07:00:00.000Z",
		Name: "Get Details of App Store App",
		ResidentCompatible: true,
		WFContentItemClass: "WFAppStoreAppContentItem",
		Parameters: [
			{
				Class: "WFEnumerationParameter",
				Key: "WFContentItemPropertyName",
				Label: "Get",
				Items: [
					"Content Rating",
					"Release Date",
					"# of Ratings (This Version)",
					"Price",
					"Supported Languages",
					"iPad Screenshot URLs",
					"Store URL",
					"Version",
					"Artist",
					"Description",
					"Supports Game Center",
					"Formatted Price",
					"Minimum OS Version",
					"Currency Code",
					"Screenshot URLs",
					"Rating",
					"Store ID",
					"Category",
					"Release Notes",
					"Artwork",
					"Artwork URL",
					"Name",
					"Rating (This Version)",
					"Is Universal",
					"Download Size",
					"Last Updated",
					"Supported Devices",
					"# of Ratings"
				]
			}
		]
	},
	"is.workflow.actions.properties.articles": {
		ActionClass: "WFContentItemPropertiesAction",
		AppIdentifier: "com.apple.mobilesafari",
		Category: "Web",
		CreationDate: "2015-02-13T08:00:00.000Z",
		Name: "Get Details of Article",
		Subcategory: "Articles",
		WFContentItemClass: "WFArticleContentItem",
		Parameters: [
			{
				Class: "WFEnumerationParameter",
				Key: "WFContentItemPropertyName",
				Label: "Get",
				Items: [
					"Name",
					"Title",
					"Published Date",
					"Author",
					"Number of Words",
					"Main Image URL",
					"URL",
					"Excerpt"
				]
			}
		]
	},
	"is.workflow.actions.properties.calendarevents": {
		ActionClass: "WFContentItemPropertiesAction",
		AppIdentifier: "com.apple.mobilecal",
		Category: "Calendar",
		CreationDate: "2015-01-22T08:00:00.000Z",
		Name: "Get Details of Calendar Events",
		ResidentCompatible: true,
		Subcategory: "Calendar",
		WFContentItemClass: "WFCalendarEventContentItem",
		Parameters: [
			{
				Class: "WFEnumerationParameter",
				Key: "WFContentItemPropertyName",
				Label: "Get",
				Items: [
					"Attendees",
					"Calendar",
					"Creation Date",
					"Duration",
					"File Extension",
					"File Size",
					"Has Alarms",
					"Is All Day",
					"Last Modified Date",
					"Location",
					"Name",
					"Notes",
					"Organizer",
					"Start Date",
					"Title",
					"URL"
				]
			}
		]
	},
	"is.workflow.actions.properties.contacts": {
		ActionClass: "WFContentItemPropertiesAction",
		AppIdentifier: "com.apple.MobileAddressBook",
		Category: "Contacts",
		CreationDate: "2015-01-22T08:00:00.000Z",
		Name: "Get Details of Contacts",
		ResidentCompatible: true,
		Subcategory: "Contacts",
		WFContentItemClass: "WFContactContentItem",
		Parameters: [
			{
				Class: "WFEnumerationParameter",
				Key: "WFContentItemPropertyName",
				Label: "Get",
				Items: [
					"Email Address",
					"Phonetic First Name",
					"Prefix",
					"URL",
					"Nickname",
					"Last Name",
					"Phone Number",
					"Has Photo",
					"File Size",
					"Creation Date",
					"Last Modified Date",
					"Middle Name",
					"Company",
					"Department",
					"Name",
					"Contact Photo",
					"First Name",
					"Phonetic Last Name",
					"File Extension",
					"Street Address",
					"Suffix",
					"Job Title",
					"Notes",
					"Birthday",
					"Group",
					"Phonetic Middle Name"
				]
			}
		]
	},
	"is.workflow.actions.properties.eventattendees": {
		ActionClass: "WFContentItemPropertiesAction",
		AppIdentifier: "com.apple.mobilecal",
		Category: "Calendar",
		CreationDate: "2015-01-22T08:00:00.000Z",
		Name: "Get Details of Event Attendees",
		Subcategory: "Event Attendees",
		WFContentItemClass: "WFEKParticipantContentItem",
		WatchCompatible: true,
		Parameters: [
			{
				Class: "_UndefinedCoercionClass",
				Key: "_UndefinedCoercion"
			}
		]
	},
	"is.workflow.actions.properties.files": {
		ActionClass: "WFContentItemPropertiesAction",
		Category: "Documents",
		CreationDate: "2015-01-22T08:00:00.000Z",
		IconName: "Documents.png",
		Input: {
			Types: ["public.data"]
		},
		Name: "Get Details of Files",
		ResidentCompatible: true,
		Subcategory: "Files",
		SuggestedNever: true,
		WFContentItemClass: "WFGenericFileContentItem",
		Parameters: [
			{
				Class: "WFEnumerationParameter",
				Key: "WFContentItemPropertyName",
				Label: "Get",
				Items: [
					"Creation Date",
					"File Size",
					"File Extension",
					"Last Modified Date",
					"Name"
				]
			}
		]
	},
	"is.workflow.actions.properties.health.quantity": {
		ActionClass: "WFContentItemPropertiesAction",
		AppIdentifier: "com.apple.Health",
		Category: "Health",
		CreationDate: "2015-06-19T07:00:00.000Z",
		Name: "Get Details of Health Sample",
		Subcategory: "Get",
		WFContentItemClass: "WFHKSampleContentItem",
		Parameters: [
			{
				Class: "_UndefinedCoercionClass",
				Key: "_UndefinedCoercion"
			}
		]
	},
	"is.workflow.actions.properties.images": {
		ActionClass: "WFContentItemPropertiesAction",
		ActionKeywords: ["photo", "video", "media"],
		Category: "Media",
		CreationDate: "2015-01-22T08:00:00.000Z",
		IconName: "Image.png",
		Input: {
			Types: [
				"WFPhotoMediaContentItem",
				"WFImageContentItem",
				"WFAVAssetContentItem"
			]
		},
		LastModifiedDate: "2015-12-14T08:00:00.000Z",
		Name: "Get Details of Images",
		ResidentCompatible: true,
		Subcategory: "Images",
		WFContentItemClass: "WFImageContentItem",
		Parameters: [
			{
				Class: "WFEnumerationParameter",
				Key: "WFContentItemPropertyName",
				Label: "Get",
				Items: [
					"Width",
					"Time Taken",
					"Is a Screenshot",
					"Media Type",
					"Height",
					"Location",
					"Orientation",
					"Date Taken",
					"Duration",
					"Camera Make",
					"Is Hidden",
					"Frame Rate",
					"File Extension",
					"Camera Model",
					"Is Favorite",
					"Creation Date",
					"Album",
					"Metadata Dictionary",
					"File Size",
					"Photo Type",
					"Last Modified Date",
					"Name"
				]
			}
		]
	},
	"is.workflow.actions.properties.itunesartist": {
		ActionClass: "WFContentItemPropertiesAction",
		AppIdentifier: "com.apple.MobileStore",
		Category: "Media",
		CreationDate: "2016-03-15T07:00:00.000Z",
		Name: "Get Details of iTunes Artist",
		ResidentCompatible: true,
		WFContentItemClass: "WFiTunesArtistContentItem",
		Parameters: [
			{
				Class: "_UndefinedCoercionClass",
				Key: "_UndefinedCoercion"
			}
		]
	},
	"is.workflow.actions.properties.itunesstore": {
		ActionClass: "WFContentItemPropertiesAction",
		AppIdentifier: "com.apple.MobileStore",
		Category: "Media",
		CreationDate: "2016-03-15T07:00:00.000Z",
		Name: "Get Details of iTunes Product",
		ResidentCompatible: true,
		WFContentItemClass: "WFiTunesProductContentItem",
		Parameters: [
			{
				Class: "WFEnumerationParameter",
				Key: "WFContentItemPropertyName",
				Label: "Get",
				Items: [
					"Currency Code",
					"Is Explicit",
					"Genre",
					"Store URL",
					"Name",
					"Release Date",
					"Price",
					"Artwork URL",
					"Streamable",
					"Store ID",
					"Artist",
					"Formatted Price",
					"Artwork",
					"Description",
					"Duration"
				]
			}
		]
	},
	"is.workflow.actions.properties.locations": {
		ActionClass: "WFContentItemPropertiesAction",
		ActionKeywords: ["geocode", "latitude", "longitude"],
		Category: "Location",
		CreationDate: "2015-01-22T08:00:00.000Z",
		IconName: "Location.png",
		Name: "Get Details of Locations",
		ResidentCompatible: true,
		WFContentItemClass: "WFLocationContentItem",
		Parameters: [
			{
				Class: "WFEnumerationParameter",
				Key: "WFContentItemPropertyName",
				Label: "Get",
				Items: [
					"Phone Number",
					"State",
					"Altitude",
					"Name",
					"Longitude",
					"Country",
					"City",
					"Street",
					"URL",
					"Latitude",
					"ZIP Code"
				]
			}
		]
	},
	"is.workflow.actions.properties.music": {
		ActionClass: "WFContentItemPropertiesAction",
		AppIdentifier: "com.apple.Music",
		Category: "Media",
		CreationDate: "2015-01-22T08:00:00.000Z",
		Input: {
			Types: ["WFMPMediaContentItem", "WFAVAssetContentItem"]
		},
		LastModifiedDate: "2016-05-23T07:00:00.000Z",
		Name: "Get Details of Music",
		Subcategory: "Music",
		WFContentItemClass: "WFMPMediaContentItem",
		WFContentItemDefaultProperty: "Artist",
		Parameters: [
			{
				Class: "WFEnumerationParameter",
				Key: "WFContentItemPropertyName",
				Label: "Get",
				Items: [
					"Last Played Date",
					"File Extension",
					"Release Date",
					"Genre",
					"Media Kind",
					"Name",
					"Artist",
					"Creation Date",
					"Composer",
					"Duration",
					"Disc #",
					"Last Modified Date",
					"Date Added",
					"Play Count",
					"Album Artwork",
					"Album Track #",
					"Has Album Artwork",
					"Rating",
					"Is Explicit",
					"Comments",
					"Skip Count",
					"File Size",
					"Lyrics",
					"Is Cloud Item",
					"Album Artist",
					"Album"
				]
			}
		]
	},
	"is.workflow.actions.properties.note": {
		ActionClass: "WFContentItemPropertiesAction",
		AppIdentifier: "com.apple.mobilenotes",
		Category: "Documents",
		CreationDate: "Aug 10, 2019 at 12:00:00 AM",
		Discoverable: "NO",
		Name: "Get Details of Note",
		WFContentItemClass: "WFNoteContentItem",
		Parameters: [
			{
				Class: "_UndefinedCoercionClass",
				Key: "_UndefinedCoercion"
			}
		]
	},
	"is.workflow.actions.properties.podcast": {
		ActionClass: "WFContentItemPropertiesAction",
		AppIdentifier: "com.apple.podcasts",
		Category: "Media",
		CreationDate: "Aug 9, 2019 at 12:00:00 AM",
		Name: "Get Details of Podcast",
		WFContentItemClass: "WFPodcastEpisodeContentItem",
		Parameters: [
			{
				Class: "_UndefinedCoercionClass",
				Key: "_UndefinedCoercion"
			}
		]
	},
	"is.workflow.actions.properties.reminders": {
		ActionClass: "WFContentItemPropertiesAction",
		AppIdentifier: "com.apple.reminders",
		Category: "Calendar",
		CreationDate: "2015-01-22T08:00:00.000Z",
		LastModifiedDate: "2016-05-23T07:00:00.000Z",
		Name: "Get Details of Reminders",
		Subcategory: "Reminders",
		WFContentItemClass: "WFReminderContentItem",
		WFContentItemDefaultProperty: "List",
		WatchCompatible: true,
		Parameters: [
			{
				Class: "_UndefinedCoercionClass",
				Key: "_UndefinedCoercion"
			}
		]
	},
	"is.workflow.actions.properties.safariwebpage": {
		ActionClass: "WFContentItemPropertiesAction",
		AppIdentifier: "com.apple.mobilesafari",
		Category: "Web",
		CreationDate: "2016-03-07T08:00:00.000Z",
		Description: {
			DescriptionNote:
				"Safari Webpage items are only available when running your shortcut as an Action Extension in Safari."
		},
		Name: "Get Details of Safari Webpage",
		Subcategory: "Safari",
		WFContentItemClass: "WFSafariWebPageContentItem",
		Parameters: [
			{
				Class: "WFEnumerationParameter",
				Key: "WFContentItemPropertyName",
				Label: "Get",
				Items: ["Name", "Page Contents", "Page URL", "Page Selection"]
			}
		]
	},
	"is.workflow.actions.properties.trello": {
		ActionClass: "WFContentItemPropertiesAction",
		AppIdentifier: "com.fogcreek.trello",
		Category: "Text",
		CreationDate: "2016-03-15T07:00:00.000Z",
		Input: {
			Multiple: true,
			Required: true,
			Types: [
				"WFTrelloBoardContentItem",
				"WFTrelloListContentItem",
				"WFTrelloCardContentItem"
			]
		},
		Name: "Get Details of Trello Item",
		RequiredResources: ["WFTrelloAccessResource"],
		WFContentItemClass: "WFTrelloItemContentItem",
		Parameters: [
			{
				Class: "_UndefinedCoercionClass",
				Key: "_UndefinedCoercion"
			}
		]
	},
	"is.workflow.actions.properties.ulysses.sheet": {
		ActionClass: "WFContentItemPropertiesAction",
		AppIdentifier: "com.soulmen.ulysses.pad",
		Category: "Documents",
		CreationDate: "2017-03-17T07:00:00.000Z",
		Input: {
			Multiple: true,
			Required: true,
			Types: ["WFUlyssesSheetContentItem"]
		},
		Name: "Get Details of Ulysses Sheet",
		WFContentItemClass: "WFUlyssesSheetContentItem",
		Parameters: [
			{
				Class: "_UndefinedCoercionClass",
				Key: "_UndefinedCoercion"
			}
		]
	},
	"is.workflow.actions.properties.weather.conditions": {
		ActionClass: "WFContentItemPropertiesAction",
		AppIdentifier: "com.apple.weather",
		Category: "Location",
		CreationDate: "2018-09-20T07:00:00.000Z",
		IconName: "Weather.png",
		Name: "Get Details of Weather Conditions",
		ResidentCompatible: true,
		Subcategory: "Weather",
		WFContentItemClass: "WFWeatherDataContentItem",
		Parameters: [
			{
				Class: "_UndefinedCoercionClass",
				Key: "_UndefinedCoercion"
			}
		]
	},
	"is.workflow.actions.readinglist": {
		ActionClass: "WFAddToReadingListAction",
		ActionKeywords: ["URL", "web", "later", "save", "reading", "list"],
		AppIdentifier: "com.apple.mobilesafari",
		Category: "Web",
		Description: {
			DescriptionSummary:
				"Adds URLs passed into the action to your reading list."
		},
		Input: {
			Multiple: true,
			ParameterKey: "WFURL",
			Required: true,
			Types: ["WFURLContentItem"]
		},
		InputPassthrough: true,
		Name: "Add to Reading List",
		ParameterSummary: "Add ${WFURL} to Reading List",
		Parameters: [
			{
				AllowsMultipleValues: true,
				AutocapitalizationType: "None",
				Class: "WFTextInputParameter",
				DisableAutocorrection: true,
				Key: "WFURL",
				KeyboardType: "URL",
				Label: "URL",
				Placeholder: "URL",
				TextContentType: "URL"
			}
		],
		RequiredResources: ["WFAddToReadingListAccessResource"],
		ShortName: "Read Later",
		Subcategory: "Safari"
	},
	"is.workflow.actions.recordaudio": {
		ActionClass: "WFRecordAudioAction",
		ActionKeywords: ["camera", "clip", "record"],
		Category: "Media",
		CreationDate: "2015-01-11T06:00:00.000Z",
		Description: {
			DescriptionSummary: "Uses the microphone to record audio."
		},
		IconName: "Microphone.png",
		InputPassthrough: false,
		LastModifiedDate: "2015-05-12T07:00:00.000Z",
		Name: "Record Audio",
		Output: {
			Multiple: false,
			OutputName: "Recorded Audio",
			Types: ["com.apple.m4a-audio"]
		},
		ParameterSummary: "Record audio",
		Parameters: [
			{
				Class: "WFEnumerationParameter",
				DefaultValue: "Normal",
				Description:
					"High-quality audio takes up a lot more space than normal audio, so stick with normal unless you really need it. Normal audio is returned as an M4A file (with AAC audio), while high-quality audio is returned in uncompressed WAV format.",
				Items: ["Normal", "Very High"],
				Key: "WFRecordingCompression",
				Label: "Audio Quality"
			},
			{
				Class: "WFEnumerationParameter",
				DefaultValue: "On Tap",
				Items: ["On Tap", "Immediately"],
				Key: "WFRecordingStart",
				Label: "Start Recording"
			},
			{
				Class: "WFEnumerationParameter",
				DefaultValue: "On Tap",
				Items: ["On Tap", "After Time"],
				Key: "WFRecordingEnd",
				Label: "Finish Recording"
			},
			{
				Class: "WFTimeIntervalParameter",
				Key: "WFRecordingTimeInterval",
				Label: "Duration",
				RequiredResources: [
					{
						WFParameterKey: "WFRecordingEnd",
						WFParameterValue: "After Time",
						WFResourceClass: "WFParameterRelationResource"
					}
				]
			}
		],
		RequiredResources: [
			"WFUserInteractionResource",
			"WFMicrophoneAccessResource"
		],
		Subcategory: "Audio",
		UnsupportedEnvironments: ["Extension"],
		UserInterfaces: ["UIKit", "WatchKit"]
	},
	"is.workflow.actions.reminders.showlist": {
		ActionClass: "WFShowRemindersListAction",
		ActionKeywords: ["task", "todo", "to-do"],
		AppIdentifier: "com.apple.reminders",
		Category: "Calendar",
		Description: {
			DescriptionSummary: "Shows the specified list in the Reminders app."
		},
		Name: "Show Reminders List",
		ParameterSummary: "Show ${WFList}",
		Parameters: [
			{
				Class: "WFCalendarPickerParameter",
				Description: "The list to show",
				EventKitEntityType: "Reminder",
				Key: "WFList",
				Label: "List"
			}
		],
		RequiredResources: ["WFReminderAccessResource"],
		Subcategory: "Reminders"
	},
	"is.workflow.actions.removeevents": {
		ActionClass: "WFRemoveCalendarItemsAction",
		ActionKeywords: ["calendar", "delete"],
		AppIdentifier: "com.apple.mobilecal",
		BlocksOutput: true,
		Category: "Calendar",
		CreationDate: "2015-01-11T06:00:00.000Z",
		Description: {
			DescriptionNote:
				"This is a destructive and permanent action. You will be asked to confirm before events are removed.",
			DescriptionSummary:
				"Removes all events passed into the action from the calendars they are contained in."
		},
		Input: {
			Multiple: true,
			ParameterKey: "WFInputEvents",
			Required: true,
			Types: ["EKEvent"]
		},
		InputPassthrough: false,
		Name: "Remove Events",
		ParameterSummary: "Remove ${WFInputEvents}",
		Parameters: [
			{
				Class: "WFSwitchParameter",
				DefaultValue: false,
				Description:
					"When enabled, any repeats of an event in the future are also removed.",
				Key: "WFCalendarIncludeFutureEvents",
				Label: "Include Future Events"
			},
			{
				Class: "WFVariablePickerParameter",
				Key: "WFInputEvents",
				Label: "Events",
				Placeholder: "Events"
			}
		],
		RequiredResources: [
			"WFCalendarAccessResource",
			"WFUserInteractionResource"
		],
		Subcategory: "Calendar",
		WFCalendarItemEntityType: "Event",
		WatchCompatible: true
	},
	"is.workflow.actions.removereminders": {
		ActionClass: "WFRemoveCalendarItemsAction",
		ActionKeywords: ["calendar", "delete"],
		AppIdentifier: "com.apple.reminders",
		BlocksOutput: true,
		Category: "Calendar",
		CreationDate: "2015-01-11T06:00:00.000Z",
		Description: {
			DescriptionNote:
				"This is a destructive and permanent action. You will be asked to confirm before reminders are removed.",
			DescriptionSummary:
				"Removes all reminders passed into the action from the lists they are contained in."
		},
		Input: {
			Multiple: true,
			ParameterKey: "WFInputReminders",
			Required: true,
			Types: ["EKReminder"]
		},
		InputPassthrough: false,
		Name: "Remove Reminders",
		ParameterSummary: "Remove ${WFInputReminders}",
		Parameters: [
			{
				Class: "WFVariablePickerParameter",
				Key: "WFInputReminders",
				Label: "Reminders",
				Placeholder: "Reminders"
			}
		],
		RequiredResources: [
			"WFReminderAccessResource",
			"WFUserInteractionResource"
		],
		Subcategory: "Reminders",
		WFCalendarItemEntityType: "Reminder",
		WatchCompatible: true
	},
	"is.workflow.actions.repeat.count": {
		ActionClass: "WFFiniteRepeatAction",
		ActionKeywords: ["loop", "while", "for"],
		Category: "Scripting",
		Description: {
			DescriptionSummary:
				"Repeats the contained actions, running them the specified number of times."
		},
		IconName: "Scripting.png",
		Input: {
			Multiple: true,
			Required: false,
			Types: ["WFContentItem"]
		},
		LastModifiedDate: "2015-05-12T07:00:00.000Z",
		Name: "Repeat",
		Output: {
			Multiple: true,
			OutputName: "Repeat",
			Types: ["WFContentItem"]
		},
		ParameterSummary: "Repeat ${WFRepeatCount}",
		Parameters: [
			{
				Class: "WFStepperParameter",
				Key: "WFRepeatCount",
				StepperDescription: "Repetitions",
				StepperNoun: "Time",
				StepperPluralNoun: "Times",
				StepperPrefix: "Repeat"
			}
		],
		ResidentCompatible: true,
		SnappingPassthrough: true,
		Subcategory: "Control Flow",
		BlockInfo: {
			Example: "\n  ...\nend",
			Completion: "\n\t$0\nend"
		}
	},
	"is.workflow.actions.repeat.each": {
		ActionClass: "WFForEachRepeatAction",
		ActionKeywords: ["loop", "while", "for"],
		Category: "Scripting",
		Description: {
			DescriptionInput: "A list of items",
			DescriptionResult: "Every item passed to the “End Repeat” action",
			DescriptionSummary:
				"Takes a list of items as input, and runs the contained actions once for each item in the list."
		},
		IconName: "Scripting.png",
		Input: {
			Multiple: true,
			ParameterKey: "WFInput",
			Required: false,
			Types: ["WFContentItem"]
		},
		LastModifiedDate: "2015-05-12T07:00:00.000Z",
		Name: "Repeat with Each",
		Output: {
			Multiple: true,
			OutputName: "Repeat with Each",
			Types: ["WFContentItem"]
		},
		ParameterSummary: "Repeat with each item in ${WFInput}",
		Parameters: [
			{
				Class: "WFVariablePickerParameter",
				Key: "WFInput",
				Label: "Items",
				Placeholder: "Items"
			}
		],
		ResidentCompatible: true,
		Subcategory: "Control Flow",
		BlockInfo: {
			Example: "\n  ...\nend",
			Completion: "\n\t$0\nend"
		}
	},
	"is.workflow.actions.round": {
		ActionClass: "WFRoundNumberAction",
		ActionKeywords: [
			"calculator",
			"calculate",
			"number",
			"ceiling",
			"floor"
		],
		AppIdentifier: "com.apple.calculator",
		Attribution: "Math",
		Category: "Scripting",
		CreationDate: "2015-01-11T06:00:00.000Z",
		Description: {
			DescriptionSummary: "Rounds the number(s) passed into the action."
		},
		Input: {
			Multiple: true,
			ParameterKey: "WFInput",
			Required: true,
			Types: ["WFNumberContentItem"]
		},
		Name: "Round Number",
		Output: {
			Multiple: true,
			OutputName: "Rounded Number",
			Types: ["NSDecimalNumber"]
		},
		ParameterSummary: {
			"WFInput,WFRoundTo(10 ^),WFRoundMode,TenToThePowerOf":
				"Round ${WFInput} to ${WFRoundTo} ${TenToThePowerOf}",
			"WFInput,WFRoundTo,WFRoundMode": "Round ${WFInput} to ${WFRoundTo}"
		},
		Parameters: [
			{
				AllowsDecimalNumbers: true,
				Class: "WFNumberFieldParameter",
				Key: "WFInput",
				Label: "Number",
				Placeholder: "Number"
			},
			{
				Class: "WFEnumerationParameter",
				DefaultValue: "Ones Place",
				Items: [
					"Millions",
					"Hundred Thousands",
					"Ten Thousands",
					"Thousands",
					"Hundreds Place",
					"Tens Place",
					"Ones Place",
					"Tenths",
					"Hundredths",
					"Thousandths",
					"Ten Thousandths",
					"Hundred Thousandths",
					"Millionths",
					"Ten Millionths",
					"Hundred Millionths",
					"Billionths",
					"10 ^"
				],
				Key: "WFRoundTo",
				Label: "Value",
				Placeholder: "Value"
			},
			{
				Class: "WFEnumerationParameter",
				DefaultValue: "Normal",
				Items: ["Normal", "Always Round Up", "Always Round Down"],
				Key: "WFRoundMode",
				Label: "Mode"
			},
			{
				Class: "WFNumberFieldParameter",
				DefaultValue: 0,
				Key: "TenToThePowerOf",
				MinimumValue: 0,
				RequiredResources: [
					{
						WFParameterKey: "WFRoundTo",
						WFParameterValue: "10 ^",
						WFResourceClass: "WFParameterRelationResource"
					}
				]
			}
		],
		ResidentCompatible: true,
		Subcategory: "Math"
	},
	"is.workflow.actions.rss": {
		ActionClass: "WFRSSFeedAction",
		ActionKeywords: [
			"article",
			"podcast",
			"text",
			"clipboard",
			"copy",
			"paste"
		],
		Category: "Web",
		Description: {
			DescriptionSummary: "Downloads the latest items from an RSS feed."
		},
		IconName: "RSS.png",
		LastModifiedDate: "2015-02-19T08:00:00.000Z",
		Name: "Get Items from RSS Feed",
		Output: {
			Multiple: true,
			OutputName: "Items from RSS Feed",
			Types: ["WFArticle", "NSURL"]
		},
		ParameterSummary: "Get ${WFRSSItemQuantity} from ${WFRSSFeedURL}",
		Parameters: [
			{
				AutocapitalizationType: "None",
				Class: "WFTextInputParameter",
				DefaultValue: "https://www.apple.com/newsroom/rss-feed.rss",
				DisableAutocorrection: true,
				Key: "WFRSSFeedURL",
				KeyboardType: "URL",
				Label: "URL",
				Placeholder: "RSS feed",
				TextContentType: "URL"
			},
			{
				Class: "WFStepperParameter",
				DefaultValue: 10,
				Key: "WFRSSItemQuantity",
				StepperDescription: "Number of Items",
				StepperNoun: "Item",
				StepperPluralNoun: "Items",
				StepperPrefix: "Get"
			}
		],
		ResidentCompatible: true,
		ShortName: "Get RSS Items",
		Subcategory: "RSS"
	},
	"is.workflow.actions.rss.extract": {
		ActionClass: "WFRSSFeedExtractAction",
		ActionKeywords: ["extract", "clipboard", "copy", "paste"],
		Category: "Web",
		CreationDate: "2015-02-19T08:00:00.000Z",
		Description: {
			DescriptionSummary:
				"Extracts any RSS feed URLs from the given web URLs or webpage."
		},
		IconName: "RSS.png",
		Input: {
			Multiple: true,
			ParameterKey: "WFURLs",
			Required: true,
			Types: ["WFURLContentItem", "WFRichTextContentItem"]
		},
		Name: "Get RSS Feeds from Page",
		Output: {
			Multiple: true,
			OutputName: "RSS Feeds from Page",
			Types: ["WFURLContentItem"]
		},
		ParameterSummary: "Get RSS feeds from ${WFURLs}",
		Parameters: [
			{
				AllowsMultipleValues: false,
				AutocapitalizationType: "None",
				Class: "WFTextInputParameter",
				DisableAutocorrection: true,
				Key: "WFURLs",
				KeyboardType: "URL",
				Label: "Page",
				Placeholder: "Page",
				TextContentType: "URL"
			}
		],
		RequiredResources: ["WFRemoteServerAccessResource"],
		ResidentCompatible: true,
		ShortName: "Get RSS Feeds",
		Subcategory: "RSS"
	},
	"is.workflow.actions.runextension": {
		ActionClass: "WFRunExtensionAction",
		ActionKeywords: [
			"action",
			"extension",
			"sharing",
			"share",
			"ios 8",
			"app",
			"inter"
		],
		Category: "Sharing",
		Description: {
			DescriptionSummary:
				"Prompts to share the input using action extensions and sharing extensions provided by other apps."
		},
		IconName: "Apps.png",
		Input: {
			Multiple: true,
			ParameterKey: "WFInput",
			Required: true,
			Types: ["WFContentItem"]
		},
		InputPassthrough: true,
		Name: "Share with Extensions",
		ParameterSummary: "Share ${WFInput} with extensions",
		Parameters: [
			{
				Class: "WFVariablePickerParameter",
				Key: "WFInput",
				Label: "Input",
				Placeholder: "Input"
			}
		],
		RequiredResources: ["WFUserInteractionResource"],
		Subcategory: "System",
		UserInterfaces: ["UIKit"]
	},
	"is.workflow.actions.runjavascriptonwebpage": {
		ActionClass: "WFRunJavaScriptOnWebPageAction",
		ActionKeywords: [
			"script",
			"safari",
			"java",
			"javascript",
			"webpage",
			"webkit",
			"browser",
			"json",
			"web",
			"page",
			"website"
		],
		AppIdentifier: "com.apple.mobilesafari",
		Category: "Web",
		Description: {
			DescriptionInput: "Safari webpages",
			DescriptionNote:
				"Safari Webpage items are only available when running your shortcut as an Action Extension in Safari.",
			DescriptionResult: "The output from the JavaScript (JSON)",
			DescriptionSummary:
				"Runs JavaScript on a Safari webpage passed in as input"
		},
		Input: {
			Multiple: false,
			ParameterKey: "WFInput",
			Required: true,
			Types: ["WFSafariWebPageContentItem"]
		},
		InputPassthrough: false,
		LastModifiedDate: "2015-01-11T06:00:00.000Z",
		Name: "Run JavaScript on Webpage",
		Output: {
			Multiple: false,
			OutputName: "JavaScript Result",
			Types: [
				"WFDictionaryContentItem",
				"WFStringContentItem",
				"WFBooleanContentItem",
				"WFNumberContentItem"
			]
		},
		ParameterCollapsingBehavior: "DefaultBeginExpanded",
		ParameterSummary: "Run JavaScript on ${WFInput}",
		Parameters: [
			{
				AutocapitalizationType: "None",
				Class: "WFTextInputParameter",
				DefaultValue:
					'var result = [];\n// Get all links from the page\nvar elements = document.querySelectorAll("a");\nfor (let element of elements) {\n\tresult.push({\n\t\t"url": element.href,\n\t\t"text": element.innerText\n\t});\n}\n\n// Call completion to finish\ncompletion(result);',
				DisableAutocorrection: true,
				DisableSmartDashes: true,
				DisableSmartQuotes: true,
				Key: "WFJavaScript",
				Label: "JavaScript",
				Multiline: true,
				Placeholder: "JavaScript",
				SyntaxHighlightingType: "JavaScript"
			},
			{
				Class: "WFVariablePickerParameter",
				Key: "WFInput",
				Label: "Webpage",
				Placeholder: "Webpage"
			}
		],
		RequiredResources: [
			{
				WFDeviceAttributes: {
					WFDeviceAttributeSystemVersion: {
						WFSystemVersion: "12",
						WFSystemVersionRelation: ">="
					}
				},
				WFResourceClass: "WFDeviceAttributesResource"
			}
		],
		ShortName: "Run JavaScript",
		Subcategory: "Safari",
		SuggestedNever: true
	},
	"is.workflow.actions.runsshscript": {
		ActionClass: "WFRunSSHScriptAction",
		ActionKeywords: [
			"unix",
			"shell",
			"script",
			"ssh",
			"terminal",
			"linux",
			"mac"
		],
		Category: "Scripting",
		Description: {
			DescriptionInput: "The input passed to the shell script (stdin)",
			DescriptionResult: "The output from the shell script (stdout)",
			DescriptionSummary: "Runs a script on a remote computer over SSH."
		},
		IconName: "Scripting.png",
		Input: {
			Multiple: false,
			ParameterKey: "WFInput",
			Required: false,
			Types: ["public.data"]
		},
		LastModifiedDate: "2015-01-11T06:00:00.000Z",
		Name: "Run Script Over SSH",
		Output: {
			Multiple: false,
			OutputName: "Shell Script Result",
			Types: ["public.data"]
		},
		ParameterSummary: "Run script over SSH",
		Parameters: [
			{
				AutocapitalizationType: "None",
				Class: "WFTextInputParameter",
				DisableAutocorrection: true,
				Key: "WFSSHHost",
				KeyboardType: "URL",
				Label: "Host",
				Placeholder: "192.168.1.100",
				TextAlignment: "Right",
				TextContentType: "URL"
			},
			{
				Class: "WFTextInputParameter",
				DefaultValue: "22",
				Key: "WFSSHPort",
				KeyboardType: "NumberPad",
				Label: "Port",
				Placeholder: "22",
				TextAlignment: "Right"
			},
			{
				AutocapitalizationType: "None",
				Class: "WFTextInputParameter",
				DisableAutocorrection: true,
				DoNotLocalizeValues: true,
				Key: "WFSSHUser",
				Label: "User",
				Placeholder: "root",
				TextAlignment: "Right",
				TextContentType: "Username"
			},
			{
				Class: "WFEnumerationParameter",
				DefaultValue: "Password",
				DisallowedVariableTypes: ["Ask", "Variable"],
				Items: ["Password", "SSH Key"],
				Key: "WFSSHAuthenticationType",
				Label: "Authentication",
				RequiredResources: [
					{
						WFRelation: "!=",
						WFResourceClass: "WFWorkflowEnvironmentResource",
						WFWorkflowEnvironment: "HomeResident"
					}
				]
			},
			{
				Class: "WFTextInputParameter",
				Key: "WFSSHPassword",
				Label: "Password",
				Placeholder: "••••••••",
				RequiredResources: [
					{
						WFParameterKey: "WFSSHAuthenticationType",
						WFParameterValue: "Password",
						WFResourceClass: "WFParameterRelationResource"
					}
				],
				SecureTextInput: true,
				TextAlignment: "Right",
				TextContentType: "Password"
			},
			{
				Class: "WFSSHKeyParameter",
				Key: "WFSSHKey",
				Label: "SSH Key",
				RequiredResources: [
					{
						WFParameterKey: "WFSSHAuthenticationType",
						WFParameterValue: "SSH Key",
						WFResourceClass: "WFParameterRelationResource"
					},
					{
						WFRelation: "!=",
						WFResourceClass: "WFWorkflowEnvironmentResource",
						WFWorkflowEnvironment: "HomeResident"
					}
				]
			},
			{
				Class: "WFVariablePickerParameter",
				Key: "WFInput",
				Label: "Input",
				Placeholder: "Choose Variable"
			},
			{
				AutocapitalizationType: "None",
				Class: "WFTextInputParameter",
				DisableAutocorrection: true,
				Key: "WFSSHScript",
				Label: "Script",
				Multiline: true,
				Placeholder: "Script"
			}
		],
		ResidentCompatible: true,
		ShortName: "Run SSH Script",
		Subcategory: "Shell",
		SuggestedNever: true
	},
	"is.workflow.actions.runworkflow": {
		ActionClass: "WFRunWorkflowAction",
		ActionKeywords: ["action", "workflow", "shortcuts"],
		AppIdentifier: "com.apple.shortcuts",
		Category: "Scripting",
		CreationDate: "2017-02-15T06:00:00.000Z",
		Description: {
			DescriptionInput: "The input to pass to the shortcut.",
			DescriptionResult: "The shortcut's result",
			DescriptionSummary: "Run a shortcut from your shortcut."
		},
		Input: {
			Multiple: true,
			ParameterKey: "WFInput",
			Required: true,
			Types: ["WFContentItem"]
		},
		Name: "Run Shortcut",
		Output: {
			Multiple: true,
			OutputName: "Shortcut Result",
			Types: ["WFContentItem"]
		},
		ParameterSummary: "Run ${WFWorkflowName}",
		Parameters: [
			{
				Class: "WFWorkflowPickerParameter",
				Key: "WFWorkflowName",
				Label: "Shortcut",
				Placeholder: "Shortcut"
			},
			{
				Class: "WFVariablePickerParameter",
				Key: "WFInput",
				Label: "Input",
				Placeholder: "Choose Variable"
			},
			{
				Class: "WFSwitchParameter",
				DefaultValue: true,
				Key: "WFShowWorkflow",
				Label: "Show While Running"
			}
		],
		RequiredResources: [
			"WFMainThreadResource",
			{
				RequiredResources: [
					{
						WFParameterKey: "WFShowWorkflow",
						WFParameterValue: true,
						WFResourceClass: "WFParameterRelationResource"
					}
				],
				WFResourceClass: "WFUserInteractionResource"
			}
		],
		Subcategory: "Shortcuts",
		SuggestedNever: true,
		UserInterfaces: ["UIKit", "UIKitWidget", "WatchKit"]
	},
	"is.workflow.actions.savetocameraroll": {
		ActionClass: "WFSaveToCameraRollAction",
		ActionKeywords: [
			"save",
			"photo",
			"photos",
			"picture",
			"image",
			"camera",
			"roll"
		],
		AppIdentifier: "com.apple.mobileslideshow",
		Category: "Media",
		Description: {
			DescriptionInput: "Photos, videos, or audio to save",
			DescriptionNote:
				"If a photo passed as input is already in the specified album, the photo will be duplicated.",
			DescriptionResult: "The saved items",
			DescriptionSummary:
				"Adds the photos and videos passed as input to the specified photo album."
		},
		Input: {
			Multiple: true,
			ParameterKey: "WFInput",
			Required: true,
			Types: ["WFPhotoMediaContentItem", "UIImage", "AVAsset"]
		},
		InputPassthrough: false,
		LastModifiedDate: "2015-02-03T08:00:00.000Z",
		Name: "Save to Photo Album",
		Output: {
			Multiple: true,
			OutputName: "Saved Photo Media",
			Types: ["PHAsset"]
		},
		ParameterSummary: "Save ${WFInput} to ${WFCameraRollSelectedGroup}",
		Parameters: [
			{
				AlwaysShowsButton: true,
				Class: "WFPhotoAlbumPickerParameter",
				Key: "WFCameraRollSelectedGroup",
				Label: "Album",
				Placeholder: "Photo Album"
			},
			{
				Class: "WFVariablePickerParameter",
				Key: "WFInput",
				Label: "Input",
				Placeholder: "Input"
			}
		],
		RequiredResources: ["WFPhotoAccessResource"],
		ShortName: "Save to Photos",
		Subcategory: "Photos"
	},
	"is.workflow.actions.scanbarcode": {
		ActionClass: "WFScanMachineReadableCodeAction",
		Category: "Documents",
		Description: {
			DescriptionSummary:
				"Scans a QR code or bar code using the camera, and returns the text/URL that is found."
		},
		IconName: "QRCode.png",
		LastModifiedDate: "2015-01-11T06:00:00.000Z",
		Name: "Scan QR/Bar Code",
		Output: {
			Multiple: false,
			OutputName: "QR/Bar Code",
			Types: ["AVMetadataMachineReadableCodeObject"]
		},
		ParameterSummary: "Scan QR/Bar Code",
		RequiredResources: [
			"WFUserInteractionResource",
			"WFCameraAccessResource"
		],
		ShortName: "Scan Bar Code",
		Subcategory: "QR Codes",
		UnsupportedEnvironments: ["Extension"],
		UserInterfaces: ["UIKit"]
	},
	"is.workflow.actions.searchappstore": {
		ActionClass: "WFSearchiTunesAction",
		ActionKeywords: [
			"app",
			"song",
			"music",
			"movie",
			"ebook",
			"audiobook",
			"tv",
			"album",
			"store"
		],
		AppIdentifier: "com.apple.AppStore",
		Category: "Media",
		CreationDate: "2016-03-15T07:00:00.000Z",
		Description: {
			DescriptionSummary:
				"Searches the App Store, returning the apps that match the specified search terms. You can get more details about the results using the Get Details of App Store App action."
		},
		InputPassthrough: false,
		Name: "Search App Store",
		Output: {
			Multiple: true,
			OutputName: "App Store Apps",
			Types: ["WFAppStoreAppContentItem"]
		},
		ParameterSummary: "Search App Store for ${WFSearchTerm}",
		Parameters: [
			{
				Class: "WFTextInputParameter",
				Key: "WFSearchTerm",
				Label: "Search",
				Placeholder: "Shortcuts",
				TextAlignment: "Right"
			},
			{
				Class: "WFDynamicEnumerationParameter",
				Key: "WFAttribute",
				Label: "Search By"
			},
			{
				Class: "WFDynamicEnumerationParameter",
				Key: "WFEntity",
				Label: "Results"
			},
			{
				Class: "WFiTunesStoreCountryPickerParameter",
				Key: "WFCountry",
				Label: "Region"
			},
			{
				Class: "WFStepperParameter",
				DefaultValue: 25,
				Key: "WFItemLimit",
				MaximumValue: 100,
				MinimumValue: 1,
				Pefix: "Get",
				StepperDescription: "Number of Items",
				StepperNoun: "Item",
				StepperPluralNoun: "Items"
			}
		],
		ResidentCompatible: true,
		SuggestedNever: true
	},
	"is.workflow.actions.searchitunes": {
		ActionClass: "WFSearchiTunesAction",
		ActionKeywords: [
			"app",
			"song",
			"music",
			"movie",
			"ebook",
			"audiobook",
			"tv",
			"album",
			"store"
		],
		AppIdentifier: "com.apple.MobileStore",
		Category: "Media",
		CreationDate: "2016-03-15T07:00:00.000Z",
		Description: {
			DescriptionSummary:
				"Searches the iTunes Store, returning the items that match the specified search terms. You can get more details about the results using the Get Details of iTunes Product action."
		},
		InputPassthrough: false,
		Name: "Search iTunes Store",
		Output: {
			Multiple: true,
			OutputName: "iTunes Products",
			Types: ["WFiTunesProductContentItem"]
		},
		ParameterSummary: "Search iTunes Store for ${WFSearchTerm}",
		Parameters: [
			{
				Class: "WFTextInputParameter",
				Key: "WFSearchTerm",
				Label: "Search",
				Placeholder: "Search Term",
				TextAlignment: "Right"
			},
			{
				Class: "WFDynamicEnumerationParameter",
				Key: "WFMediaType",
				Label: "Category"
			},
			{
				Class: "WFDynamicEnumerationParameter",
				Key: "WFAttribute",
				Label: "Search By"
			},
			{
				Class: "WFDynamicEnumerationParameter",
				Key: "WFEntity",
				Label: "Results"
			},
			{
				Class: "WFiTunesStoreCountryPickerParameter",
				Key: "WFCountry",
				Label: "Region"
			},
			{
				Class: "WFStepperParameter",
				DefaultValue: 25,
				Key: "WFItemLimit",
				MaximumValue: 100,
				MinimumValue: 1,
				Pefix: "Get",
				StepperDescription: "Number of Items",
				StepperNoun: "Item",
				StepperPluralNoun: "Items"
			}
		],
		ResidentCompatible: true,
		Storefront: "iTunes",
		SuggestedAsInitialAction: false
	},
	"is.workflow.actions.searchlocalbusinesses": {
		ActionClass: "WFSearchLocalBusinessesAction",
		ActionKeywords: [
			"maps",
			"search",
			"query",
			"place",
			"location",
			"nearby",
			"find"
		],
		AppIdentifier: "com.apple.Maps",
		Category: "Location",
		CreationDate: "2014-07-13T05:00:00.000Z",
		Description: {
			DescriptionInput: "A location to search near.",
			DescriptionSummary: "Searches for nearby businesses."
		},
		Input: {
			Multiple: false,
			ParameterKey: "WFInput",
			Required: false,
			Types: ["CLLocation"]
		},
		LastModifiedDate: "2015-01-11T06:00:00.000Z",
		Name: "Search Local Businesses",
		Output: {
			Multiple: true,
			OutputName: "Local Businesses",
			Types: ["MKMapItem"]
		},
		ParameterSummary: "Search for ${WFSearchQuery} near ${WFInput}",
		Parameters: [
			{
				Class: "WFLocationParameter",
				DefaultToCurrentLocation: true,
				Key: "WFInput",
				Label: "Location",
				SkipProcessingCurrentLocation: true
			},
			{
				Class: "WFTextInputParameter",
				Description: "Keywords used to search for businesses.",
				Key: "WFSearchQuery",
				Label: "Search",
				Placeholder: "Local Businesses",
				TextAlignment: "Right"
			},
			{
				Class: "WFSearchLocalBusinessesRadiusParameter",
				Key: "WFSearchRadius",
				Label: "Radius",
				TextAlignment: "Right",
				WFUnitType: "Length"
			}
		],
		RequiredResources: ["WFMainThreadResource", "WFLocationAccessResource"],
		ResidentCompatible: true,
		ShortName: "Search Maps",
		Subcategory: "Routing"
	},
	"is.workflow.actions.searchmaps": {
		ActionClass: "WFSearchMapsAction",
		ActionKeywords: ["maps", "search", "query", "places", "waze", "google"],
		Category: "Location",
		Description: {
			DescriptionSummary:
				"Opens your choice of Maps, Google Maps, or Waze and searches for the location, place, or text that was passed into the action."
		},
		Input: {
			Multiple: false,
			ParameterKey: "WFInput",
			Required: true,
			Types: ["NSString", "CLLocation", "MKMapItem"]
		},
		InputPassthrough: true,
		Name: "Show in Maps",
		ParameterSummary: "Show ${WFInput} in Maps",
		Parameters: [
			{
				Class: "WFLocationParameter",
				Key: "WFInput",
				Label: "Location",
				Placeholder: "Location"
			},
			{
				Class: "WFMapsAppPickerParameter",
				DefaultValue: "Maps",
				Hidden: true,
				Key: "WFSearchMapsActionApp",
				Label: "App",
				SupportedApps: ["Maps", "Google Maps", "Waze"]
			}
		],
		RequiredResources: [
			{
				RequiredResources: [
					{
						WFParameterKey: "WFInput",
						WFParameterValue: {
							isCurrentLocation: true
						},
						WFResourceClass: "WFParameterRelationResource"
					}
				],
				WFResourceClass: "WFLocationAccessResource"
			}
		],
		ShortName: "Show Map",
		Subcategory: "Maps",
		UserInterfaces: ["UIKit", "WatchKit"]
	},
	"is.workflow.actions.searchpodcasts": {
		ActionClass: "WFSearchiTunesAction",
		ActionKeywords: ["podcast"],
		AppIdentifier: "com.apple.podcasts",
		CreationDate: "2019-01-23T08:00:00.000Z",
		Description: {
			DescriptionSummary:
				"Searches Podcasts, returning the items that match the specified search terms."
		},
		InputPassthrough: false,
		Name: "Search Podcasts",
		Output: {
			Multiple: true,
			OutputName: "Podcasts",
			Types: ["WFiTunesProductContentItem"]
		},
		Parameters: [
			{
				Class: "WFTextInputParameter",
				Key: "WFSearchTerm",
				Label: "Search",
				Placeholder: "The Daily",
				TextAlignment: "Right"
			},
			{
				Class: "WFDynamicEnumerationParameter",
				Key: "WFAttribute",
				Label: "Search By"
			},
			{
				Class: "WFDynamicEnumerationParameter",
				Key: "WFEntity",
				Label: "Results"
			},
			{
				Class: "WFiTunesStoreCountryPickerParameter",
				Key: "WFCountry",
				Label: "Country"
			},
			{
				Class: "WFStepperParameter",
				DefaultValue: 25,
				Key: "WFItemLimit",
				MaximumValue: 100,
				MinimumValue: 1,
				Pefix: "Get",
				StepperDescription: "Number of Items",
				StepperNoun: "Item",
				StepperPluralNoun: "Items"
			}
		],
		Storefront: "Podcasts",
		SuggestedAsInitialAction: false
	},
	"is.workflow.actions.searchweb": {
		ActionClass: "WFSearchWebAction",
		ActionKeywords: [
			"Amazon",
			"Bing",
			"DuckDuckGo",
			"eBay",
			"Google",
			"Reddit",
			"Twitter",
			"Yahoo!",
			"YouTube",
			"Internet",
			"Website"
		],
		AppIdentifier: "com.apple.mobilesafari",
		Category: "Web",
		CreationDate: "2015-08-29T07:00:00.000Z",
		Description: {
			DescriptionSummary:
				"Searches the web for the text provided as input."
		},
		Input: {
			Multiple: false,
			ParameterKey: "WFInputText",
			Required: true,
			Types: ["NSString"]
		},
		InputPassthrough: true,
		Name: "Search Web",
		ParameterSummary: "Search ${WFSearchWebDestination} for ${WFInputText}",
		Parameters: [
			{
				Class: "WFEnumerationParameter",
				DefaultValue: "Google",
				Items: [
					"Amazon",
					"Bing",
					"DuckDuckGo",
					"eBay",
					"Google",
					"Reddit",
					"Twitter",
					"Yahoo!",
					"YouTube"
				],
				Key: "WFSearchWebDestination",
				Label: "Service",
				Placeholder: "Service"
			},
			{
				Class: "WFTextInputParameter",
				Key: "WFInputText",
				Label: "Text",
				Placeholder: "Text"
			}
		],
		RequiredResources: ["WFURLOpenResource"],
		Subcategory: "Safari"
	},
	"is.workflow.actions.selectcontacts": {
		ActionClass: "WFSelectContactsAction",
		ActionKeywords: [
			"select",
			"person",
			"people",
			"contact",
			"addressbook"
		],
		AppIdentifier: "com.apple.MobileAddressBook",
		Category: "Contacts",
		Description: {
			DescriptionSummary:
				"Prompts to pick a person from your contacts and passes the selection to the next action."
		},
		InputPassthrough: false,
		LastModifiedDate: "2015-12-14T08:00:00.000Z",
		Name: "Select Contact",
		Output: {
			Multiple: true,
			OutputName: "Contacts",
			Types: ["WFContact"]
		},
		ParameterSummary: "Select contact",
		Parameters: [
			{
				Class: "WFSwitchParameter",
				Key: "WFSelectMultiple",
				Label: "Select Multiple"
			}
		],
		RequiredResources: ["WFUserInteractionResource"],
		Subcategory: "Contacts",
		UserInterfaces: ["UIKit", "WatchKit"]
	},
	"is.workflow.actions.selectemail": {
		ActionClass: "WFSelectContactsAction",
		ActionKeywords: ["select", "email", "address", "e-mail", "addressbook"],
		AppIdentifier: "com.apple.mobilemail",
		Category: "Contacts",
		ContactProperties: ["Email"],
		Description: {
			DescriptionSummary:
				"Prompts to pick an email address from your contacts and passes the selection to the next action."
		},
		InputPassthrough: false,
		Name: "Select Email Address",
		Output: {
			Multiple: true,
			OutputName: "Email Addresses",
			Types: ["WFEmailAddress"]
		},
		RequiredResources: ["WFUserInteractionResource"],
		ShortName: "Select Email",
		Subcategory: "Email",
		SuggestedAsInitialAction: false,
		UserInterfaces: ["UIKit", "WatchKit"]
	},
	"is.workflow.actions.selectphone": {
		ActionClass: "WFSelectContactsAction",
		ActionKeywords: [
			"select",
			"phone",
			"number",
			"telephone",
			"addressbook"
		],
		Category: "Contacts",
		ContactProperties: ["Phone"],
		Description: {
			DescriptionSummary:
				"Prompts to pick a phone number from your contacts and passes the selection to the next action."
		},
		IconName: "PhoneNumber.png",
		InputPassthrough: false,
		Name: "Select Phone Number",
		Output: {
			Multiple: true,
			OutputName: "Phone Numbers",
			Types: ["WFPhoneNumber"]
		},
		RequiredResources: ["WFUserInteractionResource"],
		ShortName: "Select Phone #",
		Subcategory: "Phone",
		SuggestedAsInitialAction: false,
		UserInterfaces: ["UIKit", "WatchKit"]
	},
	"is.workflow.actions.selectphoto": {
		ActionClass: "WFSelectPhotoAction",
		ActionKeywords: ["select", "photo", "from", "library", "picture"],
		AppIdentifier: "com.apple.mobileslideshow",
		Category: "Media",
		Description: {
			DescriptionResult: "The selected photos/videos",
			DescriptionSummary:
				"Prompts to choose photos and videos from your photo library."
		},
		Name: "Select Photos",
		Output: {
			Multiple: true,
			OutputName: "Photos",
			Types: ["PHAsset"]
		},
		ParameterSummary: "Select photos",
		Parameters: [
			{
				Class: "WFSwitchParameter",
				Key: "WFSelectMultiplePhotos",
				Label: "Select Multiple"
			}
		],
		RequiredResources: [
			"WFPhotoAccessResource",
			"WFUserInteractionResource"
		],
		Subcategory: "Photos",
		UserInterfaces: ["WatchKit", "UIKit"]
	},
	"is.workflow.actions.sendemail": {
		ActionClass: "WFSendEmailAction",
		ActionKeywords: [
			"email",
			"e-mail",
			"mail",
			"send",
			"gmail",
			"yahoo",
			"hotmail",
			"icloud",
			"aol"
		],
		AppIdentifier: "com.apple.mobilemail",
		Category: "Sharing",
		Description: {
			DescriptionSummary:
				"Presents an email composer. Pass text into the action to set the email body. Other types of input are added as attachments."
		},
		Input: {
			Multiple: true,
			ParameterKey: "WFSendEmailActionInputAttachments",
			Required: false,
			Types: ["NSString", "WFContentItem"]
		},
		InputPassthrough: true,
		IntentIdentifier:
			"sirikit.intents.custom.com.apple.mobilemail.MSSendMailIntent",
		LastModifiedDate: "2015-11-24T06:00:00.000Z",
		Name: "Send Email",
		ParameterSummary:
			"Send ${WFSendEmailActionInputAttachments} to ${WFSendEmailActionToRecipients} as ${WFSendEmailActionSubject}",
		Parameters: [
			{
				Class: "WFSwitchParameter",
				DefaultValue: true,
				Key: "WFSendEmailActionShowComposeSheet",
				Label: "Show Compose Sheet"
			},
			{
				Class: "WFCustomIntentDynamicEnumerationParameter",
				IntentSlotName: "sender",
				Key: "WFEmailAccountActionSelectedAccount",
				Label: "From",
				RequiredResources: [
					{
						WFParameterKey: "WFSendEmailActionShowComposeSheet",
						WFParameterValue: false,
						WFResourceClass: "WFParameterRelationResource"
					}
				]
			},
			{
				AutocapitalizationType: "None",
				Class: "WFTextInputParameter",
				Description:
					"The email address to send from. This must be an email address that is set up in the Mail app.",
				DisableAutocorrection: true,
				Key: "WFSendEmailActionFrom",
				KeyboardType: "EmailAddress",
				Label: "From",
				Placeholder: "optional",
				RequiredResources: [
					{
						WFParameterKey: "WFSendEmailActionShowComposeSheet",
						WFParameterValue: true,
						WFResourceClass: "WFParameterRelationResource"
					},
					{
						WFDeviceAttributes: {
							WFDeviceAttributeSystemVersion: {
								WFSystemVersion: "11.0",
								WFSystemVersionRelation: ">="
							}
						},
						WFResourceClass: "WFDeviceAttributesResource"
					}
				],
				TextContentType: "EmailAddress"
			},
			{
				AllowsMultipleValues: true,
				Class: "WFEmailAddressFieldParameter",
				IntentSlotName: "to",
				Key: "WFSendEmailActionToRecipients",
				Label: "To",
				Placeholder: "Recipients"
			},
			{
				AllowsMultipleValues: true,
				Class: "WFEmailAddressFieldParameter",
				IntentSlotName: "cc",
				Key: "WFSendEmailActionCcRecipients",
				Label: "Cc",
				Placeholder: "Email addresses"
			},
			{
				AllowsMultipleValues: true,
				Class: "WFEmailAddressFieldParameter",
				IntentSlotName: "bcc",
				Key: "WFSendEmailActionBccRecipients",
				Label: "Bcc",
				Placeholder: "Email addresses"
			},
			{
				Class: "WFTextInputParameter",
				IntentSlotName: "subject",
				Key: "WFSendEmailActionSubject",
				Label: "Subject",
				Placeholder: "Subject"
			},
			{
				Class: "WFTextInputParameter",
				Key: "WFSendEmailActionInputAttachments",
				Label: "Message",
				Placeholder: "Message",
				ProcessIntoContentItems: true
			},
			{
				Class: "WFSwitchParameter",
				IntentSlotName: "isDraft",
				Key: "WFSendEmailActionSaveAsDraft",
				Label: "Save as Draft",
				Placeholder: "Save as Draft",
				RequiredResources: [
					{
						WFParameterKey: "WFSendEmailActionShowComposeSheet",
						WFParameterValue: false,
						WFResourceClass: "WFParameterRelationResource"
					}
				]
			}
		],
		RequiredResources: [
			{
				RequiredResources: [
					{
						WFParameterKey: "WFSendEmailActionShowComposeSheet",
						WFParameterValue: true,
						WFResourceClass: "WFParameterRelationResource"
					}
				],
				WFResourceClass: "WFUserInteractionResource"
			},
			{
				RequiredResources: [
					{
						WFParameterKey: "WFSendEmailActionShowComposeSheet",
						WFParameterValue: false,
						WFResourceClass: "WFParameterRelationResource"
					}
				],
				WFResourceClass: "WFSendEmailAccessResource"
			}
		],
		Subcategory: "Messaging",
		SuggestedAsInitialAction: true,
		UserInterfaces: ["UIKit", "WatchKit", "UIKitWidget"]
	},
	"is.workflow.actions.sendmessage": {
		ActionClass: "WFSendMessageAction",
		ActionKeywords: ["message", "sms", "send", "text"],
		AppIdentifier: "com.apple.MobileSMS",
		Category: "Sharing",
		Description: {
			DescriptionSummary:
				"Sends an iMessage or SMS. Pass images, videos, or other files as input to include attachments."
		},
		Input: {
			Multiple: true,
			ParameterKey: "WFSendMessageContent",
			Required: false,
			Types: ["WFContentItem"]
		},
		InputPassthrough: true,
		IntentIdentifier: "sirikit.intent.messages.SendMessageIntent",
		LastModifiedDate: "2015-11-24T06:00:00.000Z",
		Name: "Send Message",
		ParameterSummary:
			"Send “${WFSendMessageContent}” to ${WFSendMessageActionRecipients}",
		Parameters: [
			{
				Class: "WFIntentAppPickerParameter",
				DefaultValue: "com.apple.MobileSMS",
				Hidden: true,
				IntentName: "INSendMessageIntent",
				Key: "IntentAppIdentifier",
				Label: "App"
			},
			{
				Class: "WFSwitchParameter",
				DefaultValue: true,
				Key: "ShowWhenRun",
				Label: "Show When Run"
			},
			{
				AllowsMultipleValues: true,
				Class: "WFContactHandleFieldParameter",
				IntentSlotName: "recipients",
				Key: "WFSendMessageActionRecipients",
				Label: "Recipients"
			},
			{
				Class: "WFTextInputParameter",
				IntentSlotName: "content",
				Key: "WFSendMessageContent",
				Multiline: true,
				Placeholder: "Message",
				ProcessIntoContentItems: true
			},
			{
				Class: "WFTextInputParameter",
				Hidden: true,
				Key: "WFSendMessagePrefix",
				Label: "Prefix"
			}
		],
		RateLimit: {
			Delay: 3,
			Threshold: 4,
			Timeout: 30
		},
		RequiredResources: [
			{
				RequiredResources: [
					{
						WFParameterKey: "ShowWhenRun",
						WFParameterValue: true,
						WFResourceClass: "WFParameterRelationResource"
					}
				],
				WFResourceClass: "WFUserInteractionResource"
			},
			{
				RequiredResources: [
					{
						WFParameterKey: "ShowWhenRun",
						WFParameterValue: false,
						WFResourceClass: "WFParameterRelationResource"
					}
				],
				WFResourceClass: "WFMessagesAccessResource"
			}
		],
		Subcategory: "Messaging",
		SuggestedAsInitialAction: true,
		UserInterfaces: ["UIKit", "UIKitWidget", "WatchKit", "Siri"]
	},
	"is.workflow.actions.setbrightness": {
		ACECommandClass: "SASettingSetBrightness",
		ACESettingValueKey: "WFBrightness",
		ActionClass: "WFSetBrightnessAction",
		ActionKeywords: ["screen", "display", "backlight"],
		Category: "Scripting",
		Description: {
			DescriptionSummary: "Sets the device brightness."
		},
		IconName: "Brightness.png",
		InputPassthrough: true,
		Name: "Set Brightness",
		ParameterSummary: "Set brightness to ${WFBrightness}",
		Parameters: [
			{
				Class: "WFSliderParameter",
				DefaultValue: 0.5,
				Description:
					"If you set the brightness using a variable, use a number between 0 and 1 (for example, pass 0.5 for half brightness).",
				Key: "WFBrightness",
				Label: "Brightness",
				MaximumIconName: "BrightnessSliderHigh",
				MinimumIconName: "BrightnessSliderLow"
			}
		],
		RequiredResources: ["WFSiriAccessResource"],
		Subcategory: "Device"
	},
	"is.workflow.actions.setclipboard": {
		ActionClass: "WFSetClipboardAction",
		ActionKeywords: ["text", "clipboard", "copy", "paste", "set"],
		Category: "Sharing",
		Description: {
			DescriptionSummary:
				"Copies the result of the last action to the clipboard."
		},
		IconName: "Clipboard.png",
		Input: {
			Multiple: true,
			ParameterKey: "WFInput",
			Required: true,
			Types: ["WFContentItem"]
		},
		InputPassthrough: true,
		LastModifiedDate: "2016-09-10T07:00:00.000Z",
		Name: "Copy to Clipboard",
		ParameterSummary: "Copy ${WFInput} to clipboard",
		Parameters: [
			{
				Class: "WFSwitchParameter",
				DefaultValue: false,
				Description:
					"When enabled, the input will only be copied locally, and will not be shared to other devices via Handoff.",
				Key: "WFLocalOnly",
				Label: "Local Only"
			},
			{
				Class: "WFDateFieldParameter",
				Description:
					"When set, the clipboard contents will expire and be automatically deleted at the specified time. Optional.",
				Key: "WFExpirationDate",
				Label: "Expire At",
				Placeholder: "Today at 3 PM",
				TextAlignment: "Right"
			},
			{
				Class: "WFVariablePickerParameter",
				Key: "WFInput",
				Label: "Content",
				Placeholder: "Content"
			}
		],
		RequiredResources: ["WFMainThreadResource"],
		ShortName: "Copy",
		Subcategory: "Clipboard"
	},
	"is.workflow.actions.setitemname": {
		ActionClass: "WFSetItemNameAction",
		ActionKeywords: ["title"],
		Category: "Scripting",
		Description: {
			DescriptionSummary: "Sets the name of the item passed as input."
		},
		IconName: "Scripting.png",
		Input: {
			Multiple: false,
			ParameterKey: "WFInput",
			Required: true,
			TypePassthrough: true,
			Types: ["WFContentItem"]
		},
		LastModifiedDate: "2016-10-10T19:00:00.000Z",
		Name: "Set Name",
		Output: {
			Multiple: false,
			OutputName: "Renamed Item",
			Types: ["WFContentItem"]
		},
		ParameterSummary: "Set name of ${WFInput} to ${WFName}",
		Parameters: [
			{
				Class: "WFTextInputParameter",
				Key: "WFName",
				Label: "Name",
				Placeholder: "Name"
			},
			{
				Class: "WFSwitchParameter",
				Description:
					"By default, Shortcuts will automatically include a file extension if one isn't specified. Turn this on if you want to create a file with no extension.",
				Key: "WFDontIncludeFileExtension",
				Label: "Don't Include File Extension"
			},
			{
				Class: "WFVariablePickerParameter",
				Key: "WFInput",
				Label: "Input",
				Placeholder: "Input"
			}
		],
		ResidentCompatible: true,
		Subcategory: "Items"
	},
	"is.workflow.actions.setplaybackdestination": {
		ActionClass: "WFSetPlaybackDestinationAction",
		ActionKeywords: ["device", "airplay", "playback", "audio", "route"],
		Attribution: "AirPlay",
		Categories: ["Scripting", "Media"],
		Description: {
			DescriptionSummary: "Sets playback destination to a device."
		},
		IconName: "AirPlayAudio.png",
		Name: "Set Playback Destination",
		ParameterSummary: "Set playback destination to ${WFMediaRoute}",
		Parameters: [
			{
				AlwaysShowsButton: true,
				Class: "WFMediaRoutePickerParameter",
				DefaultValue: "Local",
				Description: "The device to set playback destination to.",
				DisallowedVariableTypes: ["Variable"],
				Key: "WFMediaRoute",
				Label: "Device",
				RouteType: "OutputDevice"
			}
		],
		Subcategory: "Device",
		WatchCompatible: true
	},
	"is.workflow.actions.setvalueforkey": {
		ActionClass: "WFSetDictionaryValueAction",
		ActionKeywords: [
			"json",
			"plist",
			"xml",
			"urlencoded",
			"query",
			"string",
			"for",
			"key",
			"update",
			"merge"
		],
		Category: "Scripting",
		CreationDate: "2016-10-04T05:00:00.000Z",
		Description: {
			DescriptionSummary:
				"Sets a value in the dictionary passed into the action. "
		},
		IconName: "Scripting.png",
		Input: {
			Multiple: false,
			ParameterKey: "WFDictionary",
			Required: true,
			Types: ["WFDictionaryContentItem"]
		},
		InputPassthrough: false,
		Name: "Set Dictionary Value",
		Output: {
			Multiple: false,
			OutputName: "Dictionary",
			Types: ["WFDictionaryContentItem"]
		},
		ParameterSummary:
			"Set ${WFDictionaryKey} to ${WFDictionaryValue} in ${WFDictionary}",
		Parameters: [
			{
				AutocapitalizationType: "None",
				Class: "WFTextInputParameter",
				DisableAutocorrection: true,
				Key: "WFDictionaryKey",
				Label: "Key",
				Placeholder: "Key",
				TextAlignment: "Right"
			},
			{
				AutocapitalizationType: "None",
				Class: "WFTextInputParameter",
				DisableAutocorrection: true,
				Key: "WFDictionaryValue",
				Label: "Value",
				Placeholder: "Value",
				TextAlignment: "Right"
			},
			{
				Class: "WFVariablePickerParameter",
				Key: "WFDictionary",
				Placeholder: "Dictionary"
			}
		],
		Subcategory: "Dictionaries"
	},
	"is.workflow.actions.setvariable": {
		ActionClass: "WFSetVariableAction",
		ActionKeywords: ["programming", "scripting", "var"],
		Attribution: "Variables",
		Category: "Scripting",
		Description: {
			DescriptionSummary:
				"Sets the value of the specified variable to the input of this action."
		},
		IconName: "Variable.png",
		Input: {
			Multiple: true,
			ParameterKey: "WFInput",
			Required: true,
			Types: ["WFContentItem"]
		},
		InputPassthrough: true,
		Name: "Set Variable",
		ParameterSummary: "Set variable ${WFVariableName} to ${WFInput}",
		Parameters: [
			{
				Class: "WFVariablePickerParameter",
				Key: "WFInput",
				Label: "Input",
				Placeholder: "Input"
			},
			{
				Class: "WFVariableFieldParameter",
				Key: "WFVariableName",
				Label: "Variable",
				Placeholder: "Variable Name",
				TextAlignment: "Right"
			}
		],
		ResidentCompatible: true,
		Subcategory: "Variables"
	},
	"is.workflow.actions.setvolume": {
		ActionClass: "WFSetVolumeAction",
		ActionKeywords: ["sound", "speaker", "loud"],
		Categories: ["Media", "Scripting"],
		Description: {
			DescriptionSummary: "Sets the system volume."
		},
		IconName: "Sound.png",
		InputPassthrough: true,
		Name: "Set Volume",
		ParameterSummary: "Set volume to ${WFVolume}",
		Parameters: [
			{
				Class: "WFSliderParameter",
				DefaultValue: 0.5,
				Description:
					"If you set the volume using a variable, use a number between 0 and 1 (for example, pass 0.5 for half volume).",
				Key: "WFVolume",
				Label: "Volume"
			}
		],
		Subcategory: "Playback"
	},
	"is.workflow.actions.share": {
		ActionClass: "WFShareAction",
		ActionKeywords: ["share", "file", "document", "send"],
		Category: "Sharing",
		Description: {
			DescriptionSummary: "Prompts to share the input."
		},
		IconName: "Sharing.png",
		Input: {
			Multiple: true,
			ParameterKey: "WFInput",
			Required: true,
			Types: ["WFContentItem"]
		},
		InputPassthrough: true,
		Name: "Share",
		ParameterSummary: "Share ${WFInput}",
		Parameters: [
			{
				Class: "WFVariablePickerParameter",
				Key: "WFInput",
				Label: "Input",
				Placeholder: "Input"
			}
		],
		RequiredResources: ["WFUserInteractionResource"],
		Subcategory: "System",
		UserInterfaces: ["UIKit", "WatchKit"]
	},
	"is.workflow.actions.showdefinition": {
		ActionClass: "WFShowDefinitionAction",
		ActionKeywords: ["define", "word", "dictionary", "lookup", "term"],
		Category: "Documents",
		CreationDate: "2015-01-11T06:00:00.000Z",
		Description: {
			DescriptionSummary:
				"Shows the definition of the word passed into the action."
		},
		IconName: "Dictionary.png",
		Input: {
			Multiple: false,
			ParameterKey: "Word",
			Required: true,
			Types: ["NSString"]
		},
		InputPassthrough: true,
		Name: "Show Definition",
		ParameterSummary: "Show definition of ${Word}",
		Parameters: [
			{
				Class: "WFTextInputParameter",
				Key: "Word",
				Label: "Word",
				Placeholder: "word"
			}
		],
		RequiredResources: ["WFUserInteractionResource"],
		Subcategory: "Text",
		UserInterfaces: ["UIKit", "AppKit"]
	},
	"is.workflow.actions.showinblindsquare": {
		ActionClass: "WFShowInBlindSquareAction",
		AppIdentifier: "com.mipsoft.blindsquare",
		Category: "Location",
		CreationDate: "2015-08-20T07:00:00.000Z",
		Description: {
			DescriptionSummary:
				"Opens BlindSquare showing information about the place passed as input, so you can save it as a favorite, start tracking it, or start simulation mode."
		},
		Input: {
			Multiple: false,
			ParameterKey: "WFInput",
			Required: true,
			Types: ["CLLocation", "MKMapItem"]
		},
		InputPassthrough: true,
		Name: "Show in BlindSquare",
		ParameterSummary: "Show ${WFInput}",
		Parameters: [
			{
				Class: "WFSwitchParameter",
				DefaultValue: false,
				Key: "WFBlindSquareSimulation",
				Label: "Start Simulation"
			},
			{
				Class: "WFLocationParameter",
				Key: "WFInput",
				Label: "Location"
			}
		],
		RequiredResources: [
			"WFURLOpenResource",
			{
				AppIdentifier: "com.mipsoft.blindsquare",
				WFResourceClass: "WFAppInstalledResource"
			},
			{
				RequiredResources: [
					{
						WFParameterKey: "WFInput",
						WFParameterValue: {
							isCurrentLocation: true
						},
						WFResourceClass: "WFParameterRelationResource"
					}
				],
				WFResourceClass: "WFLocationAccessResource"
			}
		],
		ShortName: "Show BlindSquare",
		Subcategory: "Maps"
	},
	"is.workflow.actions.showincalendar": {
		ActionClass: "WFShowInCalendarAction",
		ActionKeywords: ["date", "event", "show", "reveal"],
		AppIdentifier: "com.apple.mobilecal",
		Category: "Calendar",
		CreationDate: "2015-01-11T06:00:00.000Z",
		Description: {
			DescriptionSummary:
				"Shows the date or calendar event passed as input in the Calendar app."
		},
		Input: {
			Multiple: false,
			ParameterKey: "WFEvent",
			Required: true,
			Types: [
				"WFDateContentItem",
				"WFCalendarEventContentItem",
				"WFTimeIntervalContentItem"
			]
		},
		InputPassthrough: true,
		Name: "Show in Calendar",
		ParameterSummary: "Show ${WFEvent} in Calendar",
		Parameters: [
			{
				Class: "WFVariablePickerParameter",
				Key: "WFEvent",
				Label: "Event",
				Placeholder: "Event"
			}
		],
		RequiredResources: ["WFURLOpenResource"],
		Subcategory: "Calendar"
	},
	"is.workflow.actions.showinstore": {
		ActionClass: "WFShowInStoreAction",
		ActionKeywords: [
			"app",
			"song",
			"music",
			"movie",
			"ebook",
			"audiobook",
			"tv",
			"album",
			"store"
		],
		AppIdentifier: "com.apple.MobileStore",
		Category: "Media",
		CreationDate: "2016-03-15T07:00:00.000Z",
		Description: {
			DescriptionSummary:
				"Shows the iTunes products or App Store apps passed as input in a store sheet. This is useful with the Search iTunes Store and Search App Store actions."
		},
		Input: {
			Multiple: false,
			ParameterKey: "WFProduct",
			Required: true,
			Types: ["WFiTunesProductContentItem", "WFAppStoreAppContentItem"]
		},
		InputPassthrough: true,
		Name: "Show in iTunes Store",
		ParameterSummary: "Show ${WFProduct} in iTunes Store",
		Parameters: [
			{
				Class: "WFVariablePickerParameter",
				Key: "WFProduct",
				Label: "Product",
				Placeholder: "Product"
			}
		],
		RequiredResources: ["WFUserInteractionResource"],
		UserInterfaces: ["UIKit"]
	},
	"is.workflow.actions.shownote": {
		ActionClass: "WFShowNoteAction",
		ActionKeywords: ["apple"],
		AppIdentifier: "com.apple.mobilenotes",
		Category: "Documents",
		Description: {
			DescriptionSummary: "Opens the note passed in as input."
		},
		Input: {
			Multiple: false,
			ParameterKey: "WFInput",
			Required: true,
			Types: ["WFNoteContentItem"]
		},
		InputPassthrough: true,
		Name: "Show Note",
		ParameterSummary: "Show ${WFInput}",
		Parameters: [
			{
				Class: "WFVariablePickerParameter",
				Key: "WFInput",
				Label: "Note",
				Placeholder: "Note"
			}
		],
		RequiredResources: ["WFNotesAccessResource"]
	},
	"is.workflow.actions.showresult": {
		ActionClass: "WFShowResultAction",
		ActionKeywords: [
			"text",
			"such text",
			"very speech",
			"much words",
			"so wow",
			"string"
		],
		Category: "Scripting",
		Description: {
			DescriptionSummary:
				"Shows the specified text in Siri or in an alert."
		},
		IconName: "Scripting",
		Input: {
			Multiple: true,
			ParameterKey: "Text",
			Required: true,
			Types: ["WFStringContentItem"]
		},
		InputPassthrough: true,
		Name: "Show Result",
		ParameterSummary: "Show ${Text}",
		Parameters: [
			{
				Class: "WFTextInputParameter",
				DefaultValue: "",
				Key: "Text",
				Multiline: true,
				Placeholder: "Result"
			}
		],
		RequiredResources: ["WFMainThreadResource"],
		Subcategory: "Notification",
		WatchCompatible: true
	},
	"is.workflow.actions.showwebpage": {
		ActionClass: "WFShowWebPageAction",
		ActionKeywords: [
			"safari",
			"view",
			"controller",
			"open",
			"website",
			"preview",
			"quick",
			"look"
		],
		AppIdentifier: "com.apple.mobilesafari",
		Category: "Web",
		CreationDate: "2016-05-17T22:30:00.000Z",
		Description: {
			DescriptionSummary:
				"Shows the web URL passed into the action in a Safari View Controller, allowing you to view the webpage without switching apps."
		},
		Input: {
			Multiple: false,
			ParameterKey: "WFURL",
			Required: true,
			Types: ["WFURLContentItem", "WFRichTextContentItem"]
		},
		InputPassthrough: true,
		Name: "Show Webpage",
		ParameterSummary: "Show webpage at ${WFURL}",
		Parameters: [
			{
				Class: "WFSwitchParameter",
				DefaultValue: false,
				Description:
					"Enter Safari Reader mode if it’s available for the given webpage.",
				Key: "WFEnterSafariReader",
				Label: "Enter Safari Reader"
			},
			{
				AutocapitalizationType: "None",
				Class: "WFTextInputParameter",
				DisableAutocorrection: true,
				Key: "WFURL",
				KeyboardType: "URL",
				Label: "URL",
				Placeholder: "URL",
				TextContentType: "URL"
			}
		],
		RequiredResources: ["WFUserInteractionResource"],
		Subcategory: "Safari",
		UserInterfaces: ["UIKit"]
	},
	"is.workflow.actions.sirikit.donation.handle": {
		ActionClass: "WFHandleDonatedIntentAction",
		Discoverable: false,
		InputPassthrough: true,
		Name: "Unknown Intent",
		Parameters: [
			{
				Class: "WFSwitchParameter",
				DefaultValue: true,
				Key: "ShowWhenRun",
				Label: "Show When Run"
			}
		]
	},
	"is.workflow.actions.skipback": {
		ActionClass: "WFSkipSongAction",
		ActionKeywords: ["ipod", "track", "music", "itunes", "previous"],
		Attribution: "Now Playing",
		Category: "Media",
		Description: {
			DescriptionSummary:
				"Skips to the previous song in the current music queue."
		},
		IconName: "Rewind.png",
		InputPassthrough: true,
		Name: "Skip Back",
		ParameterSummary:
			"Skip back to the ${WFSkipBackBehavior} on ${WFMediaRoute}",
		Parameters: [
			{
				Class: "WFEnumerationParameter",
				DefaultValue: "Beginning",
				Items: ["Beginning", "Previous Song"],
				Key: "WFSkipBackBehavior",
				Label: "Skip To"
			},
			{
				Class: "WFMediaRoutePickerParameter",
				DefaultValue: "Local",
				DisallowedVariableTypes: ["Variable"],
				Key: "WFMediaRoute",
				Label: "Device",
				RouteType: "Endpoint"
			}
		],
		RequiredResources: ["WFMainThreadResource"],
		Subcategory: "Playback",
		WFSkipSongActionMode: "Back"
	},
	"is.workflow.actions.skipforward": {
		ActionClass: "WFSkipSongAction",
		ActionKeywords: ["ipod", "track", "music", "itunes", "next"],
		Attribution: "Now Playing",
		Category: "Media",
		Description: {
			DescriptionSummary:
				"Skips to the next song in the current music queue."
		},
		IconName: "FastForward.png",
		InputPassthrough: true,
		Name: "Skip Forward",
		ParameterSummary: "Skip forward on ${WFMediaRoute}",
		Parameters: [
			{
				Class: "WFMediaRoutePickerParameter",
				DefaultValue: "Local",
				DisallowedVariableTypes: ["Variable"],
				Key: "WFMediaRoute",
				Label: "Device",
				RouteType: "Endpoint"
			}
		],
		RequiredResources: ["WFMainThreadResource"],
		Subcategory: "Playback",
		WFSkipSongActionMode: "Forward"
	},
	"is.workflow.actions.slack.send": {
		ActionClass: "WFSlackPostAction",
		ActionKeywords: ["send", "text", "gif", "image", "video"],
		AppIdentifier: "com.tinyspeck.chatlyio",
		Category: "Sharing",
		CreationDate: "2015-04-01T05:00:00.000Z",
		Description: {
			DescriptionSummary:
				"Posts the input to the specified Slack channel."
		},
		Discontinued: true,
		Input: {
			Multiple: true,
			ParameterKey: "WFSlackInput",
			Required: true,
			Types: ["WFGenericFileContentItem", "WFStringContentItem"]
		},
		InputPassthrough: true,
		LastModifiedDate: "2015-11-24T06:00:00.000Z",
		Name: "Post to Slack",
		ParameterSummary: "Post ${WFSlackInput} to ${SlackChannel}",
		Parameters: [
			{
				AccountClass: "WFSlackAccount",
				AlwaysShowsButton: true,
				Class: "WFAccountPickerParameter",
				DisallowedVariableTypes: ["Ask", "Variable"],
				Key: "WFAccount",
				Label: "Account"
			},
			{
				AccountParameterKey: "WFAccount",
				AlwaysShowsButton: true,
				Class: "WFSlackChannelPickerParameter",
				Key: "SlackChannel",
				Label: "Channel"
			},
			{
				Class: "WFVariablePickerParameter",
				Key: "WFSlackInput",
				Label: "Content"
			}
		],
		RequiredResources: [
			"WFUnavailableResource",
			{
				WFAccountClass: "WFSlackAccount",
				WFResourceClass: "WFAccountAccessResource"
			}
		],
		Subcategory: "Messaging"
	},
	"is.workflow.actions.speaktext": {
		ActionClass: "WFSpeakTextAction",
		ActionKeywords: [
			"speak",
			"dictate",
			"text",
			"say",
			"speech",
			"talk",
			"out",
			"loud"
		],
		Category: "Documents",
		CreationDate: "2014-01-20T06:00:00.000Z",
		Description: {
			DescriptionSummary: "Speaks the inputted text aloud."
		},
		IconName: "Sound.png",
		Input: {
			Multiple: true,
			ParameterKey: "WFText",
			Required: true,
			Types: ["NSString"]
		},
		InputPassthrough: true,
		LastModifiedDate: "2015-01-11T06:00:00.000Z",
		Name: "Speak Text",
		ParameterSummary: "Speak ${WFText}",
		Parameters: [
			{
				Class: "WFSwitchParameter",
				DefaultValue: true,
				Key: "WFSpeakTextWait",
				Label: "Wait Until Finished"
			},
			{
				Class: "WFSpeakTextRateParameter",
				Key: "WFSpeakTextRate",
				Label: "Rate"
			},
			{
				Class: "WFSliderParameter",
				DefaultValue: 1,
				Key: "WFSpeakTextPitch",
				Label: "Pitch",
				MaximumValue: 2,
				MinimumValue: 0.5
			},
			{
				Class: "WFSpeakTextLanguagePickerParameter",
				DefaultValue: "Default",
				Key: "WFSpeakTextLanguage",
				Label: "Language"
			},
			{
				AlwaysShowsButton: true,
				Class: "WFSpeakTextVoicePickerParameter",
				DefaultValue: "Default",
				DisallowedVariableTypes: ["Variable"],
				Key: "WFSpeakTextVoice",
				Label: "Voice",
				RequiredResources: [
					{
						WFParameterKey: "WFSpeakTextLanguage",
						WFParameterRelation: "??",
						WFResourceClass: "WFParameterRelationResource"
					}
				],
				WFSpeakTextLanguageKey: "WFSpeakTextLanguage"
			},
			{
				Class: "WFTextInputParameter",
				Key: "WFText",
				Label: "Text"
			}
		],
		Subcategory: "Text",
		WatchCompatible: true
	},
	"is.workflow.actions.statistics": {
		ActionClass: "WFCalculateStatisticsAction",
		ActionKeywords: [
			"number",
			"average",
			"mean",
			"mode",
			"median",
			"maximum",
			"deviation",
			"sum",
			"minimum"
		],
		AppIdentifier: "com.apple.calculator",
		Attribution: "Math",
		Category: "Scripting",
		CreationDate: "2015-06-16T07:00:00.000Z",
		Description: {
			DescriptionSummary:
				"Calculates statistics on the numbers that are provided as input."
		},
		Input: {
			Multiple: true,
			ParameterKey: "Input",
			Required: true,
			Types: ["NSNumber"]
		},
		Name: "Calculate Statistics",
		Output: {
			Multiple: true,
			OutputName: "Statistics",
			Types: ["NSNumber"]
		},
		ParameterSummary: "Calculate the ${WFStatisticsOperation} of ${Input}",
		Parameters: [
			{
				Class: "WFEnumerationParameter",
				DefaultValue: "Average",
				Items: [
					"Average",
					"Minimum",
					"Maximum",
					"Sum",
					"Median",
					"Mode",
					"Range",
					"Standard Deviation"
				],
				Key: "WFStatisticsOperation",
				Label: "Operation"
			},
			{
				Class: "WFVariablePickerParameter",
				Key: "Input",
				Label: "Input",
				Placeholder: "Input"
			}
		],
		Subcategory: "Math"
	},
	"is.workflow.actions.takephoto": {
		ActionClass: "WFTakePhotoAction",
		ActionKeywords: ["camera", "take", "photo"],
		AppIdentifier: "com.apple.camera",
		Category: "Media",
		Description: {
			DescriptionResult: "Photo from the camera.",
			DescriptionSummary: "Uses the camera to take photos."
		},
		InputPassthrough: false,
		LastModifiedDate: "2015-08-20T07:00:00.000Z",
		Name: "Take Photo",
		Output: {
			Multiple: true,
			OutputName: "Photo",
			Required: true,
			Types: ["UIImage"]
		},
		ParameterSummary: {
			"WFCameraCaptureShowPreview(1),WFPhotoCount,WFCameraCaptureDevice":
				"Take ${WFPhotoCount} with ${WFCameraCaptureDevice} camera",
			"WFCameraCaptureShowPreview,WFCameraCaptureDevice":
				"Take photo with ${WFCameraCaptureDevice} camera"
		},
		Parameters: [
			{
				Class: "WFSwitchParameter",
				DefaultValue: true,
				Key: "WFCameraCaptureShowPreview",
				Label: "Show Camera Preview"
			},
			{
				Class: "WFStepperParameter",
				DefaultValue: 1,
				Key: "WFPhotoCount",
				RequiredResources: [
					{
						WFParameterKey: "WFCameraCaptureShowPreview",
						WFParameterValue: true,
						WFResourceClass: "WFParameterRelationResource"
					}
				],
				StepperDescription: "Number of Photos",
				StepperNoun: "Photo",
				StepperPluralNoun: "Photos",
				StepperPrefix: "Take"
			},
			{
				Class: "WFEnumerationParameter",
				DefaultValue: "Back",
				Items: ["Front", "Back"],
				Key: "WFCameraCaptureDevice",
				Label: "Camera"
			}
		],
		RequiredResources: [
			"WFUserInteractionResource",
			"WFCameraAccessResource"
		],
		Subcategory: "Camera",
		UnsupportedEnvironments: ["Extension"],
		UserInterfaces: ["UIKit"]
	},
	"is.workflow.actions.takevideo": {
		ActionClass: "WFTakeVideoAction",
		ActionKeywords: ["camera", "clip", "record"],
		AppIdentifier: "com.apple.camera",
		Category: "Media",
		Description: {
			DescriptionResult: "Video from the camera.",
			DescriptionSummary: "Uses the camera to take a video clip."
		},
		InputPassthrough: false,
		Name: "Take Video",
		Output: {
			Multiple: false,
			OutputName: "Video",
			Types: ["com.apple.quicktime-movie"]
		},
		ParameterSummary: "Take video with ${WFCameraCaptureDevice} camera",
		Parameters: [
			{
				Class: "WFEnumerationParameter",
				DefaultValue: "Back",
				Items: ["Front", "Back"],
				Key: "WFCameraCaptureDevice",
				Label: "Camera"
			},
			{
				Class: "WFEnumerationParameter",
				DefaultValue: "Medium",
				Items: ["Low", "Medium", "High"],
				Key: "WFCameraCaptureQuality",
				Label: "Quality"
			},
			{
				Class: "WFEnumerationParameter",
				DefaultValue: "Immediately",
				Items: ["On Tap", "Immediately"],
				Key: "WFRecordingStart",
				Label: "Start Recording"
			}
		],
		RequiredResources: [
			"WFUserInteractionResource",
			"WFCameraAccessResource"
		],
		Subcategory: "Camera",
		UserInterfaces: ["UIKit"]
	},
	"is.workflow.actions.text.changecase": {
		ActionClass: "WFHandleCustomIntentAction",
		ActionKeywords: [
			"uppercase",
			"lowercase",
			"title",
			"transform",
			"text",
			"capitalize"
		],
		Attribution: "Text",
		Category: "Documents",
		CreationDate: "2015-01-11T06:00:00.000Z",
		IconName: "Text.png",
		InProcess: true,
		IntentIdentifier:
			"sirikit.intents.custom.com.apple.WorkflowKit.ShortcutsIntents.WFChangeCaseIntent",
		LastModifiedDate: "2015-02-19T08:00:00.000Z",
		ParameterOverrides: {
			type: {
				IntentEnumOverrides: {
					alternatingCase: "cApItAlIzE wItH aLtErNaTiNg cAsE",
					capitalize: "Capitalize Every Word",
					lowercase: "lowercase",
					sentenceCase: "Capitalize with sentence case",
					titleCase: "Capitalize with Title Case",
					uppercase: "UPPERCASE"
				},
				Key: "WFCaseType"
			}
		},
		ResidentCompatible: true,
		Subcategory: "Text Editing",
		SuggestedNever: true
	},
	"is.workflow.actions.text.combine": {
		ActionClass: "WFTextComponentsAction",
		ActionKeywords: ["separate", "delimiter"],
		Attribution: "Text",
		Category: "Documents",
		IconName: "Text.png",
		InProcess: true,
		IntentIdentifier:
			"sirikit.intents.custom.com.apple.WorkflowKit.ShortcutsIntents.WFCombineTextIntent",
		ParameterOverrides: {
			customSeparator: {
				Key: "WFTextCustomSeparator"
			},
			separator: {
				IntentEnumOverrides: {
					custom: "Custom",
					newLines: "New Lines",
					spaces: "Spaces"
				},
				Key: "WFTextSeparator"
			}
		},
		ResidentCompatible: true,
		Subcategory: "Text Editing",
		WFTextComponentsMode: "Combine"
	},
	"is.workflow.actions.text.match": {
		ActionClass: "WFHandleCustomIntentAction",
		ActionKeywords: [
			"finding",
			"matching",
			"searching",
			"regular",
			"expression",
			"regexp"
		],
		Attribution: "Text",
		Category: "Documents",
		Description: {
			DescriptionResult:
				"A list of text items that matched the regular expression"
		},
		IconName: "Text.png",
		InProcess: true,
		IntentIdentifier:
			"sirikit.intents.custom.com.apple.WorkflowKit.ShortcutsIntents.WFMatchTextIntent",
		ParameterOverrides: {
			caseSensitive: {
				Description:
					"When disabled, the capitalization of letters is ignored.",
				Key: "WFMatchTextCaseSensitive"
			},
			pattern: {
				Key: "WFMatchTextPattern"
			}
		},
		ResidentCompatible: true,
		Subcategory: "Text Editing"
	},
	"is.workflow.actions.text.match.getgroup": {
		ActionClass: "WFHandleCustomIntentAction",
		ActionKeywords: [
			"finding",
			"matching",
			"searching",
			"regular",
			"expression",
			"regexp"
		],
		Attribution: "Text",
		Category: "Documents",
		CreationDate: "2016-05-23T07:00:00.000Z",
		IconName: "Text.png",
		InProcess: true,
		IntentIdentifier:
			"sirikit.intents.custom.com.apple.WorkflowKit.ShortcutsIntents.WFMatchTextGetGroupIntent",
		ParameterOverrides: {
			groupIndex: {
				Key: "WFGroupIndex"
			},
			type: {
				IntentEnumOverrides: {
					all: "All Groups",
					atIndex: "Group At Index"
				},
				Key: "WFGetGroupType"
			}
		},
		ResidentCompatible: true,
		Subcategory: "Text Editing"
	},
	"is.workflow.actions.text.replace": {
		ActionClass: "WFReplaceTextAction",
		ActionKeywords: [
			"finding",
			"matching",
			"searching",
			"regular",
			"expression",
			"regexp"
		],
		Category: "Documents",
		Description: {
			DescriptionSummary:
				"Replaces some text passed into the action with other text."
		},
		IconName: "Text.png",
		Input: {
			Multiple: true,
			ParameterKey: "WFInput",
			Required: true,
			Types: ["NSString"]
		},
		InputPassthrough: false,
		Name: "Replace Text",
		Output: {
			Multiple: true,
			OutputName: "Updated Text",
			Types: ["NSString"]
		},
		ParameterSummary:
			"Replace ${WFReplaceTextFind} with ${WFReplaceTextReplace} in ${WFInput}",
		Parameters: [
			{
				Class: "WFTextInputParameter",
				Description: "The text to be replaced.",
				Key: "WFReplaceTextFind",
				Label: "Find Text",
				Placeholder: "Hello"
			},
			{
				Class: "WFTextInputParameter",
				Description:
					"The text to replace all occurrences of Find Text.",
				Key: "WFReplaceTextReplace",
				Label: "Replace With",
				Placeholder: "World"
			},
			{
				Class: "WFSwitchParameter",
				DefaultValue: true,
				Description:
					"When disabled, the capitalization of letters is ignored.",
				Key: "WFReplaceTextCaseSensitive",
				Label: "Case Sensitive"
			},
			{
				Class: "WFSwitchParameter",
				DefaultValue: false,
				Description:
					"When enabled, Find Text is treated as a regular expression.",
				Key: "WFReplaceTextRegularExpression",
				Label: "Regular Expression"
			},
			{
				Class: "WFTextInputParameter",
				Key: "WFInput",
				Label: "Text"
			}
		],
		ResidentCompatible: true,
		Subcategory: "Text Editing"
	},
	"is.workflow.actions.text.split": {
		ActionClass: "WFTextComponentsAction",
		ActionKeywords: ["separate", "delimiter"],
		Attribution: "Text",
		Category: "Documents",
		IconName: "Text.png",
		InProcess: true,
		IntentIdentifier:
			"sirikit.intents.custom.com.apple.WorkflowKit.ShortcutsIntents.WFSplitTextIntent",
		LastModifiedDate: "2016-10-10T19:00:00.000Z",
		ParameterOverrides: {
			customSeparator: {
				Key: "WFTextCustomSeparator"
			},
			separator: {
				IntentEnumOverrides: {
					custom: "Custom",
					everyCharacter: "Every Character",
					newLines: "New Lines",
					spaces: "Spaces"
				},
				Key: "WFTextSeparator"
			}
		},
		ResidentCompatible: true,
		Subcategory: "Text Editing",
		WFTextComponentsMode: "Split"
	},
	"is.workflow.actions.text.translate": {
		ActionClass: "WFTranslateTextAction",
		ActionKeywords: ["microsoft", "bing", "translation", "language"],
		Attribution: "Microsoft Cognitive Services",
		Category: "Documents",
		CreationDate: "2015-02-19T08:00:00.000Z",
		Description: {
			DescriptionNote:
				"Powered by Microsoft Cognitive Services (microsoft.com/cognitive-services). Your text input will be sent to Microsoft to translate your request.",
			DescriptionSummary:
				"Translates the text passed into the action into another language."
		},
		IconName: "Translate.png",
		Input: {
			Multiple: true,
			ParameterKey: "WFInputText",
			Required: true,
			Types: ["NSString"]
		},
		InputPassthrough: false,
		Name: "Translate Text with Microsoft",
		Output: {
			Multiple: true,
			OutputName: "Translated Text",
			Types: ["NSString"]
		},
		ParameterSummary:
			"Translate ${WFInputText} from ${WFSelectedFromLanguage} to ${WFSelectedLanguage}",
		Parameters: [
			{
				Class: "WFTranslateTextLanguagePickerParameter",
				Key: "WFSelectedFromLanguage",
				Label: "Language",
				LanguageDetection: true
			},
			{
				Class: "WFTranslateTextLanguagePickerParameter",
				Key: "WFSelectedLanguage",
				Label: "To"
			},
			{
				Class: "WFTextInputParameter",
				Key: "WFInputText",
				Label: "Text"
			}
		],
		ResidentCompatible: true,
		Subcategory: "Translation"
	},
	"is.workflow.actions.timer.start": {
		ActionClass: "WFStartTimerAction",
		ActionKeywords: ["timer", "set", "clock", "stopwatch", "watch"],
		AppIdentifier: "com.apple.mobiletimer",
		Category: "Calendar",
		Description: {
			DescriptionSummary:
				"Starts a timer in the Clock app for the specified amount of time."
		},
		InputPassthrough: true,
		Name: "Start Timer",
		ParameterSummary: "Start timer for ${WFDuration}",
		Parameters: [
			{
				Class: "WFDurationQuantityFieldParameter",
				Key: "WFDuration",
				Label: "Duration",
				Placeholder: "30",
				PossibleUnits: ["sec", "min", "hr"],
				TextAlignment: "Right"
			}
		],
		RequiredResources: ["WFSiriAccessResource"]
	},
	"is.workflow.actions.todoist.add": {
		ActionClass: "WFTodoistAddAction",
		ActionKeywords: ["note", "text", "todo", "to-do", "task"],
		AppIdentifier: "com.todoist.ios",
		Category: "Text",
		CreationDate: "2015-05-08T05:00:00.000Z",
		Description: {
			DescriptionInput: "Files to attach to the item",
			DescriptionResult: "The URL of the newly created item",
			DescriptionSummary: "Adds a new item to Todoist."
		},
		Input: {
			Multiple: true,
			ParameterKey: "WFTodoistFile",
			Required: false,
			Types: ["WFGenericFileContentItem"]
		},
		LastModifiedDate: "2015-08-20T07:00:00.000Z",
		Name: "Add Todoist Item",
		Output: {
			Multiple: false,
			OutputName: "Todoist Item",
			Types: ["NSURL"]
		},
		ParameterSummary: "Add ${WFTodoistContent}",
		Parameters: [
			{
				Class: "WFTextInputParameter",
				Key: "WFTodoistContent",
				Label: "Item",
				TextAlignment: "Right"
			},
			{
				Class: "WFTodoistProjectPickerParameter",
				DefaultValue: "Inbox",
				Key: "WFTodoistProject",
				Label: "Project"
			},
			{
				Class: "WFDateFieldParameter",
				HintDateMode: "Date",
				Key: "WFTodoistDueDate",
				Label: "Due Date",
				Placeholder: "May 23",
				TextAlignment: "Right"
			},
			{
				Class: "WFDateFieldParameter",
				Key: "WFTodoistReminder",
				Label: "Remind Me On",
				Placeholder: "May 23 at 1 PM",
				TextAlignment: "Right"
			},
			{
				Class: "WFEnumerationParameter",
				DefaultValue: "Email",
				Items: ["Email", "Push Notification", "Text Message"],
				Key: "WFTodoistReminderType",
				Label: "Reminder Type",
				RequiredResources: [
					{
						WFParameterKey: "WFTodoistReminder",
						WFParameterRelation: "!=",
						WFParameterValue: "",
						WFResourceClass: "WFParameterRelationResource"
					}
				]
			},
			{
				Class: "WFEnumerationParameter",
				DefaultValue: "4",
				Items: ["4", "3", "2", "1"],
				Key: "WFTodoistPriority",
				Label: "Priority"
			},
			{
				Class: "WFTextInputParameter",
				Key: "WFTodoistNotes",
				Label: "Notes",
				Multiline: true,
				Placeholder: "Notes"
			},
			{
				Class: "WFVariablePickerParameter",
				Key: "WFTodoistFile",
				Label: "Files",
				Placeholder: "Choose Variable"
			}
		],
		RequiredResources: [
			{
				WFAccountClass: "WFTodoistAccount",
				WFResourceClass: "WFAccountAccessResource"
			}
		]
	},
	"is.workflow.actions.trello.add.board": {
		ActionClass: "WFTrelloCreateBoardAction",
		AppIdentifier: "com.fogcreek.trello",
		Category: "Text",
		CreationDate: "2016-05-12T05:00:00.000Z",
		Description: {
			DescriptionSummary: "Creates a new board in your Trello account."
		},
		Name: "Create Trello Board",
		Output: {
			Multiple: false,
			OutputName: "Trello Board",
			Types: ["WFTrelloBoard"]
		},
		ParameterSummary: "Create the board ${WFTrelloName}",
		Parameters: [
			{
				Class: "WFTextInputParameter",
				Key: "WFTrelloName",
				Label: "Name",
				Placeholder: "Shortcuts",
				TextAlignment: "Right"
			},
			{
				Class: "WFTextInputParameter",
				Key: "WFTrelloDescription",
				Multiline: true,
				Placeholder: "Description"
			}
		],
		RequiredResources: ["WFTrelloAccessResource"],
		ShortName: "Create Board"
	},
	"is.workflow.actions.trello.add.card": {
		ActionClass: "WFTrelloAddCardAction",
		AppIdentifier: "com.fogcreek.trello",
		Category: "Text",
		CreationDate: "2016-05-12T05:00:00.000Z",
		Description: {
			DescriptionSummary:
				"Creates a new card on the specified list and board in your Trello account."
		},
		Name: "Add Trello Card",
		Output: {
			Multiple: false,
			OutputName: "Trello Card",
			Types: ["WFTrelloCard"]
		},
		ParameterSummary:
			"Add ${WFTrelloName} to the ${WFTrelloCardPosition} of ${WFTrelloList} in ${WFTrelloBoard}",
		Parameters: [
			{
				Class: "WFTextInputParameter",
				Key: "WFTrelloName",
				Label: "Item",
				TextAlignment: "Right"
			},
			{
				Class: "WFTrelloBoardPickerParameter",
				Key: "WFTrelloBoard",
				Label: "Board"
			},
			{
				BoardKey: "WFTrelloBoard",
				Class: "WFTrelloListPickerParameter",
				Key: "WFTrelloList",
				Label: "List"
			},
			{
				Class: "WFDateFieldParameter",
				Key: "WFTrelloDueDate",
				Label: "Due",
				Placeholder: "Tomorrow at 1pm",
				TextAlignment: "Right"
			},
			{
				Class: "WFEnumerationParameter",
				DefaultValue: "Top",
				Items: ["Top", "Bottom"],
				Key: "WFTrelloCardPosition",
				Label: "Position"
			},
			{
				Class: "WFVariablePickerParameter",
				Description:
					"A list of items to be attached to the new card as files.",
				Key: "WFTrelloAttachments",
				Label: "Attachments",
				Placeholder: "Choose Variable"
			},
			{
				Class: "WFTextInputParameter",
				Key: "WFTrelloDescription",
				Multiline: true,
				Placeholder: "Description"
			}
		],
		RequiredResources: ["WFTrelloAccessResource"],
		ShortName: "Add Card"
	},
	"is.workflow.actions.trello.add.list": {
		ActionClass: "WFTrelloCreateListAction",
		AppIdentifier: "com.fogcreek.trello",
		Category: "Text",
		CreationDate: "2016-05-12T05:00:00.000Z",
		Description: {
			DescriptionSummary:
				"Creates a new list on the specified board in your Trello account."
		},
		Name: "Create Trello List",
		Output: {
			Multiple: false,
			OutputName: "Trello List",
			Types: ["WFTrelloList"]
		},
		ParameterSummary: "Create the list ${WFTrelloName} in ${WFTrelloBoard}",
		Parameters: [
			{
				Class: "WFTextInputParameter",
				Key: "WFTrelloName",
				Label: "Name",
				Placeholder: "List",
				TextAlignment: "Right"
			},
			{
				Class: "WFTrelloBoardPickerParameter",
				Key: "WFTrelloBoard",
				Label: "Board",
				Placeholder: "Board"
			},
			{
				Class: "WFEnumerationParameter",
				DefaultValue: "Top",
				Items: ["Top", "Bottom"],
				Key: "WFTrelloPosition",
				Label: "Position"
			}
		],
		RequiredResources: ["WFTrelloAccessResource"],
		ShortName: "Create List"
	},
	"is.workflow.actions.trello.get": {
		ActionClass: "WFTrelloGetItemsAction",
		AppIdentifier: "com.fogcreek.trello",
		Category: "Text",
		CreationDate: "2016-05-12T05:00:00.000Z",
		Description: {
			DescriptionSummary:
				"Gets cards, lists, or boards in your Trello account."
		},
		Name: "Get Trello Items",
		Output: {
			Multiple: true,
			OutputName: "Trello Items",
			Types: ["WFTrelloBoard", "WFTrelloList", "WFTrelloCard"]
		},
		Parameters: [
			{
				Class: "WFEnumerationParameter",
				DefaultValue: "Boards",
				Items: ["Boards", "Lists", "Cards"],
				Key: "WFTrelloItemType",
				Label: "Get"
			},
			{
				Class: "WFTrelloBoardPickerParameter",
				Key: "WFTrelloBoard",
				Label: "Board",
				RequiredResources: [
					{
						WFParameterKey: "WFTrelloItemType",
						WFParameterValues: ["Lists", "Cards"],
						WFResourceClass: "WFParameterRelationResource"
					}
				]
			},
			{
				BoardKey: "WFTrelloBoard",
				Class: "WFTrelloListPickerParameter",
				Key: "WFTrelloList",
				Label: "List",
				RequiredResources: [
					{
						WFParameterKey: "WFTrelloItemType",
						WFParameterValue: "Cards",
						WFResourceClass: "WFParameterRelationResource"
					}
				]
			}
		],
		RequiredResources: ["WFTrelloAccessResource"],
		ShortName: "Get Items"
	},
	"is.workflow.actions.trimvideo": {
		ActionClass: "WFTrimVideoAction",
		ActionKeywords: ["clip", "editor", "audio", "video", "movie"],
		Category: "Media",
		Description: {
			DescriptionInput: "The audio or video file to edit.",
			DescriptionResult: "The trimmed media.",
			DescriptionSummary:
				"Presents a view allowing you to trim the media passed into the action."
		},
		IconName: "QuickTime.png",
		Input: {
			Multiple: false,
			ParameterKey: "WFInputMedia",
			Required: true,
			Types: ["WFAVAssetContentItem"]
		},
		Name: "Trim Media",
		Output: {
			Multiple: false,
			OutputName: "Trimmed Media",
			Types: ["com.apple.quicktime-movie"]
		},
		ParameterSummary: "Trim ${WFInputMedia}",
		Parameters: [
			{
				Class: "WFVariablePickerParameter",
				Key: "WFInputMedia",
				Label: "Media",
				Placeholder: "Media"
			}
		],
		RequiredResources: ["WFUserInteractionResource"],
		Subcategory: "Video",
		UserInterfaces: ["UIKit"]
	},
	"is.workflow.actions.tumblr.post": {
		ActionClass: "WFTumblrPostAction",
		ActionKeywords: ["blog"],
		AppIdentifier: "com.tumblr.tumblr",
		Category: "Sharing",
		CreationDate: "2015-01-11T06:00:00.000Z",
		Description: {
			DescriptionResult: "The URL of the new post",
			DescriptionSummary:
				"Posts the content passed into the action to Tumblr."
		},
		Input: {
			Multiple: true,
			ParameterKey: "WFInput",
			Required: true,
			Types: ["NSString", "UIImage", "NSURL", "AVAsset"]
		},
		LastModifiedDate: "2016-02-14T08:00:00.000Z",
		Name: "Post to Tumblr",
		Output: {
			Multiple: false,
			OutputName: "Tumblr Post URL",
			Types: ["WFURLContentItem"]
		},
		ParameterSummary: "Post ${WFInput}",
		Parameters: [
			{
				Class: "WFVariablePickerParameter",
				Key: "WFInput",
				Label: "Content",
				Placeholder: "Content"
			},
			{
				Class: "WFTumblrComposeInAppParameter",
				Key: "WFComposeInApp",
				Label: "Compose In Tumblr"
			},
			{
				Class: "WFTumblrBlogPickerParameter",
				Description: "The name of the blog to post to.",
				Key: "WFBlogName",
				Label: "Blog",
				RequiredResources: [
					{
						WFParameterKey: "WFComposeInApp",
						WFParameterValue: false,
						WFResourceClass: "WFParameterRelationResource"
					}
				]
			},
			{
				Class: "WFDynamicEnumerationParameter",
				DefaultValue: "Text",
				Items: [
					"Text",
					"Photos",
					"Quote",
					"Link",
					"Chat",
					"Audio",
					"Video"
				],
				Key: "WFPostType",
				Label: "Type"
			},
			{
				Class: "WFEnumerationParameter",
				DefaultValue: "Post Now",
				Items: [
					"Post Now",
					"Add to Queue",
					"Save as Draft",
					"Post Privately"
				],
				Key: "WFPostState",
				Label: "Post Status",
				RequiredResources: [
					{
						WFParameterKey: "WFComposeInApp",
						WFParameterValue: false,
						WFResourceClass: "WFParameterRelationResource"
					}
				]
			},
			{
				Class: "WFTextInputParameter",
				Key: "WFPostTitle",
				Label: "Title",
				Placeholder: "optional",
				RequiredResources: [
					{
						WFParameterKey: "WFPostType",
						WFParameterValues: ["Text", "Link", "Chat"],
						WFResourceClass: "WFParameterRelationResource"
					}
				]
			},
			{
				Class: "WFTextInputParameter",
				Key: "WFPostSource",
				Label: "Source",
				Placeholder: "optional",
				RequiredResources: [
					{
						WFParameterKey: "WFPostType",
						WFParameterValue: "Quote",
						WFResourceClass: "WFParameterRelationResource"
					}
				]
			},
			{
				Class: "WFTextInputParameter",
				Key: "WFPostCaption",
				Label: "Caption",
				Placeholder: "optional",
				RequiredResources: [
					{
						WFParameterKey: "WFPostType",
						WFParameterValues: ["Audio", "Video", "Photos"],
						WFResourceClass: "WFParameterRelationResource"
					},
					{
						WFParameterKey: "WFComposeInApp",
						WFParameterValue: false,
						WFResourceClass: "WFParameterRelationResource"
					}
				]
			},
			{
				Class: "WFTextInputParameter",
				Key: "WFPostTags",
				Label: "Tags",
				Placeholder: "shortcuts, apple"
			},
			{
				Class: "WFTextInputParameter",
				Key: "WFPostDescription",
				Label: "Description",
				Multiline: true,
				Placeholder: "Description",
				RequiredResources: [
					{
						WFParameterKey: "WFPostType",
						WFParameterValue: "Link",
						WFResourceClass: "WFParameterRelationResource"
					}
				]
			}
		],
		RequiredResources: [
			{
				RequiredResources: [
					{
						WFParameterKey: "WFComposeInApp",
						WFParameterValue: false,
						WFResourceClass: "WFParameterRelationResource"
					}
				],
				WFResourceClass: "WFTumblrAccessResource"
			},
			{
				AppIdentifier: "com.tumblr.tumblr",
				RequiredResources: [
					{
						WFParameterKey: "WFComposeInApp",
						WFParameterValue: true,
						WFResourceClass: "WFParameterRelationResource"
					}
				],
				WFResourceClass: "WFAppInstalledResource"
			}
		],
		Subcategory: "Social"
	},
	"is.workflow.actions.tweet": {
		ActionClass: "WFSocialAction",
		AppIdentifier: "com.atebits.Tweetie2",
		ICActionIdentifier: "com.atebits.Tweetie2.ShareExtension"
	},
	"is.workflow.actions.unzip": {
		ActionClass: "WFExtractArchiveAction",
		ActionKeywords: ["extract", "unarchive", "unzip", "contents", "gzip"],
		Category: "Documents",
		CreationDate: "2016-09-23T05:00:00.000Z",
		Description: {
			DescriptionInput: "Archive",
			DescriptionSummary:
				"Extracts files from the archive passed as input. Many archive formats are supported, including zip, rar, tar.gz, tar.bz2, tar, gzip, cpio, cab, and iso archives."
		},
		IconName: "Documents.png",
		Input: {
			Multiple: false,
			ParameterKey: "WFArchive",
			Required: true,
			Types: ["public.data"]
		},
		Name: "Extract Archive",
		Output: {
			Multiple: true,
			OutputName: "Files",
			Types: ["WFGenericFileContentItem"]
		},
		ParameterSummary: "Extract ${WFArchive}",
		Parameters: [
			{
				Class: "WFVariablePickerParameter",
				Key: "WFArchive",
				Label: "Archive",
				Placeholder: "Archive"
			}
		],
		Subcategory: "Archives"
	},
	"is.workflow.actions.url": {
		ActionClass: "WFURLAction",
		ActionKeywords: [
			"text",
			"such text",
			"very speech",
			"much words",
			"so wow"
		],
		Category: "Web",
		Constructor: true,
		Description: {
			DescriptionSummary: "Passes the specified URL to the next action."
		},
		IconName: "URL.png",
		Name: "URL",
		Output: {
			Multiple: false,
			OutputName: "URL",
			Types: ["NSURL"]
		},
		ParameterSummary: "${WFURLActionURL}",
		Parameters: [
			{
				Class: "WFURLParameter",
				Key: "WFURLActionURL",
				Label: "URL",
				Placeholder: "apple.com"
			}
		],
		ResidentCompatible: true,
		Subcategory: "URLs"
	},
	"is.workflow.actions.url.expand": {
		ActionClass: "WFExpandURLAction",
		ActionKeywords: ["clean", "link", "links", "long", "short"],
		Category: "Web",
		CreationDate: "2015-02-03T08:00:00.000Z",
		Description: {
			DescriptionNote:
				'The expanded URL is cleaned, removing unnecessary parameters such as "utm_source".',
			DescriptionResult:
				"The full, expanded URL, or the original URL if the URL was not shortened",
			DescriptionSummary:
				"This action expands and cleans up URLs which have been shortened using a URL shortening service like TinyURL or Bit.ly."
		},
		IconName: "URL.png",
		Input: {
			Multiple: true,
			ParameterKey: "URL",
			Required: true,
			Types: ["WFURLContentItem"]
		},
		Name: "Expand URL",
		Output: {
			Multiple: true,
			OutputName: "Expanded URL",
			Types: ["WFURLContentItem"]
		},
		ParameterSummary: "Expand ${URL}",
		Parameters: [
			{
				AutocapitalizationType: "None",
				Class: "WFTextInputParameter",
				DisableAutocorrection: true,
				Key: "URL",
				KeyboardType: "URL",
				Label: "URL",
				Placeholder: "URL",
				TextContentType: "URL"
			}
		],
		RequiredResources: ["WFRemoteServerAccessResource"],
		ResidentCompatible: true,
		Subcategory: "URLs"
	},
	"is.workflow.actions.url.getheaders": {
		ActionClass: "WFGetURLHeadersAction",
		ActionKeywords: ["URL", "web", "http"],
		Attribution: "Network",
		Category: "Web",
		CreationDate: "2016-06-04T05:00:00.000Z",
		Description: {
			DescriptionSummary:
				"Retrieves the HTTP headers of the URL passed as input using a HEAD request."
		},
		IconName: "Downloads.png",
		Input: {
			Multiple: true,
			ParameterKey: "WFInput",
			Required: true,
			Types: ["WFURLContentItem"]
		},
		InputPassthrough: false,
		Name: "Get Headers of URL",
		Output: {
			Multiple: true,
			OutputName: "Headers of URL",
			Types: ["NSDictionary"]
		},
		ParameterSummary: "Get headers of ${WFInput}",
		Parameters: [
			{
				AllowsMultipleValues: false,
				AutocapitalizationType: "None",
				Class: "WFTextInputParameter",
				DisableAutocorrection: true,
				Key: "WFInput",
				KeyboardType: "URL",
				Label: "URL",
				Placeholder: "URL",
				TextContentType: "URL"
			}
		],
		RequiredResources: ["WFRemoteServerAccessResource"],
		ResidentCompatible: true,
		ShortName: "Get Headers",
		Subcategory: "Web Requests",
		SuggestedNever: true
	},
	"is.workflow.actions.urlencode": {
		ActionClass: "WFURLEncodeAction",
		ActionKeywords: [
			"URL",
			"encode",
			"decode",
			"x",
			"callback",
			"x-callback",
			"xcallback"
		],
		Category: "Scripting",
		CreationDate: "2015-01-11T06:00:00.000Z",
		Description: {
			DescriptionSummary:
				"Encodes or decodes text passed into the action to be suitable for inclusion in a URL by adding or removing percent escapes when appropriate."
		},
		IconName: "URL.png",
		Input: {
			Multiple: true,
			ParameterKey: "WFInput",
			Required: true,
			Types: ["WFStringContentItem"]
		},
		Name: "URL Encode",
		Output: {
			Multiple: true,
			OutputName: "URL Encoded Text",
			Types: ["WFStringContentItem"]
		},
		ParameterSummary: "URL ${WFEncodeMode} ${WFInput}",
		Parameters: [
			{
				Class: "WFEnumerationParameter",
				DefaultValue: "Encode",
				Items: ["Encode", "Decode"],
				Key: "WFEncodeMode",
				Label: "Mode"
			},
			{
				Class: "WFTextInputParameter",
				Key: "WFInput",
				Label: "Text",
				Placeholder: "Text"
			}
		],
		ResidentCompatible: true,
		Subcategory: "X-Callback",
		SuggestedNever: true
	},
	"is.workflow.actions.useractivity.open": {
		ActionClass: "WFOpenUserActivityAction",
		Discoverable: false,
		InputPassthrough: true,
		Name: "Unknown User Activity"
	},
	"is.workflow.actions.venmo.pay": {
		ActionClass: "WFHandlePaymentIntentAction",
		ActionKeywords: [
			"venmo",
			"money",
			"send",
			"pay",
			"request",
			"cash",
			"curency",
			"dollars"
		],
		Category: "Contacts",
		Description: {
			DescriptionSummary:
				"Sends a payment to the specified people using a payment app on your device."
		},
		InputPassthrough: true,
		IntentIdentifier: "sirikit.intent.payments.SendPaymentIntent",
		Name: "Send Payment",
		ParameterSummary:
			"Send $${WFVenmoActionAmount} to ${WFVenmoActionRecipients}",
		Parameters: [
			{
				Class: "WFIntentAppPickerParameter",
				DefaultValue: "com.apple.PassKit.PassKitIntentsExtension",
				DisallowedVariableTypes: ["Ask", "Variable"],
				IntentName: "INSendPaymentIntent",
				Key: "IntentAppIdentifier",
				Label: "App"
			},
			{
				AllowsMultipleValues: true,
				Class: "WFContactHandleFieldParameter",
				IntentSlotName: "payee",
				Key: "WFVenmoActionRecipients",
				Label: "Recipients",
				Placeholder: "Phone or email"
			},
			{
				AllowsDecimalNumbers: true,
				Class: "WFNumberFieldParameter",
				IntentSlotName: "currencyAmount",
				Key: "WFVenmoActionAmount",
				Label: "Amount",
				Placeholder: "7.00",
				TextAlignment: "Right"
			},
			{
				Class: "WFSwitchParameter",
				DefaultValue: false,
				Key: "WFVenmoActionAppSwitch",
				Label: "Open in App"
			},
			{
				Class: "WFTextInputParameter",
				IntentSlotName: "note",
				Key: "WFVenmoActionNote",
				Label: "Note",
				Multiline: true,
				Placeholder: "Note"
			}
		],
		Subcategory: "Payments"
	},
	"is.workflow.actions.venmo.request": {
		ActionClass: "WFHandlePaymentIntentAction",
		ActionKeywords: [
			"venmo",
			"money",
			"send",
			"pay",
			"request",
			"cash",
			"curency",
			"dollars"
		],
		Category: "Contacts",
		Description: {
			DescriptionSummary:
				"Requests a payment from the specified people using a payment app on your device."
		},
		InputPassthrough: true,
		IntentIdentifier: "sirikit.intent.payments.RequestPaymentIntent",
		Name: "Request Payment",
		ParameterSummary:
			"Request $${WFVenmoActionAmount} from ${WFVenmoActionRecipients}",
		Parameters: [
			{
				Class: "WFIntentAppPickerParameter",
				DefaultValue: "com.apple.PassKit.PassKitIntentsExtension",
				DisallowedVariableTypes: ["Ask", "Variable"],
				IntentName: "INRequestPaymentIntent",
				Key: "IntentAppIdentifier",
				Label: "App"
			},
			{
				AllowsMultipleValues: true,
				Class: "WFContactHandleFieldParameter",
				IntentSlotName: "payer",
				Key: "WFVenmoActionRecipients",
				Label: "Recipients",
				Placeholder: "Contact"
			},
			{
				AllowsDecimalNumbers: true,
				Class: "WFNumberFieldParameter",
				IntentSlotName: "currencyAmount",
				Key: "WFVenmoActionAmount",
				Label: "Amount",
				TextAlignment: "Right"
			},
			{
				Class: "WFSwitchParameter",
				DefaultValue: false,
				Key: "WFVenmoActionAppSwitch",
				Label: "Open in App"
			},
			{
				Class: "WFSwitchParameter",
				DefaultValue: true,
				Key: "ShowWhenRun",
				Label: "Show When Run",
				RequiredResources: [
					{
						WFParameterKey: "WFVenmoActionAppSwitch",
						WFParameterValue: false,
						WFResourceClass: "WFParameterRelationResource"
					}
				]
			},
			{
				Class: "WFTextInputParameter",
				IntentSlotName: "note",
				Key: "WFVenmoActionNote",
				Label: "Note",
				Multiline: true,
				Placeholder: "Note"
			}
		],
		RequiredResources: [
			{
				RequiredResources: [
					{
						WFParameterKey: "ShowWhenRun",
						WFParameterValue: false,
						WFResourceClass: "WFParameterRelationResource"
					}
				],
				WFResourceClass: "WFRequestPaymentAccessResource"
			}
		],
		Subcategory: "Payments"
	},
	"is.workflow.actions.vibrate": {
		ActionClass: "WFVibrateAction",
		ActionKeywords: [
			"vibration",
			"taptic",
			"haptic",
			"notification",
			"alert"
		],
		Category: "Scripting",
		Description: {
			DescriptionSummary:
				"Vibrates the device for a short amount of time."
		},
		IconName: "Notification.png",
		InputPassthrough: true,
		Name: "Vibrate Device",
		ParameterSummary: "Vibrate device",
		Parameters: [
			{
				Class: "WFEnumerationParameter",
				DefaultValue: "Default",
				Description:
					"When run on Apple Watch, the selected pattern will be tapped on to your wrist.",
				Hidden: true,
				Items: [
					"Default",
					"Up Direction",
					"Down Direction",
					"Success",
					"Failure",
					"Retry",
					"Start",
					"Stop",
					"Click"
				],
				Key: "WFVibrateHapticType",
				Label: "Haptic Pattern",
				RequiredResources: [
					{
						WFResourceClass: "WFWorkflowTypeResource",
						WFWorkflowType: "WatchKit"
					}
				]
			}
		],
		RequiredResources: [
			{
				WFDeviceAttributes: {
					WFDeviceAttributeCapabilities: ["Vibration"]
				},
				WFResourceClass: "WFDeviceAttributesResource"
			}
		],
		Subcategory: "Notification"
	},
	"is.workflow.actions.viewresult": {
		ActionClass: "WFViewContentGraphAction",
		Category: "Scripting",
		Description: {
			DescriptionSummary:
				"Shows the results of the previous action in the Content Graph."
		},
		IconName: "Graph.png",
		Input: {
			Multiple: true,
			ParameterKey: "WFInput",
			Required: true,
			Types: ["WFContentItem"]
		},
		InputPassthrough: true,
		Name: "View Content Graph",
		ParameterSummary: "View Content Graph of ${WFInput}",
		Parameters: [
			{
				Class: "WFVariablePickerParameter",
				Key: "WFInput",
				Label: "Input",
				Placeholder: "Input"
			}
		],
		RequiredResources: ["WFUserInteractionResource"],
		ShortName: "Content Graph",
		Subcategory: "Items",
		UserInterfaces: ["UIKit"]
	},
	"is.workflow.actions.waittoreturn": {
		ActionClass: "WFWaitToReturnAction",
		ActionKeywords: ["wait"],
		Category: "Scripting",
		Description: {
			DescriptionSummary:
				"Pauses execution until you leave the Shortcuts app and return to it.\n\nThis action might be useful after an action that switches apps, to pause execution until you return to the Shortcuts app."
		},
		IconName: "Scripting.png",
		InputPassthrough: true,
		Name: "Wait to Return",
		ParameterSummary: "Wait to return",
		RequiredResources: ["WFMainThreadResource"],
		Subcategory: "Control Flow"
	},
	"is.workflow.actions.weather.currentconditions": {
		ActionClass: "WFGetCurrentWeatherConditionsAction",
		ActionKeywords: [
			"current",
			"temperature",
			"visibility",
			"humidity",
			"pressure",
			"wind",
			"sunrise",
			"sunset"
		],
		AppIdentifier: "com.apple.weather",
		Category: "Location",
		Description: {
			DescriptionAttribution: {
				Description: "Weather information provided by ${Link}",
				Link: {
					Text: "The Weather Channel",
					URL: "https://www.weather.com"
				}
			},
			DescriptionSummary:
				"Gets the current weather conditions at the specified location."
		},
		IconName: "Weather.png",
		InputPassthrough: false,
		Name: "Get Current Weather",
		Output: {
			Multiple: false,
			OutputName: "Weather Conditions",
			Types: ["WFWeatherData"]
		},
		ParameterSummary: "Get current weather at ${WFWeatherCustomLocation}",
		Parameters: [
			{
				Class: "WFLocationParameter",
				CurrentLocationAccuracy: "HundredMeters",
				DefaultToCurrentLocation: true,
				Key: "WFWeatherCustomLocation",
				Label: "Location"
			}
		],
		RequiredResources: [
			"WFWeatherAttributionAccessResource",
			{
				RequiredResources: [
					{
						WFParameterKey: "WFWeatherCustomLocation",
						WFParameterValue: {
							isCurrentLocation: true
						},
						WFResourceClass: "WFParameterRelationResource"
					}
				],
				WFResourceClass: "WFLocationAccessResource"
			}
		],
		ResidentCompatible: true,
		Subcategory: "Weather"
	},
	"is.workflow.actions.weather.forecast": {
		ActionClass: "WFGetWeatherForecastAction",
		ActionKeywords: [
			"current",
			"temperature",
			"visibility",
			"humidity",
			"pressure",
			"wind",
			"sunrise",
			"sunset"
		],
		AppIdentifier: "com.apple.weather",
		Category: "Location",
		Description: {
			DescriptionAttribution: {
				Description: "Weather information provided by ${Link}",
				Link: {
					Text: "The Weather Channel",
					URL: "https://www.weather.com"
				}
			},
			DescriptionSummary:
				"Gets an hourly or daily weather forecast at the specified location."
		},
		IconName: "Weather.png",
		InputPassthrough: false,
		Name: "Get Weather Forecast",
		Output: {
			Multiple: true,
			OutputName: "Weather Conditions",
			Types: ["WFWeatherData"]
		},
		ParameterSummary:
			"Get ${WFWeatherForecastType} forecast at ${WFWeatherCustomLocation}",
		Parameters: [
			{
				Class: "WFLocationParameter",
				CurrentLocationAccuracy: "HundredMeters",
				DefaultToCurrentLocation: true,
				Key: "WFWeatherCustomLocation",
				Label: "Location"
			},
			{
				Class: "WFEnumerationParameter",
				DefaultValue: "Daily",
				Items: ["Hourly", "Daily"],
				Key: "WFWeatherForecastType",
				Label: "Type"
			}
		],
		RequiredResources: [
			"WFWeatherAttributionAccessResource",
			"WFLocationAccessResource"
		],
		ResidentCompatible: true,
		Subcategory: "Weather"
	},
	"is.workflow.actions.wifi.set": {
		ACECommandClass: "SASettingSetWiFi",
		ACESettingValueKey: "OnValue",
		ActionClass: "WFACESetWiFiAction",
		ActionKeywords: [
			"airport",
			"wifi",
			"wi-fi",
			"wireless",
			"internet",
			"network",
			"wlan"
		],
		Attribution: "Wi-Fi",
		Category: "Scripting",
		Description: {
			DescriptionSummary: "Sets the device’s Wi-Fi to on or off."
		},
		IconName: "Wi-Fi.png",
		InputPassthrough: true,
		Name: "Set Wi-Fi",
		Parameters: [
			{
				Class: "WFSwitchParameter",
				DefaultValue: true,
				Key: "OnValue",
				Label: "Wi-Fi"
			}
		],
		RequiredResources: ["WFSiriAccessResource"],
		Subcategory: "Network",
		UnsupportedEnvironments: ["WatchOS"]
	},
	"is.workflow.actions.wordpress.post": {
		ActionClass: "WFWordPressPostAction",
		AppIdentifier: "org.wordpress",
		Category: "Sharing",
		CreationDate: "2015-11-24T06:00:00.000Z",
		Description: {
			DescriptionResult: "The URL of the new blog post",
			DescriptionSummary:
				"Posts the input to a WordPress blog as a new post or page."
		},
		Input: {
			Multiple: true,
			ParameterKey: "WFInput",
			Required: true,
			Types: [
				"WFRichTextContentItem",
				"WFStringContentItem",
				"WFImageContentItem"
			]
		},
		LastModifiedDate: "2016-03-08T06:00:00.000Z",
		Name: "Post to WordPress",
		Output: {
			Multiple: false,
			OutputName: "WordPress Post URL",
			Types: ["NSURL"]
		},
		ParameterSummary: "Post ${WFInput} as ${Title}",
		Parameters: [
			{
				AccountClass: "WFWordPressAccount",
				Class: "WFAccountPickerParameter",
				DisallowedVariableTypes: ["Ask", "Variable"],
				Key: "WFAccount",
				Label: "Account"
			},
			{
				Class: "WFDynamicEnumerationParameter",
				DisallowedVariableTypes: ["Ask", "Variable"],
				Key: "Blog",
				Label: "Blog"
			},
			{
				Class: "WFTextInputParameter",
				Key: "Title",
				Label: "Title",
				Placeholder: "Title",
				TextAlignment: "Right"
			},
			{
				Class: "WFDynamicEnumerationParameter",
				Key: "Type",
				Label: "Type"
			},
			{
				Class: "WFDynamicEnumerationParameter",
				Key: "Format",
				Label: "Format"
			},
			{
				Class: "WFDynamicEnumerationParameter",
				Key: "Status",
				Label: "Status"
			},
			{
				Class: "WFDynamicTagFieldParameter",
				Key: "Categories",
				Label: "Categories",
				Placeholder: "Finance, News",
				TextAlignment: "Right"
			},
			{
				Class: "WFDynamicTagFieldParameter",
				Key: "Tags",
				Label: "Tags",
				Placeholder: "stock market, trends",
				TextAlignment: "Right"
			},
			{
				Class: "WFExpandingParameter",
				Key: "Advanced",
				Label: "Advanced"
			},
			{
				Class: "WFSwitchParameter",
				Key: "AllowComments",
				Label: "Allow Comments",
				RequiredResources: [
					{
						WFParameterKey: "Advanced",
						WFParameterValue: true,
						WFResourceClass: "WFParameterRelationResource"
					}
				]
			},
			{
				Class: "WFTextInputParameter",
				Key: "Slug",
				Label: "Slug",
				Placeholder: "quarterly-results",
				RequiredResources: [
					{
						WFParameterKey: "Advanced",
						WFParameterValue: true,
						WFResourceClass: "WFParameterRelationResource"
					}
				],
				TextAlignment: "Right"
			},
			{
				Class: "WFTextInputParameter",
				Key: "Excerpt",
				Label: "Excerpt",
				Placeholder: "An overall great quarter",
				RequiredResources: [
					{
						WFParameterKey: "Advanced",
						WFParameterValue: true,
						WFResourceClass: "WFParameterRelationResource"
					}
				],
				TextAlignment: "Right"
			},
			{
				Class: "WFDateFieldParameter",
				Key: "Date",
				Label: "Publish Date",
				Placeholder: "optional",
				RequiredResources: [
					{
						WFParameterKey: "Advanced",
						WFParameterValue: true,
						WFResourceClass: "WFParameterRelationResource"
					}
				],
				TextAlignment: "Right"
			},
			{
				Class: "WFDynamicEnumerationParameter",
				Key: "Template",
				Label: "Template",
				RequiredResources: [
					{
						WFParameterKey: "Advanced",
						WFParameterValue: true,
						WFResourceClass: "WFParameterRelationResource"
					}
				]
			},
			{
				Class: "WFVariablePickerParameter",
				Key: "ThumbnailImage",
				Label: "Featured Image",
				Placeholder: "Choose Variable",
				RequiredResources: [
					{
						WFParameterKey: "Advanced",
						WFParameterValue: true,
						WFResourceClass: "WFParameterRelationResource"
					}
				]
			},
			{
				Class: "WFExpandingParameter",
				Key: "ShowCustomFields",
				Label: "Custom Fields",
				RequiredResources: [
					{
						WFParameterKey: "Advanced",
						WFParameterValue: true,
						WFResourceClass: "WFParameterRelationResource"
					}
				]
			},
			{
				Class: "WFDictionaryParameter",
				Key: "CustomFields",
				Label: "Custom Fields",
				RequiredResources: [
					{
						WFParameterKey: "Advanced",
						WFParameterValue: true,
						WFResourceClass: "WFParameterRelationResource"
					},
					{
						WFParameterKey: "ShowCustomFields",
						WFParameterValue: true,
						WFResourceClass: "WFParameterRelationResource"
					}
				]
			},
			{
				Class: "WFVariablePickerParameter",
				Key: "WFInput",
				Label: "Content",
				Placeholder: "Content"
			}
		],
		RequiredResources: [
			{
				WFAccountClass: "WFWordPressAccount",
				WFResourceClass: "WFAccountAccessResource"
			}
		]
	},
	"is.workflow.actions.wunderlist.add": {
		ActionClass: "WFWunderlistAddAction",
		ActionKeywords: ["note", "text", "todo", "to-do", "task"],
		AppIdentifier: "com.6wunderkinder.wunderlistmobile",
		Category: "Text",
		CreationDate: "2015-04-23T05:00:00.000Z",
		Description: {
			DescriptionInput: "Files to attach to the task",
			DescriptionResult: "The URL of the newly created task",
			DescriptionSummary: "Adds a new task to Wunderlist."
		},
		Input: {
			Multiple: true,
			ParameterKey: "WFWunderlistFile",
			Required: false,
			Types: ["WFGenericFileContentItem"]
		},
		Name: "Add Wunderlist Task",
		Output: {
			Multiple: false,
			OutputName: "Wunderlist Task",
			Types: ["NSURL"]
		},
		ParameterSummary: "Add ${WFWunderlistTitle} to ${WFWunderlistList}",
		Parameters: [
			{
				Class: "WFTextInputParameter",
				Key: "WFWunderlistTitle",
				Label: "Task",
				TextAlignment: "Right"
			},
			{
				Class: "WFWunderlistListPickerParameter",
				Key: "WFWunderlistList",
				Label: "List"
			},
			{
				Class: "WFDateFieldParameter",
				Key: "WFWunderlistDueDate",
				Label: "Due Date",
				Placeholder: "optional",
				TextAlignment: "Right"
			},
			{
				Class: "WFDateFieldParameter",
				Key: "WFWunderlistReminder",
				Label: "Reminder",
				Placeholder: "optional",
				TextAlignment: "Right"
			},
			{
				Class: "WFSwitchParameter",
				Key: "WFWunderlistStarred",
				Label: "Starred"
			},
			{
				Class: "WFTextInputParameter",
				Key: "WFWunderlistNotes",
				Label: "Notes",
				Multiline: true,
				Placeholder: "Notes"
			},
			{
				Class: "WFVariablePickerParameter",
				Key: "WFWunderlistFile",
				Label: "File",
				Placeholder: "Choose Variable"
			}
		],
		RequiredResources: [
			{
				WFAccountClass: "WFWunderlistAccount",
				WFResourceClass: "WFAccountAccessResource"
			}
		],
		ShortName: "Add Task"
	}
};
