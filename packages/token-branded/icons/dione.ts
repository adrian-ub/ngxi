import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[tokenBrandedDioneIcon],svg[token-branded-dione-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none"><svg:path fill="#30128D" d="M12 21a9 9 0 1 0 0-18a9 9 0 0 0 0 18"></svg:path><svg:path fill="#7D1FA9" d="M12 19.41a7.41 7.41 0 1 0 0-14.821a7.41 7.41 0 0 0 0 14.82"></svg:path><svg:path fill="#FB88F3" d="M12 17.604a5.605 5.605 0 1 0 0-11.21a5.605 5.605 0 0 0 0 11.21"></svg:path><svg:path fill="#E7B2F8" d="M12 17.16a5.16 5.16 0 1 0 0-10.32a5.16 5.16 0 0 0 0 10.32"></svg:path><svg:path fill="url(#tokenBrandedDione0)" d="M16.56 12.17c0 2.6-1.74 3.75-4.295 4.405c-1.135.295-2.085.165-2.915 0c-1.33-.265-2.045-1.2-2.435-2.5a3.3 3.3 0 0 1-.105-.99c0-1.885 2.46-5.61 5.05-5.61a4.7 4.7 0 0 1 4.7 4.7z"></svg:path><svg:defs><svg:lineargradient id="tokenBrandedDione0" x1="14.98" x2="7.415" y1="9.14" y2="15.185" gradientUnits="userSpaceOnUse"><svg:stop stop-color="#6DDFF4"></svg:stop><svg:stop offset=".42" stop-color="#10FDF7"></svg:stop><svg:stop offset=".65" stop-color="#20DFFB"></svg:stop><svg:stop offset="1" stop-color="#688FEB"></svg:stop></svg:lineargradient></svg:defs></svg:g>`,
})
export class TokenBrandedDioneIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
