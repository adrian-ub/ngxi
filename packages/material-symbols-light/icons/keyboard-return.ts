import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[materialSymbolsLightKeyboardReturnIcon],svg[material-symbols-light-keyboard-return-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M9.308 17.308L4 12l5.308-5.308l.708.708l-4.1 4.1H19v-4h1v5H5.916l4.1 4.1z"></svg:path>`,
})
export class MaterialSymbolsLightKeyboardReturnIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
