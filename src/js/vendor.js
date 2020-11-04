import '@babel/polyfill';
import 'mdn-polyfills/Node.prototype.append';
import 'mdn-polyfills/Node.prototype.prepend';

import svg4everybody from 'svg4everybody';
import gsap from 'gsap';

svg4everybody();

window.gsap = gsap;

require('ninelines-ua-parser');
