import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[riCopperDiamondFillIcon],svg[ri-copper-diamond-fill-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M12.005 22.003c-5.523 0-10-4.477-10-10s4.477-10 10-10s10 4.477 10 10s-4.477 10-10 10m-2.5-13l-2.5 2.5l5 5l5-5l-2.5-2.5z"></svg:path>`,
})
export class RiCopperDiamondFillIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
