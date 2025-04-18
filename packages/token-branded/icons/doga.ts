import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[tokenBrandedDogaIcon],svg[token-branded-doga-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none"><svg:path fill="url(#tokenBrandedDoga0)" fill-rule="evenodd" d="M10.138 6.725H3V21h7.138a7.136 7.136 0 0 0 5.047-12.185a7.14 7.14 0 0 0-5.047-2.09m0 1.862H4.862v10.551h5.276a5.276 5.276 0 0 0 0-10.551" clip-rule="evenodd"></svg:path><svg:path fill="url(#tokenBrandedDoga1)" d="m16.952 15.99l-2.333.664a6 6 0 0 1-.342.478l1.223 1.434a7.05 7.05 0 0 0 1.452-2.576"></svg:path><svg:path fill="url(#tokenBrandedDoga2)" fill-rule="evenodd" d="M13.862 3H6.724v14.275h7.138a7.137 7.137 0 1 0 0-14.275m0 1.862H8.587v10.551h5.275a5.276 5.276 0 0 0 0-10.551" clip-rule="evenodd"></svg:path><svg:path fill="url(#tokenBrandedDoga3)" d="M8.587 10.448L6.724 8.586h1.863z"></svg:path><svg:defs><svg:lineargradient id="tokenBrandedDoga0" x1="5.732" x2="17.946" y1="6.215" y2="17.625" gradientUnits="userSpaceOnUse"><svg:stop stop-color="#422C81"></svg:stop><svg:stop offset="1" stop-color="#7B368A"></svg:stop></svg:lineargradient><svg:lineargradient id="tokenBrandedDoga1" x1="5.732" x2="17.945" y1="6.214" y2="17.624" gradientUnits="userSpaceOnUse"><svg:stop stop-color="#422C81"></svg:stop><svg:stop offset="1" stop-color="#7B368A"></svg:stop></svg:lineargradient><svg:lineargradient id="tokenBrandedDoga2" x1="5.733" x2="17.946" y1="6.214" y2="17.624" gradientUnits="userSpaceOnUse"><svg:stop stop-color="#422C81"></svg:stop><svg:stop offset="1" stop-color="#7B368A"></svg:stop></svg:lineargradient><svg:lineargradient id="tokenBrandedDoga3" x1="5.733" x2="17.946" y1="6.214" y2="17.625" gradientUnits="userSpaceOnUse"><svg:stop stop-color="#422C81"></svg:stop><svg:stop offset="1" stop-color="#7B368A"></svg:stop></svg:lineargradient></svg:defs></svg:g>`,
})
export class TokenBrandedDogaIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
