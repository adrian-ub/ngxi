import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[arcticonsPartnerkaartIcon],svg[arcticons-partnerkaart-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="m44.385 20.811l-2.153-6.626l-14.966 4.863V3.312H20.3v15.736L5.333 14.185L3.18 20.811l14.966 4.863l-9.25 12.73l5.637 4.096l9.25-12.73l9.25 12.73l5.636-4.095l-9.25-12.73z"></svg:path>`,
})
export class ArcticonsPartnerkaartIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}
