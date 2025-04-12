import { Component, input } from '@angular/core';

@Component({
  standalone: true,
  selector: 'svg[heroiconsArrowUpRight16SolidIcon],svg[heroicons-arrow-up-right-16-solid-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M4.22 11.78a.75.75 0 0 1 0-1.06L9.44 5.5H5.75a.75.75 0 0 1 0-1.5h5.5a.75.75 0 0 1 .75.75v5.5a.75.75 0 0 1-1.5 0V6.56l-5.22 5.22a.75.75 0 0 1-1.06 0" clip-rule="evenodd"></svg:path>`
})
export class HeroiconsArrowUpRight16SolidIcon {

  readonly viewBox = input("0 0 16 16");
  readonly width = input("1em");
  readonly height = input("1em");
}
