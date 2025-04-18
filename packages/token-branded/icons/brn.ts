import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[tokenBrandedBrnIcon],svg[token-branded-brn-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none"><svg:path fill="#0EEBFF" d="m6.937 13.884l-.81-1.322L3 17.896L10.313 21l-1.126-1.687l-4.291-1.868zm10.125 0l.81-1.322L21 17.896L13.687 21l1.126-1.687l4.291-1.868z"></svg:path><svg:path fill="url(#tokenBrandedBrn0)" d="M10.313 10.875L12 8.063l1.687 2.812l-.624 1.39l.624 1.422L12 16.5l-1.687-2.812l.624-1.424zm1.687 4.5l.996-1.687l-.282-.766l-.152.203v-1.226l.36-1.024L12 9.187l-.922 1.688l.36 1.024v1.226l-.152-.203l-.282.765z"></svg:path><svg:path fill="url(#tokenBrandedBrn1)" d="M8.063 9.564L12 3l3.937 6.564l-.742 1.31L12 5.52l-3.195 5.355z"></svg:path><svg:path fill="url(#tokenBrandedBrn2)" d="M3 5.813L12 21l9-15.187L13.868 3l.944 1.688l4.281 1.569L12 18.379L4.907 6.262l4.28-1.574L10.133 3z"></svg:path><svg:defs><svg:lineargradient id="tokenBrandedBrn0" x1="12" x2="12" y1="3" y2="21" gradientUnits="userSpaceOnUse"><svg:stop stop-color="#19F1FE"></svg:stop><svg:stop offset=".5" stop-color="#7F6EFB"></svg:stop><svg:stop offset="1" stop-color="#8450FD"></svg:stop></svg:lineargradient><svg:lineargradient id="tokenBrandedBrn1" x1="12" x2="12" y1="3" y2="21" gradientUnits="userSpaceOnUse"><svg:stop offset=".18" stop-color="#3636E5"></svg:stop><svg:stop offset="1" stop-color="#1CA4FD"></svg:stop></svg:lineargradient><svg:lineargradient id="tokenBrandedBrn2" x1="12" x2="12" y1="3" y2="21" gradientUnits="userSpaceOnUse"><svg:stop stop-color="#C63FFF"></svg:stop><svg:stop offset=".49" stop-color="#6D5FFE"></svg:stop><svg:stop offset="1" stop-color="#268EF5"></svg:stop></svg:lineargradient></svg:defs></svg:g>`,
})
export class TokenBrandedBrnIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
