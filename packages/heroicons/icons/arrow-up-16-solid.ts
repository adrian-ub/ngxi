import { Component, input } from '@angular/core';

@Component({
  standalone: true,
  selector: 'svg[heroiconsArrowUp16SolidIcon],svg[heroicons-arrow-up-16-solid-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M8 14a.75.75 0 0 1-.75-.75V4.56L4.03 7.78a.75.75 0 0 1-1.06-1.06l4.5-4.5a.75.75 0 0 1 1.06 0l4.5 4.5a.75.75 0 0 1-1.06 1.06L8.75 4.56v8.69A.75.75 0 0 1 8 14" clip-rule="evenodd"></svg:path>`
})
export class HeroiconsArrowUp16SolidIcon {

  readonly viewBox = input("0 0 16 16");
  readonly width = input("1em");
  readonly height = input("1em");
}
