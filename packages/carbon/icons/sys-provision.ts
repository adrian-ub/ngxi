import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[carbonSysProvisionIcon],svg[carbon-sys-provision-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M21 20v10l9-5z"></svg:path><svg:circle cx="14" cy="14" r="2" fill="currentColor"></svg:circle><svg:path fill="currentColor" d="M14 20a6 6 0 1 1 6-6a6.007 6.007 0 0 1-6 6m0-10a4 4 0 1 0 4 4a4.005 4.005 0 0 0-4-4"></svg:path><svg:path fill="currentColor" d="M25.951 12.91h-.006A12.05 12.05 0 1 0 17 25.605v-2.066a9.981 9.981 0 1 1 6.624-6.81l1.924.544A12 12 0 0 0 26 14q0-.55-.049-1.09"></svg:path>`,
})
export class CarbonSysProvisionIcon {
  readonly viewBox = input("0 0 32 32")
  readonly width = input("1em")
  readonly height = input("1em")
}
