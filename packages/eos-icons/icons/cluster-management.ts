import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[eosIconsClusterManagementIcon],svg[eos-icons-cluster-management-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M1 1v10h22V1Zm12 6H4V5h9Zm3 0a1 1 0 1 1 1-1a1 1 0 0 1-1 1m3 0a1 1 0 1 1 1-1a1 1 0 0 1-1 1m3.69 11.37l1.14-1l-1-1.73l-1.45.49a3.7 3.7 0 0 0-1.08-.63L20 14h-2l-.3 1.49a3.7 3.7 0 0 0-1.08.63l-1.45-.49l-1 1.73l1.14 1a3.3 3.3 0 0 0 0 1.26l-1.14 1l1 1.73l1.45-.49a3.7 3.7 0 0 0 1.08.63L18 24h2l.3-1.49a3.7 3.7 0 0 0 1.08-.63l1.45.49l1-1.73l-1.14-1a3.4 3.4 0 0 0 0-1.27M19 21a2 2 0 1 1 2-2a2.006 2.006 0 0 1-2 2"></svg:path><svg:path fill="currentColor" d="M12 19H4v-2h8.294a7 7 0 0 1 3.114-4H1v10h12.26A6.96 6.96 0 0 1 12 19"></svg:path>`,
})
export class EosIconsClusterManagementIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
