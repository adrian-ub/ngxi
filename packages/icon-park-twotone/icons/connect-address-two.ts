import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[iconParkTwotoneConnectAddressTwoIcon],svg[icon-park-twotone-connect-address-two-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:defs><svg:mask id="ipTConnectAddressTwo0"><svg:g fill="none" stroke="#fff" stroke-linecap="round" stroke-linejoin="round" stroke-width="4"><svg:path d="M6 24c0 9.941 8.059 18 18 18s18-8.059 18-18M24 14v28M6 24h6m24 0h6"></svg:path><svg:circle cx="24" cy="10" r="4" fill="#555"></svg:circle></svg:g></svg:mask></svg:defs><svg:path fill="currentColor" d="M0 0h48v48H0z" mask="url(#ipTConnectAddressTwo0)"></svg:path>`,
})
export class IconParkTwotoneConnectAddressTwoIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}
