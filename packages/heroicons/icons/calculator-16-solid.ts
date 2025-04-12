import { Component, input } from '@angular/core';

@Component({
  standalone: true,
  selector: 'svg[heroiconsCalculator16SolidIcon],svg[heroicons-calculator-16-solid-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M5 1a2 2 0 0 0-2 2v10a2 2 0 0 0 2 2h6a2 2 0 0 0 2-2V3a2 2 0 0 0-2-2zm.75 6a.75.75 0 1 0 0 1.5a.75.75 0 0 0 0-1.5M5 3.75A.75.75 0 0 1 5.75 3h4.5a.75.75 0 0 1 0 1.5h-4.5A.75.75 0 0 1 5 3.75m.75 7.75a.75.75 0 1 0 0 1.5a.75.75 0 0 0 0-1.5M5 10a.75.75 0 1 1 1.5 0A.75.75 0 0 1 5 10m5.25-3a.75.75 0 1 0 0 1.5a.75.75 0 0 0 0-1.5m-.75 3a.75.75 0 0 1 1.5 0v2.25a.75.75 0 0 1-1.5 0zM8 7a.75.75 0 1 0 0 1.5A.75.75 0 0 0 8 7m-.75 5.25a.75.75 0 1 1 1.5 0a.75.75 0 0 1-1.5 0m.75-3a.75.75 0 1 0 0 1.5a.75.75 0 0 0 0-1.5" clip-rule="evenodd"></svg:path>`
})
export class HeroiconsCalculator16SolidIcon {

  readonly viewBox = input("0 0 16 16");
  readonly width = input("1em");
  readonly height = input("1em");
}
