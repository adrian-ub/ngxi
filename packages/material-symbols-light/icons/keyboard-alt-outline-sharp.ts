import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[materialSymbolsLightKeyboardAltOutlineSharpIcon],svg[material-symbols-light-keyboard-alt-outline-sharp-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M2 19V5h20v14zm1-1h18V6H3zm5.654-1.52h6.692v-1.538H8.654zm-3.115-3.25h1.538v-1.538H5.539zm3.788 0h1.539v-1.538H9.327zm3.808 0h1.538v-1.538h-1.538zm3.788 0h1.539v-1.538h-1.539zM5.539 9.98h1.538V8.443H5.539zm3.788 0h1.539V8.443H9.327zm3.808 0h1.538V8.443h-1.538zm3.692.097h1.539V8.539h-1.539zM3 18V6z"></svg:path>`,
})
export class MaterialSymbolsLightKeyboardAltOutlineSharpIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
