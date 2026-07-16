# Find+ for Node-RED

**Find+** is an editor plug-in that adds an independent advanced search sidebar to Node-RED. It does not replace or modify the built-in search.

It was created for large flows where a basic text search is not enough — especially when a value such as `810` must be found as an exact number rather than as part of `1810` or `8100`.

## Features

- Search node properties and Function node source code.
- Case-sensitive search.
- Whole-word search.
- Regular expressions.
- Exact-number search.
- Filter by node type with `type:...`.
- Restrict results to the active flow.
- Optionally include configuration nodes.
- Show the matching property and line number for multiline text.
- Reveal a node without closing the Find+ sidebar.
- Light and dark theme support.

## Quick syntax

```text
alarm
"exact phrase"
case:Echo
word:camera
num:810
type:function alarm
flow:current alarm
re:id\s*:\s*810
```

Prefixes can be combined:

```text
type:function flow:current case:Echo
```

## Installation from a release package

Download the `.tgz` file from the GitHub Release and copy it to the machine running Node-RED.

```bash
cd ~/.node-red
npm install ~/Downloads/node-red-plugin-advanced-search-0.4.1.tgz
```

Replace `~/Downloads/` with the directory where the file was downloaded.

Restart Node-RED:

```bash
node-red-restart
```

or, depending on the installation:

```bash
sudo systemctl restart nodered
```

Reload the editor with `Ctrl+F5`. A **Find+** tab should appear in the sidebar.

The plug-in runs in the browser, but it must be installed on the machine running Node-RED because that machine serves the editor plug-in files.

## Removal

```bash
cd ~/.node-red
npm remove node-red-plugin-advanced-search
```

Restart Node-RED and reload the editor.

## Compatibility

| Node-RED version | Find+ |
|---|---:|
| 4.1.x | Yes |
| 5.x | Yes |

Currently tested on:

- Node-RED 5.0.1
- Node-RED 4.1.11

## Important implementation note

The sidebar and editor action use Node-RED editor plug-in APIs. Reading the loaded node model and calling `RED.view.reveal` rely on editor APIs that are not all formally documented as stable public interfaces. Future Node-RED releases may therefore require small compatibility updates.

## Project status

Find+ is experimental. It is being shared through GitHub first so the source, releases and issue history remain visible before considering publication through npm or the Node-RED Flow Library.

## Privacy and runtime impact

Find+ does not send flow data anywhere. Searches are performed locally in the browser against the flow model already loaded by the Node-RED editor. It adds no runtime nodes and does not participate in message processing.

## Reporting problems

Please open a GitHub issue and include:

- Node-RED version;
- Node.js version;
- browser and version;
- the search query used;
- browser console errors, if any;
- clear reproduction steps.

## License

Apache License 2.0. See [LICENSE](LICENSE).
