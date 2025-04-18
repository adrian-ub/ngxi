import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[arcticonsKpnPrepaidIcon],svg[arcticons-kpn-prepaid-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="m28.172 5.672l8.657 8.657A4 4 0 0 1 38 17.157V41.5a2 2 0 0 1-2 2H12a2 2 0 0 1-2-2v-35a2 2 0 0 1 2-2h13.343a4 4 0 0 1 2.828 1.172ZM19.05 25.363h4.125m-4.125-2.7h4.125"></svg:path><svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M26.938 28.186a3.68 3.68 0 0 1-2.824 1.314h0a3.69 3.69 0 0 1-3.689-3.689V22.19a3.69 3.69 0 0 1 3.69-3.689h0c1.139 0 2.158.517 2.835 1.329"></svg:path>`,
})
export class ArcticonsKpnPrepaidIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}
