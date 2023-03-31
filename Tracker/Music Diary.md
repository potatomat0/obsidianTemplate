```dataview
TABLE title as "Title", file.ctime as "Date added", type as "Type"
WHERE type="album" or type="EP" or type ="compilation" AND file.name !="Music Template"
SORT file.ctime DESC
```

