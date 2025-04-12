import { Component, input } from '@angular/core';

@Component({
  standalone: true,
  selector: 'svg[heroiconsMagnifyingGlassMinus16SolidIcon],svg[heroicons-magnifying-glass-minus-16-solid-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M8.75 6.25h-3.5a.75.75 0 0 0 0 1.5h3.5a.75.75 0 0 0 0-1.5"></svg:path><svg:path fill="currentColor" fill-rule="evenodd" d="M7 12c1.11 0 2.136-.362 2.965-.974l2.755 2.754a.75.75 0 1 0 1.06-1.06l-2.754-2.755A5 5 0 1 0 7 12m0-1.5a3.5 3.5 0 1 0 0-7a3.5 3.5 0 0 0 0 7" clip-rule="evenodd"></svg:path>`
})
export class HeroiconsMagnifyingGlassMinus16SolidIcon {

  readonly viewBox = input("0 0 16 16");
  readonly width = input("1em");
  readonly height = input("1em");
}
