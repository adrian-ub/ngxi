import { Component, input } from '@angular/core';

@Component({
  standalone: true,
  selector: 'svg[heroiconsSolidUserIcon],svg[heroicons-solid-user-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M10 9a3 3 0 1 0 0-6a3 3 0 0 0 0 6m-7 9a7 7 0 1 1 14 0z" clip-rule="evenodd"></svg:path>`
})
export class HeroiconsSolidUserIcon {

  readonly viewBox = input("0 0 20 20");
  readonly width = input("1em");
  readonly height = input("1em");
}
