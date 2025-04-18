import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[icRoundQrcodeIcon],svg[ic-round-qrcode-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M2 1h8a1 1 0 0 1 1 1v8a1 1 0 0 1-1 1H2a1 1 0 0 1-1-1V2a1 1 0 0 1 1-1m1 2v6h6V3z"></svg:path><svg:path fill="currentColor" fill-rule="evenodd" d="M5 5h2v2H5z"></svg:path><svg:path fill="currentColor" d="M14 1h8a1 1 0 0 1 1 1v8a1 1 0 0 1-1 1h-8a1 1 0 0 1-1-1V2a1 1 0 0 1 1-1m1 2v6h6V3z"></svg:path><svg:path fill="currentColor" fill-rule="evenodd" d="M17 5h2v2h-2z"></svg:path><svg:path fill="currentColor" d="M2 13h8a1 1 0 0 1 1 1v8a1 1 0 0 1-1 1H2a1 1 0 0 1-1-1v-8a1 1 0 0 1 1-1m1 2v6h6v-6z"></svg:path><svg:path fill="currentColor" fill-rule="evenodd" d="M5 17h2v2H5z"></svg:path><svg:path fill="currentColor" d="M23 19h-4v4h-5a1 1 0 0 1-1-1v-8v5h2v2h2v-6h-2v-2h-1h3v2h2v2h2v-4h1a1 1 0 0 1 1 1zm0 2v1a1 1 0 0 1-1 1h-1v-2z"></svg:path>`,
})
export class IcRoundQrcodeIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
