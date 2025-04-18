import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[tokenBrandedNcrIcon],svg[token-branded-ncr-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none"><svg:path fill="url(#tokenBrandedNcr0)" d="M13.588 16.766h1.853l-5.024-9H8.559z"></svg:path><svg:path fill="url(#tokenBrandedNcr1)" fill-rule="evenodd" d="M18.364 5.636A9 9 0 1 0 5.636 18.364A9 9 0 0 0 18.364 5.636m-.673.064a8.58 8.58 0 0 0-5.69-2.17A8.58 8.58 0 0 0 6.308 5.7l.397.397a7.9 7.9 0 0 1 10.599-.01zm2.234 5.77a7.9 7.9 0 0 0-1.974-4.732l.35-.387a8.95 8.95 0 0 1 2.17 5.12zm-1.995 5.808A7.9 7.9 0 0 0 19.94 12h.53c0 2.012-.826 4.167-2.17 5.649zm-11.235.636A7.9 7.9 0 0 0 12 19.94a7.93 7.93 0 0 0 5.305-2.027l.386.386a8.5 8.5 0 0 1-5.69 2.17a8.58 8.58 0 0 1-5.692-2.17zM4.06 12c0 2.017.752 3.865 1.99 5.262l-.349.387A9 9 0 0 1 3.53 12zm2.038-5.294a7.92 7.92 0 0 0-2.022 4.765H3.53c.132-1.911.953-3.812 2.17-5.162zm1.668 10.588V7.235h2.954l4.987 9.094V7.235h.53v10.06H13.28L8.294 8.2v9.093z" clip-rule="evenodd"></svg:path><svg:defs><svg:lineargradient id="tokenBrandedNcr0" x1="18.617" x2="5.382" y1="5.383" y2="18.354" gradientUnits="userSpaceOnUse"><svg:stop stop-color="#F58F05"></svg:stop><svg:stop offset=".53" stop-color="#F4B86D"></svg:stop><svg:stop offset="1" stop-color="#EA911D"></svg:stop></svg:lineargradient><svg:lineargradient id="tokenBrandedNcr1" x1="18.618" x2="5.382" y1="5.382" y2="18.353" gradientUnits="userSpaceOnUse"><svg:stop stop-color="#F58F05"></svg:stop><svg:stop offset=".53" stop-color="#F4B86D"></svg:stop><svg:stop offset="1" stop-color="#EA911D"></svg:stop></svg:lineargradient></svg:defs></svg:g>`,
})
export class TokenBrandedNcrIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
