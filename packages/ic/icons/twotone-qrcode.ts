import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[icTwotoneQrcodeIcon],svg[ic-twotone-qrcode-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M19 19h4v2h-2v2h-2zm-2-6h4v4h-2v-2h-2zm-4 0h2v2h2v6h-2v-2h-2zM3 3h6v6H3zm2 2v2h2V5zm10-2h6v6h-6zm2 2v2h2V5zM3 15h6v6H3zm2 2v2h2v-2z" opacity=".3"></svg:path><svg:path fill="currentColor" d="M1 1h10v10H1zm2 2v6h6V3z"></svg:path><svg:path fill="currentColor" fill-rule="evenodd" d="M5 5h2v2H5z"></svg:path><svg:path fill="currentColor" d="M13 1h10v10H13zm2 2v6h6V3z"></svg:path><svg:path fill="currentColor" fill-rule="evenodd" d="M17 5h2v2h-2z"></svg:path><svg:path fill="currentColor" d="M1 13h10v10H1zm2 2v6h6v-6z"></svg:path><svg:path fill="currentColor" fill-rule="evenodd" d="M5 17h2v2H5z"></svg:path><svg:path fill="currentColor" d="M23 19h-4v4h-6V13h1h-1v6h2v2h2v-6h-2v-2h-1h3v2h2v2h2v-4h2zm0 2v2h-2v-2z"></svg:path>`,
})
export class IcTwotoneQrcodeIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
