import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[cilResizeHeightIcon],svg[cil-resize-height-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M256.236 504L120 367.764v-38.156h72v-144h-72V146.98L255.766 11.216L392 147.452v38.156h-72v144h72v38.627ZM159.1 361.608l97.137 97.137l97.137-97.137H288v-208h64.9l-97.134-97.137l-97.138 97.137H224v208Z"></svg:path>`,
})
export class CilResizeHeightIcon {
  readonly viewBox = input("0 0 512 512")
  readonly width = input("1em")
  readonly height = input("1em")
}
