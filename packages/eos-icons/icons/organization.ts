import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[eosIconsOrganizationIcon],svg[eos-icons-organization-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M20.01 10.99h-7v-2h-2v2H3.47v4h2v-2h5.54v2h2v-2h5.5v2h2v-4z"></svg:path><svg:circle cx="12.01" cy="4.51" r="2.5" fill="currentColor"></svg:circle><svg:circle cx="4.47" cy="19.49" r="2.5" fill="currentColor"></svg:circle><svg:circle cx="12.01" cy="19.49" r="2.5" fill="currentColor"></svg:circle><svg:circle cx="19.51" cy="19.49" r="2.5" fill="currentColor"></svg:circle>`,
})
export class EosIconsOrganizationIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
