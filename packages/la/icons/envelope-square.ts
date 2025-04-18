import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[laEnvelopeSquareIcon],svg[la-envelope-square-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M5 5v22h22V5zm2 2h18v18H7zm2 3v12h14V10zm2.813 2h8.374L16 14.781zM11 13.875l4.438 2.969l.562.343l.563-.343L21 13.875V20H11z"></svg:path>`,
})
export class LaEnvelopeSquareIcon {
  readonly viewBox = input("0 0 32 32")
  readonly width = input("1em")
  readonly height = input("1em")
}
