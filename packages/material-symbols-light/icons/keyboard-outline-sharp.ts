import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[materialSymbolsLightKeyboardOutlineSharpIcon],svg[material-symbols-light-keyboard-outline-sharp-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M3 18V6h18v12zm1-1h16V7H4zm4.23-1.23h7.54v-1.54H8.23zm-3-3h1.54v-1.54H5.23zm3 0h1.54v-1.54H8.23zm3 0h1.54v-1.54h-1.54zm3 0h1.54v-1.54h-1.54zm3 0h1.54v-1.54h-1.54zm-12-3h1.54V8.23H5.23zm3 0h1.54V8.23H8.23zm3 0h1.54V8.23h-1.54zm3 0h1.54V8.23h-1.54zm3 0h1.54V8.23h-1.54zM4 17V7z"></svg:path>`,
})
export class MaterialSymbolsLightKeyboardOutlineSharpIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
