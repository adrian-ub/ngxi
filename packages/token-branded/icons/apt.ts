import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[tokenBrandedAptIcon],svg[token-branded-apt-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none"><svg:path fill="url(#tokenBrandedApt0)" d="M17.158 9.625L6.83 13.293a.767.767 0 0 1-1.018-.855l.956-5.198a.75.75 0 0 1 .27-.455l4.478-3.612a.77.77 0 0 1 .973 0l4.5 3.628c.13.107.226.248.265.405l.394 1.502a.77.77 0 0 1-.49.917m-11.937 6.24l-.517 2.632a.755.755 0 0 0 .399.827A15.2 15.2 0 0 0 12.006 21a15.1 15.1 0 0 0 6.834-1.643a.856.856 0 0 0 .456-.928l-1.238-6.582a.77.77 0 0 0-1.023-.579L5.727 15.29a.77.77 0 0 0-.506.574"></svg:path><svg:defs><svg:lineargradient id="tokenBrandedApt0" x1="19.223" x2="9.84" y1="20.899" y2="4.315" gradientUnits="userSpaceOnUse"><svg:stop offset=".11" stop-color="#C65CFF"></svg:stop><svg:stop offset=".18" stop-color="#BA6BFF"></svg:stop><svg:stop offset=".33" stop-color="#9991FF"></svg:stop><svg:stop offset=".53" stop-color="#6CF"></svg:stop><svg:stop offset=".81" stop-color="#42F0DB"></svg:stop><svg:stop offset=".97" stop-color="#3FC"></svg:stop></svg:lineargradient></svg:defs></svg:g>`,
})
export class TokenBrandedAptIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
