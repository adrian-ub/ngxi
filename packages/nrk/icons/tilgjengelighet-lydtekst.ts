import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[nrkTilgjengelighetLydtekstIcon],svg[nrk-tilgjengelighet-lydtekst-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M4 21h3l-1.33 2h2L9 21h11v-7H4zm2-5h12v3H6z" clip-rule="evenodd"></svg:path><svg:path fill="currentColor" d="M14 9h-4v2h4zm3-4H7v2h10zm4-4H3v2h18z"></svg:path>`,
})
export class NrkTilgjengelighetLydtekstIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
