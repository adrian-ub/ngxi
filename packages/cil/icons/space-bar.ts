import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[cilSpaceBarIcon],svg[cil-space-bar-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M40 288v128h424V288h-32v96H72v-96z"></svg:path>`,
})
export class CilSpaceBarIcon {
  readonly viewBox = input("0 0 512 512")
  readonly width = input("1em")
  readonly height = input("1em")
}
