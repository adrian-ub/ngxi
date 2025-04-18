import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[carbonLoadBalancerListenerIcon],svg[carbon-load-balancer-listener-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M15 8h2v2h-2zm4 0h2v2h-2zm-8 0h2v2h-2zm14 8h-8v-3h-2v3H7a2 2 0 0 0-2 2v6h2v-6h8v6h2v-6h8v6h2v-6a2 2 0 0 0-2-2M4 26h4v4H4zm10 0h4v4h-4zm10 0h4v4h-4zM11 3h10v2H11z"></svg:path>`,
})
export class CarbonLoadBalancerListenerIcon {
  readonly viewBox = input("0 0 32 32")
  readonly width = input("1em")
  readonly height = input("1em")
}
