import { Component, input } from '@angular/core';

@Component({
  standalone: true,
  selector: 'svg[heroiconsArrowLongUpIcon],svg[heroicons-arrow-long-up-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M8.25 6.75L12 3m0 0l3.75 3.75M12 3v18"></svg:path>`
})
export class HeroiconsArrowLongUpIcon {

  readonly viewBox = input("0 0 24 24");
  readonly width = input("1em");
  readonly height = input("1em");
}
