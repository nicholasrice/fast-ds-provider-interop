import val from "@skatejs/val";
import { createElement } from "react";

/**
 * createElement function to allow sending React props to HTML attributes, element properties, or event listeners.
 * 
 * See https://github.com/nicholasrice/wc-react-poc and https://fast.design/docs/integrations/react for more examples on WC and React interop.
 */
export default val(createElement);