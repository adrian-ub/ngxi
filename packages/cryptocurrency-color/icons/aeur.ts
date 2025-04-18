import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[cryptocurrencyColorAeurIcon],svg[cryptocurrency-color-aeur-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:defs><svg:lineargradient id="cryptocurrencyColorAeur0" x1="50%" x2="50%" y1="0%" y2="143.239%"><svg:stop offset="0%" stop-color="#FFF"></svg:stop><svg:stop offset="3%" stop-color="#FFF" stop-opacity=".83"></svg:stop><svg:stop offset="7%" stop-color="#FFF" stop-opacity=".66"></svg:stop><svg:stop offset="11%" stop-color="#FFF" stop-opacity=".5"></svg:stop><svg:stop offset="15%" stop-color="#FFF" stop-opacity=".37"></svg:stop><svg:stop offset="19%" stop-color="#FFF" stop-opacity=".25"></svg:stop><svg:stop offset="25%" stop-color="#FFF" stop-opacity=".16"></svg:stop><svg:stop offset="30%" stop-color="#FFF" stop-opacity=".09"></svg:stop><svg:stop offset="37%" stop-color="#FFF" stop-opacity=".04"></svg:stop><svg:stop offset="47%" stop-color="#FFF" stop-opacity=".01"></svg:stop><svg:stop offset="100%" stop-color="#FFF" stop-opacity="0"></svg:stop></svg:lineargradient></svg:defs><svg:g fill="none"><svg:circle cx="16" cy="16" r="16" fill="#051D2D"></svg:circle><svg:g fill="url(#cryptocurrencyColorAeur0)" transform="translate(9 6)"><svg:path d="M6.993 13.986a6.993 6.993 0 1 1 6.993-6.993a7 7 0 0 1-6.993 6.993M7 6.951A.049.049 0 1 0 7.049 7a.055.055 0 0 0-.05-.05z"></svg:path><svg:path d="M6.993 20.986a6.993 6.993 0 1 1 6.993-6.993a7 7 0 0 1-6.993 6.993M7 13.951a.049.049 0 1 0 .049.049a.055.055 0 0 0-.05-.05z"></svg:path></svg:g></svg:g>`,
})
export class CryptocurrencyColorAeurIcon {
  readonly viewBox = input("0 0 32 32")
  readonly width = input("1em")
  readonly height = input("1em")
}
