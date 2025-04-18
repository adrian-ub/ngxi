import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[cilCheckAltIcon],svg[cil-check-alt-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M200.359 382.269L61.057 251.673l21.886-23.346l116.698 109.404l229.045-229.044l22.628 22.626z"></svg:path>`,
})
export class CilCheckAltIcon {
  readonly viewBox = input("0 0 512 512")
  readonly width = input("1em")
  readonly height = input("1em")
}
