import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[mdiNetworkStrength4Icon],svg[mdi-network-strength-4-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M1 21h20V1"></svg:path>`,
})
export class MdiNetworkStrength4Icon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
