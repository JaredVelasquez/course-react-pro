import { lazy } from "react";
import { LazyPage1, LazyPage2, LazyPage3 } from "../01-lazyload/pages";
type JSXComponent = () => JSX.Element;
interface Routes{
    to: string,
    path: string,
    Component: React.LazyExoticComponent<JSXComponent> | JSXComponent,
    name: string

}

const Lazy1 = lazy(() => import(/*webPackChunkName: LazyPage1*/'../01-lazyload/pages/LazyPage1'))
const Lazy2 = lazy(() => import(/*webPackChunkName: LazyPage2*/'../01-lazyload/pages/LazyPage1'))
const Lazy3 = lazy(() => import(/*webPackChunkName: LazyPage3*/'../01-lazyload/pages/LazyPage1'))

export const routes: Array<Routes> = [
    {
        to: '/lazy1',
        path: 'lazy-1',
        Component: Lazy1,
        name: 'Lazy-1'
    },
    {
        to: '/lazy2',
        path: 'lazy-2',
        Component: Lazy2,
        name: 'Lazy-2'
    },
    {
        to: '/lazy3',
        path: 'lazy-3',
        Component: Lazy3,
        name: 'Lazy-3'
    }
]