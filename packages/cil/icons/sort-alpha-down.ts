import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[cilSortAlphaDownIcon],svg[cil-sort-alpha-down-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="m206.392 382.863l-51.883 51.882V17.177h-32v417.568l-51.882-51.882L48 405.49L138.509 496l90.51-90.51zm84.921 74.314h144v-32H326.274l109.039-100.732v-43.268h-136v32h101.04l-109.04 100.732zm52.468-408l-58.666 176h33.73l18.667-56h59.6l18.666 56h33.731l-58.666-176Zm4.4 88l18.667-56h.935l18.667 56Z"></svg:path>`,
})
export class CilSortAlphaDownIcon {
  readonly viewBox = input("0 0 512 512")
  readonly width = input("1em")
  readonly height = input("1em")
}
