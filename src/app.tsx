import { h, render } from 'preact';
import Home from "./pages/home/home";

render(<Home title="This is a title" />, document.querySelector('#app')!);