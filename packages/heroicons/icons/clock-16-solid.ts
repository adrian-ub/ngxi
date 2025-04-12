import { Component, input } from '@angular/core';

@Component({
  standalone: true,
  selector: 'svg[heroiconsClock16SolidIcon],svg[heroicons-clock-16-solid-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M1 8a7 7 0 1 1 14 0A7 7 0 0 1 1 8m7.75-4.25a.75.75 0 0 0-1.5 0V8c0 .414.336.75.75.75h3.25a.75.75 0 0 0 0-1.5h-2.5z" clip-rule="evenodd"></svg:path>`
})
export class HeroiconsClock16SolidIcon {

  readonly viewBox = input("0 0 16 16");
  readonly width = input("1em");
  readonly height = input("1em");
}
