import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[carbonShapesIcon],svg[carbon-shapes-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M5 16H3v11a2 2 0 0 0 2 2h8v-2H5zm23 13H17a1 1 0 0 1-.876-1.482l5.5-10A.99.99 0 0 1 22.5 17c.343 0 .686.172.876.518l5.5 10A1 1 0 0 1 28 29m-9.309-2h7.618L22.5 20.075zM27 3H16v2h11v13.992h2V5a2 2 0 0 0-2-2M11 3H5a2 2 0 0 0-2 2v6a2 2 0 0 0 2 2h6a2 2 0 0 0 2-2V5a2 2 0 0 0-2-2m0 8H5V5h6z"></svg:path>`,
})
export class CarbonShapesIcon {
  readonly viewBox = input("0 0 32 32")
  readonly width = input("1em")
  readonly height = input("1em")
}
