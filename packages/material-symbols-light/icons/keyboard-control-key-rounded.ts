import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[materialSymbolsLightKeyboardControlKeyRoundedIcon],svg[material-symbols-light-keyboard-control-key-rounded-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="m12 7.114l-5.265 5.24q-.14.14-.332.134q-.191-.007-.337-.154q-.141-.14-.141-.344t.14-.344l5.37-5.369q.242-.243.565-.243t.566.243l5.388 5.388q.14.14.133.342t-.153.347q-.14.14-.334.14t-.334-.14z"></svg:path>`,
})
export class MaterialSymbolsLightKeyboardControlKeyRoundedIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
