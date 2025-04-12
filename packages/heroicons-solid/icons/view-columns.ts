import { Component, input } from '@angular/core';

@Component({
  standalone: true,
  selector: 'svg[heroiconsSolidViewColumnsIcon],svg[heroicons-solid-view-columns-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M14 18h2.75A2.25 2.25 0 0 0 19 15.75V4.25A2.25 2.25 0 0 0 16.75 2H14v16ZM12.5 2h-5v16h5V2ZM3.25 2H6v16H3.25A2.25 2.25 0 0 1 1 15.75V4.25A2.25 2.25 0 0 1 3.25 2Z" clip-rule="evenodd"></svg:path>`
})
export class HeroiconsSolidViewColumnsIcon {

  readonly viewBox = input("0 0 20 20");
  readonly width = input("1em");
  readonly height = input("1em");
}
