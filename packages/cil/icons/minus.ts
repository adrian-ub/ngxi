import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[cilMinusIcon],svg[cil-minus-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M72 240h368v32H72z"></svg:path>`,
})
export class CilMinusIcon {
  readonly viewBox = input("0 0 512 512")
  readonly width = input("1em")
  readonly height = input("1em")
}
