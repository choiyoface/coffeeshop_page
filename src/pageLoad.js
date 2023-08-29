

import createHomePage from "./homepage";
import createTabs from "./tabs";

function pageLoad(){
    createTabs();
    createHomePage();
    
}
export default pageLoad;