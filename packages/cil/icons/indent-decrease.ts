import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[cilIndentDecreaseIcon],svg[cil-indent-decrease-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M72 63.998h424v32H72zm128 88h296v32H200zm0 88h296v32H200zm0 88h296v32H200zm-128 88h424v32H72zm88-271.089L4.473 256L160 367.091Zm-32 160L59.527 256L128 207.091Z"></svg:path>`,
})
export class CilIndentDecreaseIcon {
  readonly viewBox = input("0 0 512 512")
  readonly width = input("1em")
  readonly height = input("1em")
}
