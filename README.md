# fast-ds-provider-interop
This repository serves as an example for interop between `@microsoft/fast-jss-manager-react`'s `DesignSystemProvider` and `@microsoft/fast-components-msft`'s FASTDesignSystemProvider.

## Similarities and Differences
Both systems work on the same fundamental principles; A provider communicates a design system value or set of values to all interested child elements, allowing arbitrary overriding to some or all design system values at any depth in the tree, where overrides propagate to descendent components / elements.

### How they work
#### `@microsoft/fast-jss-manager-react`
`@microsoft/fast-jss-manager-react` uses React [Contexts](https://reactjs.org/docs/context.html) to achieve this design-system propagation, ingesting the values into stylesheet generators to achieve dynamic stylesheets.

#### `@microsoft/fast-components-msft`
`@microsoft/fast-components-msft` uses DOM node hierarchy to achieve the design-system propagation behavior and CSS custom properties to achieve dynamic stylesheets. Stylesheets then simply use the custom properties.

### Background Component
`@microsoft/fast-components-react-msft` exposes a `Background` component to help synchronize the design-system values with the painted background of a DOM node. The `FASTDesignSystemProvider` from `@microsoft/fast-components-msft` so it is likely that all instances of `Background` will need to be replaced with an instance of the interop Provider.

### React Portals
[React portals](https://reactjs.org/docs/portals.html#gatsby-focus-wrapper) allow rendering HTML nodes that are not within the same DOM hierarchy as the rendering component. Context works as expected here, with the context flowing into the portal. Because `@microsoft/fast-components-msft` uses the *DOM* hierarchy to resolves upstream design-system values, React Portals provide an opportunity for WC and React to get out of sync. If possible, avoid using portals. If avoiding portals is not possible, ensure that any upstream design-system augmentations are rendered into a new Provider at the root of the portal - effectively mimicking React's behavior.

## Bringing WC and React providers together
Because the principles of design-system propagation are aligned, to achieve interop we simply need to render to two together and ensure the values being propagated to each system are the same. An implementation of this exists in [./src/ds-interop.tsx](./src/ds-interop.tsx). Note that there are *some* differences in the data structures the system uses - because of this, you'll want to ensure the root-level provider implements the `useDefaults` prop.