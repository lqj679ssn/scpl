
## Contacts / Contacts (internally `is.workflow.actions.contacts`)

> This action is not yet complete. Some arguments may be missing.

> This action requires that Shortcuts has permission to use WFContactAccessResource.


## description

### summary

Passes the specified contacts to the next action.


### usage
```
Contacts NotImplemented
```

### arguments

---

#### This parameter is not implemented yet.

The parameter type is WFContactFieldParameter. If you need to use this parameter, you may
be able to use a raw value. Try converting a .shortcut to a .scpl containing
the values you want in this parameter.

---

### source json (for developers)

```json
{
	"ActionClass": "WFContactsAction",
	"ActionKeywords": [
		"contact",
		"person",
		"people"
	],
	"AppIdentifier": "com.apple.MobileAddressBook",
	"Category": "Contacts",
	"Description": {
		"DescriptionSummary": "Passes the specified contacts to the next action."
	},
	"Name": "Contacts",
	"Output": {
		"Multiple": true,
		"OutputName": "Contacts",
		"Types": [
			"WFContact"
		]
	},
	"Parameters": [
		{
			"AllowsTextEntry": false,
			"Class": "WFContactFieldParameter",
			"Key": "WFContact",
			"Placeholder": "Press + to add contacts"
		}
	],
	"RequiredResources": [
		"WFContactAccessResource"
	],
	"Subcategory": "Contacts"
}
```
