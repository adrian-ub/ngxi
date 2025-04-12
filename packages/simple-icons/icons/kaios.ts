import { Component, input } from '@angular/core';

@Component({
  standalone: true,
  selector: 'svg[simpleIconsKaiosIcon],svg[simple-icons-kaios-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M17.342 0a3.674 3.674 0 0 0-3.647 3.674a3.673 3.673 0 0 0 3.673 3.673A3.674 3.674 0 1 0 17.342 0M4.623.16a2.746 2.746 0 0 0-2.747 2.747v18.167a2.747 2.747 0 1 0 5.494 0V2.907A2.75 2.75 0 0 0 4.623.16m6.95 7.208a2.729 2.729 0 0 0-2.237 4.294l7.81 11.155a2.729 2.729 0 1 0 4.471-3.131L13.807 8.53a2.73 2.73 0 0 0-2.234-1.163"></svg:path>`
})
export class SimpleIconsKaiosIcon {

  readonly viewBox = input("0 0 24 24");
  readonly width = input("1em");
  readonly height = input("1em");
}
