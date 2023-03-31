---
type: article
fc-calendar: Gregorian Calendar
fc-date: 
year: <% tp.file.creation_date("YYYY") %>
month: <% tp.file.creation_date("MMMM") %>
day: <% tp.file.creation_date("DD") %>
creation date: <% tp.file.creation_date() %>
modification date: <% tp.file.last_modified_date("dddd Do MMMM YYYY HH:mm:ss") %>
---
<% await tp.file.move("Idea/" + tp.file.title) %>
## Article link:
<% tp.file.cursor(1) %>
_____
## Thoughts
### New things I learned
<% tp.file.cursor(2) %>
### What points do i disagree with the author
<% tp.file.cursor(3) %>
### What question would i ask the author
<% tp.file.cursor(3) %>

