import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[tokenBrandedTracIcon],svg[token-branded-trac-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none"><svg:path fill="url(#tokenBrandedTrac0)" d="M12 3v4.477a4.522 4.522 0 1 0 3.46 7.437l3.425 2.88A8.96 8.96 0 0 1 12 21a9 9 0 0 1 0-18m4.247 10.564l4.202 1.552c-.186.49-.405.962-.675 1.418l-3.865-2.256q.2-.343.338-.714m4.612-3.128q.142.762.141 1.564h-4.478c0-.27-.022-.529-.067-.788l4.41-.776zm-3.048-5.304c.404.337.77.709 1.108 1.114l-3.443 2.863a4.6 4.6 0 0 0-.551-.563z"></svg:path><svg:defs><svg:lineargradient id="tokenBrandedTrac0" x1="4.861" x2="19.245" y1="7.111" y2="16.249" gradientUnits="userSpaceOnUse"><svg:stop stop-color="#4CCB88"></svg:stop><svg:stop offset="1" stop-color="#30C7B4"></svg:stop></svg:lineargradient></svg:defs></svg:g>`,
})
export class TokenBrandedTracIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
