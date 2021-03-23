---
title: '@ws'
description: Defin WebSocket endpoints
---

Define WebSocket endpoint and Lambda handler functions.

### Example

This `app.arc` file defines both HTTP and WebSocket endpoints:

<arc-viewer default-tab=arc>
<div slot=contents class=bg-g4>

<arc-tab label=arc>
<h5>arc</h5>
<div slot=content>

```arc
@app
myapp

@http
get /

@ws

```

</div>
</arc-tab>

<arc-tab label=json>
<h5>json</h5>
<div slot=content>

```json
{
  "architect": {
    "app": "myapp",
    "http": [
      [ "get", "/" ]
    ],
    "ws": {}
  },
  "start": "npx sandbox",
  "dependencies": {
    "@architect/architect": "latest"
  }
}
```

</div>
</arc-tab>

<arc-tab label=toml>
<h5>toml</h5>
<div slot=content>

```toml
app="testapp"

http=[
 [ "get", "/" ]
]

"ws"
```

</div>
</arc-tab>

<arc-tab label=yaml>
<h5>yaml</h5>
<div slot=content>

```yml
---
app: testapp

http:
- get: "/"

ws: ~
```

</div>
</arc-tab>

</div>
</arc-viewer>

Running `arc create` generates the following functions:

```bash
/
|-src
| |-http
| | '-get-index/
| '-ws
|   |-connect/
|   |-default/
|   '-disconnect/
'-app.arc
```
