import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[clarityBitcoinLineIcon],svg[clarity-bitcoin-line-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M24.11 16.88A5.49 5.49 0 0 0 21 7V4a1 1 0 0 0-2 0v3h-3V4a1 1 0 0 0-2 0v3h-3a1 1 0 0 0-1 1v20a1 1 0 0 0 1 1h3v3a1 1 0 0 0 2 0v-3h3v3a1 1 0 0 0 2 0v-3h.08A6.07 6.07 0 0 0 27 22.81v-.62a6.25 6.25 0 0 0-2.89-5.31M12 9h8.69a3.59 3.59 0 0 1 3.43 2.36A3.51 3.51 0 0 1 20.79 16H12Zm13 13.81A4.08 4.08 0 0 1 21.06 27H12v-9h9.06A4.08 4.08 0 0 1 25 22.19Z" class="clr-i-outline clr-i-outline-path-1"></svg:path><svg:path fill="none" d="M0 0h36v36H0z"></svg:path>`,
})
export class ClarityBitcoinLineIcon {
  readonly viewBox = input("0 0 36 36")
  readonly width = input("1em")
  readonly height = input("1em")
}
