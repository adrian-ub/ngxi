import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[phTrademarkRegisteredLightIcon],svg[ph-trademark-registered-light-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M128 26a102 102 0 1 0 102 102A102.12 102.12 0 0 0 128 26m0 192a90 90 0 1 1 90-90a90.1 90.1 0 0 1-90 90m20.16-78.58A30 30 0 0 0 136 82h-32a6 6 0 0 0-6 6v80a6 6 0 0 0 12 0v-26h25.46L155 171.33a6 6 0 1 0 10-6.66ZM110 94h26a18 18 0 0 1 0 36h-26Z"></svg:path>`,
})
export class PhTrademarkRegisteredLightIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}
