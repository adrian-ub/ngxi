import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[cilAlignCenterIcon],svg[cil-align-center-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M16 64h480v32H16zm80 88h320v32H96zm-80 88h480v32H16zm80 88h320v32H96zm-80 88h480v32H16z"></svg:path>`,
})
export class CilAlignCenterIcon {
  readonly viewBox = input("0 0 512 512")
  readonly width = input("1em")
  readonly height = input("1em")
}
