import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[icTwotoneHomeRepairServiceIcon],svg[ic-twotone-home-repair-service-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M20 8h-3V6c0-1.1-.9-2-2-2H9c-1.1 0-2 .9-2 2v2H4c-1.1 0-2 .9-2 2v10h20V10c0-1.1-.9-2-2-2M9 6h6v2H9zm11 12H4v-3h2v1h2v-1h8v1h2v-1h2zm0-5h-2v-1h-2v1H8v-1H6v1H4v-3h16z"></svg:path><svg:path fill="currentColor" d="M18 16h-2v-1H8v1H6v-1H4v3h16v-3h-2zM4 10v3h2v-1h2v1h8v-1h2v1h2v-3H7z" opacity=".3"></svg:path>`,
})
export class IcTwotoneHomeRepairServiceIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
