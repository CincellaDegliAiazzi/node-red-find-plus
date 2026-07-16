# Changelog

All notable changes to this project are documented here.

## [0.5.6] - 2026-07-16

### Fixed

- Replaced the Compact label/input pair with a self-contained checkbox control so Node-RED global label styles cannot place the text below the box.
- Forced the search field to stretch to the full available sidebar width.

## [0.5.5] - 2026-07-16

### Added

- Grouped search results by node type, with a small header and node count for each group.

### Changed

- Rebuilt the Compact checkbox with a fixed CSS-drawn check mark so its box no longer shifts visually between checked and unchecked states.
- Sorted nodes alphabetically inside each node-type group.

## [0.5.4] - 2026-07-16

### Changed

- Returned the Search and Clear buttons below the search field so the input can use the full sidebar width.
- Added explicit spacing between the Compact checkbox and its label.
- Increased the font size and line spacing of the second descriptive line in each result card.

## [0.5.3] - 2026-07-16

### Changed

- Removed the redundant heading and descriptive subtitle from the sidebar to recover vertical space.
- Placed the search field, Search button and Clear button on one aligned row.
- Made the compact-results checkbox visible in its unchecked state, increased label spacing and enlarged the label text.
- Increased the size and contrast of the result summary.

## [0.5.2] - 2026-07-16

### Changed

- Split the result summary and navigation controls into two rows to avoid crowding in narrow sidebars.
- Placed the Compact option on the left and previous/next navigation on the right.
- Replaced the browser-native compact checkbox presentation with a precisely aligned custom checkbox and wider label spacing.

## [0.5.1] - 2026-07-16

### Added

- Compact-results checkbox that collapses every found node to a single row while preserving the number of matching lines or properties.
- Exact per-node occurrence totals and matching-line/property counts even when only the first eight detailed locations are displayed.
- A notice when a result contains more matching lines or properties than are shown.

### Changed

- Search and clear controls now have visible borders, equal dimensions and wider spacing so they read as deliberate buttons.

## [0.5.0] - 2026-07-16

### Added

- Previous and next controls for moving through found nodes.
- Current-result indicator and visual highlighting of the selected result card.
- Node-type colour indicators on result cards.

### Fixed

- Code-like searches containing an unknown colon-prefixed token and quoted text, such as `topic: "LACAR"`, are now treated as literal text instead of being rewritten by the query parser.

### Changed

- Corrected the remaining Italian search-field placeholder in the English interface.

## [0.4.1] - 2026-07-16

### Changed

- Removed the optional Node-RED 4 built-in-search hover guard.
- Find+ now operates strictly as an independent sidebar and does not alter the behaviour of Node-RED's built-in search.
- Updated package description and documentation accordingly.

## [0.4.0] - 2026-07-15

### Added

- English user interface and documentation for the first GitHub-ready release.
- GitHub issue templates and contribution guidance.
- Package validation script.

### Retained from 0.3.3

- Advanced search sidebar named Find+.
- Exact-number, case-sensitive, whole-word and regex search.
- Current-flow and configuration-node filters.
- Hidden node-type filter available through `type:...` syntax.
- Matching property and line-number display.
- Reveal action that keeps the sidebar open.
- Optional Node-RED 4 core-search hover guard.
- Simplified search layout with one input and separate search/clear controls.

## [0.3.3] - 2026-07-15

- Simplified the search area to one plain input.
- Moved search and clear controls below the input.

## [0.3.0] - 2026-07-15

- Added the optional Node-RED 4 core-search hover guard.

## [0.2.0] - 2026-07-15

- Redesigned the sidebar and result cards.

## [0.1.0] - 2026-07-15

- Initial prototype.
