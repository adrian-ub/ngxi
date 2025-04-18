import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[cilBanIcon],svg[cil-ban-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M425.706 86.294A240 240 0 0 0 86.294 425.705A240 240 0 0 0 425.706 86.294M256 48a207.1 207.1 0 0 1 135.528 50.345L98.345 391.528A207.1 207.1 0 0 1 48 256c0-114.691 93.309-208 208-208m0 416a207.08 207.08 0 0 1-134.986-49.887l293.1-293.1A207.08 207.08 0 0 1 464 256c0 114.691-93.309 208-208 208"></svg:path>`,
})
export class CilBanIcon {
  readonly viewBox = input("0 0 512 512")
  readonly width = input("1em")
  readonly height = input("1em")
}
