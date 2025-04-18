import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[akarIconsNetworkIcon],svg[akar-icons-network-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-width="2"><svg:circle cx="18" cy="5" r="3"></svg:circle><svg:circle cx="18" cy="19" r="3"></svg:circle><svg:circle cx="6" cy="12" r="3"></svg:circle><svg:path stroke-linecap="round" stroke-linejoin="round" d="m15.408 6.512l-6.814 3.975m6.814 7.001l-6.814-3.975"></svg:path></svg:g>`,
})
export class AkarIconsNetworkIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
