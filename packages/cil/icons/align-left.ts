import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[cilAlignLeftIcon],svg[cil-align-left-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M16 64h480v32H16zm0 88h328v32H16zm0 88h480v32H16zm0 88h328v32H16zm0 88h480v32H16z"></svg:path>`,
})
export class CilAlignLeftIcon {
  readonly viewBox = input("0 0 512 512")
  readonly width = input("1em")
  readonly height = input("1em")
}
