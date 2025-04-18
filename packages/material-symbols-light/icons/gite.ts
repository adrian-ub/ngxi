import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[materialSymbolsLightGiteIcon],svg[material-symbols-light-gite-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M3 18v-7.558l3.692-3.846H8V5h1v1.596h8.308L21 10.442V18zm12-1h5v-6.136l-2.48-2.616L15 10.902zM4 17h10v-5.211H4z"></svg:path>`,
})
export class MaterialSymbolsLightGiteIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
