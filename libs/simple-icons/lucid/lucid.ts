import { Component } from '@angular/core';

@Component({
  standalone: true,
  selector: 'svg[siLucid],svg[si-lucid]',
  host: {
    role: 'img',
    viewBox: '0 0 24 24',
    xmlns: 'http://www.w3.org/2000/svg',
  },
  template: `<svg:title>Lucid</svg:title>
    <svg:path d="M12 0 3.694 4.8V24L12 19.2Zm0 19.2v4.502h8.305V14.4Z" />`,
})
export class SiLucid {}
