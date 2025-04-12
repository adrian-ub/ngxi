import { Component, input } from '@angular/core';

@Component({
  standalone: true,
  selector: 'svg[heroiconsSolidShareIcon],svg[heroicons-solid-share-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M15 8a3 3 0 1 0-2.977-2.63l-4.94 2.47a3 3 0 1 0 0 4.319l4.94 2.47a3 3 0 1 0 .895-1.789l-4.94-2.47a3 3 0 0 0 0-.74l4.94-2.47C13.456 7.68 14.19 8 15 8"></svg:path>`
})
export class HeroiconsSolidShareIcon {

  readonly viewBox = input("0 0 20 20");
  readonly width = input("1em");
  readonly height = input("1em");
}
