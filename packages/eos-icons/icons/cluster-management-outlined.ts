import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[eosIconsClusterManagementOutlinedIcon],svg[eos-icons-cluster-management-outlined-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="m22.69 18.37l1.14-1l-1-1.73l-1.45.49a3.7 3.7 0 0 0-1.08-.63L20 14h-2l-.3 1.49a3.7 3.7 0 0 0-1.08.63l-1.45-.49l-1 1.73l1.14 1a3.3 3.3 0 0 0 0 1.26l-1.14 1l1 1.73l1.45-.49a3.7 3.7 0 0 0 1.08.63L18 24h2l.3-1.49a3.7 3.7 0 0 0 1.08-.63l1.45.49l1-1.73l-1.14-1a3.4 3.4 0 0 0 0-1.27M19 21a2 2 0 1 1 2-2a2.006 2.006 0 0 1-2 2m4-10H1V1h22ZM3 9h18V3H3Zm10-4H4v2h9Zm3 0a1 1 0 1 0 1 1a1 1 0 0 0-1-1m3 0a1 1 0 1 0 1 1a1 1 0 0 0-1-1"></svg:path><svg:path fill="currentColor" d="M12.294 21H3v-6h10.26a7 7 0 0 1 2.148-2H1v10h12.26a7 7 0 0 1-.966-2"></svg:path><svg:path fill="currentColor" d="M4 19h8a7 7 0 0 1 .294-2H4Z"></svg:path>`,
})
export class EosIconsClusterManagementOutlinedIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
