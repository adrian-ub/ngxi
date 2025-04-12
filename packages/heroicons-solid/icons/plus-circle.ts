import { Component, input } from '@angular/core';

@Component({
  standalone: true,
  selector: 'svg[heroiconsSolidPlusCircleIcon],svg[heroicons-solid-plus-circle-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M10 18a8 8 0 1 0 0-16a8 8 0 0 0 0 16m1-11a1 1 0 1 0-2 0v2H7a1 1 0 1 0 0 2h2v2a1 1 0 1 0 2 0v-2h2a1 1 0 1 0 0-2h-2z" clip-rule="evenodd"></svg:path>`
})
export class HeroiconsSolidPlusCircleIcon {

  readonly viewBox = input("0 0 20 20");
  readonly width = input("1em");
  readonly height = input("1em");
}
