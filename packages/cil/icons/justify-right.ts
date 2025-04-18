import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[cilJustifyRightIcon],svg[cil-justify-right-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M16 63.998h480v32H16zm0 88h480v32H16zm0 88h480v32H16zm0 88h480v32H16zm160 88h320v32H176z"></svg:path>`,
})
export class CilJustifyRightIcon {
  readonly viewBox = input("0 0 512 512")
  readonly width = input("1em")
  readonly height = input("1em")
}
