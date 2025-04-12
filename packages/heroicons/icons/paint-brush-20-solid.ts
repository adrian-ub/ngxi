import { Component, input } from '@angular/core';

@Component({
  standalone: true,
  selector: 'svg[heroiconsPaintBrush20SolidIcon],svg[heroicons-paint-brush-20-solid-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M15.993 1.385a1.87 1.87 0 0 1 2.623 2.622l-4.03 5.27a12.75 12.75 0 0 1-4.237 3.562a4.51 4.51 0 0 0-3.188-3.188a12.75 12.75 0 0 1 3.562-4.236zM6 11a3 3 0 0 0-3 3a.5.5 0 0 1-.72.45a.75.75 0 0 0-1.035.931A4.001 4.001 0 0 0 9 14.004V14a3.01 3.01 0 0 0-1.66-2.685A3 3 0 0 0 6 11"></svg:path>`
})
export class HeroiconsPaintBrush20SolidIcon {

  readonly viewBox = input("0 0 20 20");
  readonly width = input("1em");
  readonly height = input("1em");
}
