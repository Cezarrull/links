import { Route, Routes } from "react-router-dom";

import { PageOne } from "../PageOne/PageOne";
import { PageProjects } from "../pageProjects/PageProjects";

export function AppRoutes() {
    return(
        <Routes>
            <Route path="/" element={<PageOne />} />
            <Route path="/Projetos" element={<PageProjects />} />
        </Routes>
    )
}