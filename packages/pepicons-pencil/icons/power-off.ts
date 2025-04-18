import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[pepiconsPencilPowerOffIcon],svg[pepicons-pencil-power-off-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="currentColor"><svg:path d="M4.477 5.46a.6.6 0 1 1 .854.842a6.02 6.02 0 0 0-1.731 4.24c0 3.312 2.643 5.992 5.9 5.992s5.9-2.68 5.9-5.992a6.02 6.02 0 0 0-1.731-4.24a.6.6 0 1 1 .854-.842a7.22 7.22 0 0 1 2.077 5.082c0 3.97-3.177 7.192-7.1 7.192s-7.1-3.222-7.1-7.192c0-1.93.756-3.743 2.077-5.082"></svg:path><svg:path d="M8.878 1.25a.6.6 0 0 1 1.2 0v7.085a.6.6 0 0 1-1.2 0z"></svg:path><svg:path d="M1.15 1.878a.514.514 0 0 1 .728-.727l16.971 16.971a.514.514 0 0 1-.727.727z"></svg:path></svg:g>`,
})
export class PepiconsPencilPowerOffIcon {
  readonly viewBox = input("0 0 20 20")
  readonly width = input("1em")
  readonly height = input("1em")
}
