import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[magePlayIcon],svg[mage-play-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M5.644 5.025V18.97a1.533 1.533 0 0 0 2.467 1.21l9.656-7.509a1.532 1.532 0 0 0-.092-2.483L8.019 3.753a1.533 1.533 0 0 0-2.375 1.272"></svg:path>`,
})
export class MagePlayIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
