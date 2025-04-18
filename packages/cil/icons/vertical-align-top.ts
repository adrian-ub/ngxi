import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[cilVerticalAlignTopIcon],svg[cil-vertical-align-top-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M16 16h480v32H16zm139.883 179.883l22.627 22.627L240 157.02V456h32V157.02l61.49 61.49l22.627-22.627L256 95.764z"></svg:path>`,
})
export class CilVerticalAlignTopIcon {
  readonly viewBox = input("0 0 512 512")
  readonly width = input("1em")
  readonly height = input("1em")
}
