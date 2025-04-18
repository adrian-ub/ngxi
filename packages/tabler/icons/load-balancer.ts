import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[tablerLoadBalancerIcon],svg[tabler-load-balancer-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"><svg:path d="M9 13a3 3 0 1 0 6 0a3 3 0 1 0-6 0m2 7a1 1 0 1 0 2 0a1 1 0 1 0-2 0m1-4v3m0-9V3M9 6l3-3l3 3m-3 4V3"></svg:path><svg:path d="m9 6l3-3l3 3m-.106 6.227l6.11-2.224M17.159 8.21l3.845 1.793l-1.793 3.845m-10.11-1.634l-6.075-2.211M6.871 8.21l-3.845 1.793l1.793 3.845"></svg:path></svg:g>`,
})
export class TablerLoadBalancerIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
