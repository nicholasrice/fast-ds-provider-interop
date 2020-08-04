# fast-ds-provider-interop
This repository serves as an example for interop between `@microsoft/fast-jss-manager-react`'s `DesignSystemProvider` and `@microsoft/fast-components-msft`'s FASTDesignSystemProvider.

## Design System Resolution and Propagation
Both systems work on the same fundamental principles; A provider communicates a Design System value or set of values to all interested *descendent* child elements. The Design System can be augmented at any node in the tree, where descendent of the augmenting tree receive the union of the augmented values and any values set by any upstream providers. In other words, the Design System for any interested node is the product of merging all upstream Design System objects, where values defined by providers deeper in the tree take precedence over values defined by providers higher in the tree.

## Bringing WC and React providers together
Because the principles of design-system propagation are aligned, to achieve interop we simply need to render to two together and ensure the values being propagated to each system are the same. An implementation of this exists in [./src/ds-interop.tsx](./src/ds-interop.tsx). Note that there are *some* differences in the data structures of the Design System itself - because of this, you'll want to ensure the root-level provider implements the `useDefaults` prop (see [FAST Web Component's FASTDesignSystem](https://fast.design/docs/api/fast-components.fastdesignsystem) and [FAST React's DesignSystem](https://github.com/microsoft/fast-react/blob/master/packages/react/fast-components-styles-msft/src/design-system/index.ts) for more info on the differences).

### How Design Systems are Propagated and Used
#### @microsoft/fast-jss-manager-react
`@microsoft/fast-jss-manager-react` uses React [Contexts](https://reactjs.org/docs/context.html) to achieve this design-system propagation. The design system is then ingested into React Components and JSS stylesheets for programmatic usage of design system values, where direct access to the design system can be obtained by function values in JSS stylesheets.

#### @microsoft/fast-components-msft
`@microsoft/fast-components-msft` uses the DOM node hierarchy to achieve the design-system propagation behavior. `fast-design-system-provider` is the HTML element that performs the propagation and resolution of design system objects. CSS custom properties are used achieve dynamic stylesheets based on the Design System; stylesheets then simply use the custom properties.

More advanced usage of the Design System in stylesheets can be achieved through *behaviors*. See https://fast.design/docs/design/color#color-recipes for an example of this.

### Additional Considerations
#### Background Component
`@microsoft/fast-components-react-msft` exposes a `Background` component to help synchronize the design-system values with the painted background of a DOM node. The `fast-design-system-provider` custom element from `@microsoft/fast-components-msft` paints the CSS `background-color` and `color` automatically so it is likely that all instances of `Background` will need to be replaced with an instance of the interop Provider. This behavior can be opted out of using the [`no-paint` HTML attribute](https://fast.design/docs/api/fast-components.fastdesignsystemprovider.nopaint).

#### React Portals
[React portals](https://reactjs.org/docs/portals.html#gatsby-focus-wrapper) allow rendering React Components and HTML nodes that are not within the same DOM hierarchy as the rendering component. React Context works as expected here, with the context hierarchically flowing into the portal. Because `@microsoft/fast-components-msft` uses the *DOM* hierarchy to resolves upstream design-system values, React Portals provide an opportunity for WC and React to get out of sync. If possible, avoid using portals. If avoiding portals is not possible, ensure that any upstream design-system augmentations are rendered into a new Provider at the root of the portal - effectively mimicking React's behavior.

