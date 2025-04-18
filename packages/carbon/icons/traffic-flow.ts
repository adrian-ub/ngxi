import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[carbonTrafficFlowIcon],svg[carbon-traffic-flow-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="m26 8l-4-4l-4 4l1.41 1.42L21 7.83V18h2V7.83l1.58 1.58zM12.59 22.58L11 24.17V14H9v10.17l-1.58-1.58L6 24l4 4l4-4zM2 2h2v28H2zm26 0h2v28h-2zM15 2h2v4h-2zm0 8h2v4h-2zm0 8h2v4h-2zm0 8h2v4h-2z"></svg:path>`,
})
export class CarbonTrafficFlowIcon {
  readonly viewBox = input("0 0 32 32")
  readonly width = input("1em")
  readonly height = input("1em")
}
