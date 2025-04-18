import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[carbonLoadBalancerApplicationIcon],svg[carbon-load-balancer-application-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M4 26h4v4H4zm10 0h4v4h-4zm10 0h4v4h-4zm1-10h-8v-2h-2v2H7a2 2 0 0 0-2 2v6h2v-6h8v6h2v-6h8v6h2v-6a2 2 0 0 0-2-2M9 2v10h14V2zm2 2h2v6h-2zm10 6h-6V4h6z"></svg:path>`,
})
export class CarbonLoadBalancerApplicationIcon {
  readonly viewBox = input("0 0 32 32")
  readonly width = input("1em")
  readonly height = input("1em")
}
