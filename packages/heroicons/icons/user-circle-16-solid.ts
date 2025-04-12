import { Component, input } from '@angular/core';

@Component({
  standalone: true,
  selector: 'svg[heroiconsUserCircle16SolidIcon],svg[heroicons-user-circle-16-solid-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M15 8A7 7 0 1 1 1 8a7 7 0 0 1 14 0m-5-2a2 2 0 1 1-4 0a2 2 0 0 1 4 0M8 9a5 5 0 0 0-4.295 2.437A5.49 5.49 0 0 0 8 13.5a5.49 5.49 0 0 0 4.294-2.063A5 5 0 0 0 8 9" clip-rule="evenodd"></svg:path>`
})
export class HeroiconsUserCircle16SolidIcon {

  readonly viewBox = input("0 0 16 16");
  readonly width = input("1em");
  readonly height = input("1em");
}
