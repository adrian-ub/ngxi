import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[cilHistoryIcon],svg[cil-history-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M256.25 16A240 240 0 0 0 88 84.977V16H56v128h128v-32h-77.713A208 208 0 0 1 256.25 48C370.8 48 464 141.2 464 255.75S370.8 463.5 256.25 463.5S48.5 370.3 48.5 255.75h-32a239.75 239.75 0 0 0 409.279 169.529A239.75 239.75 0 0 0 256.25 16"></svg:path><svg:path fill="currentColor" d="M240 111.951L239.465 288H368v-32h-96.437L272 112.049z"></svg:path>`,
})
export class CilHistoryIcon {
  readonly viewBox = input("0 0 512 512")
  readonly width = input("1em")
  readonly height = input("1em")
}
