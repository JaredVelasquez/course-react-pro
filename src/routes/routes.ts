import { lazy } from "react";
import { LazyPage1, LazyPage2, LazyPage3 } from "../01-lazyload/pages";
import { NoLazy } from "../01-lazyload/pages/NoLazy";
type JSXComponent = () => JSX.Element;
interface Routes{
    to: string,
    path: string,
    Component: React.LazyExoticComponent<JSXComponent> | JSXComponent,
    name: string

}

const LazyLayout = lazy(() => import(/*webPackChunkName: LazyLayout*/'../01-lazyload/layout/LazyLayout'))

export const routes: Array<Routes> = [
    {
        to: '/lazyload/*',
        path: '/lazyload/',
        Component: LazyLayout,
        name: 'LazyLayout - Dash'
    },
    {
        to: '/no-lazy',
        path: 'no-lazy',
        Component: NoLazy,
        name: 'No lazy'
    }
]