import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[cilVerticalAlignBottomIcon],svg[cil-vertical-align-bottom-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M356.117 316.117L333.49 293.49L272 354.98V56h-32v298.98l-61.49-61.49l-22.627 22.627L256 416.236zM16 464h480v32H16z"></svg:path>`,
})
export class CilVerticalAlignBottomIcon {
  readonly viewBox = input("0 0 512 512")
  readonly width = input("1em")
  readonly height = input("1em")
}
