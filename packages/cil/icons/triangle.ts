import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[cilTriangleIcon],svg[cil-triangle-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M273.342 66.038a20 20 0 0 0-34.684 0L29.569 430.007a20 20 0 0 0 17.342 29.963h418.178a20 20 0 0 0 17.342-29.962ZM67.644 427.97L256 100.091L444.356 427.97Z"></svg:path>`,
})
export class CilTriangleIcon {
  readonly viewBox = input("0 0 512 512")
  readonly width = input("1em")
  readonly height = input("1em")
}
