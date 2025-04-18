import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[mdiNetworkStrength3AlertIcon],svg[mdi-network-strength-3-alert-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M21 1L1 21h16v-2h-1V8.8l3-3V9h2m-2 2v6h2v-6m-2 8v2h2v-2"></svg:path>`,
})
export class MdiNetworkStrength3AlertIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
