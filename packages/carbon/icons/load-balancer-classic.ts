import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[carbonLoadBalancerClassicIcon],svg[carbon-load-balancer-classic-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M4 26h4v4H4zm10 0h4v4h-4zm10 0h4v4h-4zm1-10h-8v-4h-2v4H7a2 2 0 0 0-2 2v6h2v-6h8v6h2v-6h8v6h2v-6a2 2 0 0 0-2-2m-5-6V2h-8v8zm-6-2V4h4v4z"></svg:path>`,
})
export class CarbonLoadBalancerClassicIcon {
  readonly viewBox = input("0 0 32 32")
  readonly width = input("1em")
  readonly height = input("1em")
}
