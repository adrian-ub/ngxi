import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[eosIconsTrustedOrganizationIcon],svg[eos-icons-trusted-organization-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M19 9a7 7 0 1 0-10.974 5.76L5 20l2.256.093L8.464 22l3.466-6.004L12 16c.035.002.046-.003.07-.004L15.536 22l1.232-1.866L19 20l-3.026-5.24A6.99 6.99 0 0 0 19 9M7 9a5 5 0 1 1 5 5a5 5 0 0 1-5-5"></svg:path><svg:circle cx="12" cy="9" r="3" fill="currentColor"></svg:circle>`,
})
export class EosIconsTrustedOrganizationIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
