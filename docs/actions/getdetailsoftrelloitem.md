
## Get Details of Trello Item / GetDetailsofTrelloItem (internally `is.workflow.actions.properties.trello`)

> This action is not yet complete. Some arguments may be missing.

> This action requires that Shortcuts has permission to use WFTrelloAccessResource.



### usage
```
GetDetailsofTrelloItem NotImplemented
```

### arguments

---

#### This parameter is not implemented yet.

The parameter type is _UndefinedCoercionClass. If you need to use this parameter, you may
be able to use a raw value. Try converting a .shortcut to a .scpl containing
the values you want in this parameter.

---

### source json (for developers)

```json
{
	"ActionClass": "WFContentItemPropertiesAction",
	"AppIdentifier": "com.fogcreek.trello",
	"Category": "Text",
	"CreationDate": "2016-03-15T07:00:00.000Z",
	"Input": {
		"Multiple": true,
		"Required": true,
		"Types": [
			"WFTrelloBoardContentItem",
			"WFTrelloListContentItem",
			"WFTrelloCardContentItem"
		]
	},
	"Name": "Get Details of Trello Item",
	"RequiredResources": [
		"WFTrelloAccessResource"
	],
	"WFContentItemClass": "WFTrelloItemContentItem",
	"Parameters": [
		{
			"Class": "_UndefinedCoercionClass",
			"Key": "_UndefinedCoercion"
		}
	]
}
```
