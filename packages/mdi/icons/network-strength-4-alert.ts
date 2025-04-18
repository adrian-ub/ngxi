import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[mdiNetworkStrength4AlertIcon],svg[mdi-network-strength-4-alert-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M19 17h2v-6h-2m0 10h2v-2h-2M1 21h16V9h4V1"></svg:path>`,
})
export class MdiNetworkStrength4AlertIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
