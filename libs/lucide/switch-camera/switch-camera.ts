import { Component } from '@angular/core';

@Component({
  standalone: true,
  selector: 'svg[lucideSwitchCamera],svg[lucide-switch-camera]',
  host: {
    class: 'lucide lucide-switch-camera',
    xmlns: 'http://www.w3.org/2000/svg',
    viewBox: '0 0 24 24',
    fill: 'none',
    stroke: 'currentColor',
    linecap: 'round',
    linejoin: 'round',
  },
  template: `
    <svg:path d="M11 19H4a2 2 0 0 1-2-2V7a2 2 0 0 1 2-2h5" />
    <svg:path d="M13 5h7a2 2 0 0 1 2 2v10a2 2 0 0 1-2 2h-5" />
    <svg:circle cx="12" cy="12" r="3" />
    <svg:path d="m18 22-3-3 3-3" />
    <svg:path d="m6 2 3 3-3 3" />
  `,
})
export class LucideSwitchCamera {}
