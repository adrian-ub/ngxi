import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[riCopperDiamondLineIcon],svg[ri-copper-diamond-line-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M12.005 22.003c-5.523 0-10-4.477-10-10s4.477-10 10-10s10 4.477 10 10s-4.477 10-10 10m0-2a8 8 0 1 0 0-16a8 8 0 0 0 0 16m-3-12h6l2.5 3.5l-5.5 5.5l-5.5-5.5zm1.03 2l-.92 1.29l2.89 2.89l2.89-2.89l-.92-1.29z"></svg:path>`,
})
export class RiCopperDiamondLineIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
