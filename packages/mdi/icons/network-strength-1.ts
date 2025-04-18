import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[mdiNetworkStrength1Icon],svg[mdi-network-strength-1-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M1 21h20V1m-2 4.83V19h-8v-5.17"></svg:path>`,
})
export class MdiNetworkStrength1Icon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
