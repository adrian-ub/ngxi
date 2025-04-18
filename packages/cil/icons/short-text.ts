import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[cilShortTextIcon],svg[cil-short-text-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M128 192h256v32H128zm0 112h128v32H128z"></svg:path><svg:path fill="currentColor" d="M48 432h416V88H48Zm32-312h352v280H80Z"></svg:path>`,
})
export class CilShortTextIcon {
  readonly viewBox = input("0 0 512 512")
  readonly width = input("1em")
  readonly height = input("1em")
}
