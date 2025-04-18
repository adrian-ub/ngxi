import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[cilIndentIncreaseIcon],svg[cil-indent-increase-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M72 63.998h424v32H72zm128 88h296v32H200zm0 88h296v32H200zm0 88h296v32H200zm-128 88h424v32H72zM16 144.909v222.182L171.527 256Zm32 62.182L116.473 256L48 304.909Z"></svg:path>`,
})
export class CilIndentIncreaseIcon {
  readonly viewBox = input("0 0 512 512")
  readonly width = input("1em")
  readonly height = input("1em")
}
