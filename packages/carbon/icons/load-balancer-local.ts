import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[carbonLoadBalancerLocalIcon],svg[carbon-load-balancer-local-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M25 16h-8v-6h-2v6H7a2 2 0 0 0-2 2v6h2v-6h8v6h2v-6h8v6h2v-6a2 2 0 0 0-2-2M4 26h4v4H4zm10 0h4v4h-4zm10 0h4v4h-4zM11 5h10v2H11z"></svg:path>`,
})
export class CarbonLoadBalancerLocalIcon {
  readonly viewBox = input("0 0 32 32")
  readonly width = input("1em")
  readonly height = input("1em")
}
