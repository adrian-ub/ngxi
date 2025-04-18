import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[materialSymbolsLightKeyboardAltSharpIcon],svg[material-symbols-light-keyboard-alt-sharp-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M2 19V5h20v14zm6.654-2.52h6.692v-1.538H8.654zm-3.116-3.25h1.539v-1.538H5.538zm3.789 0h1.538v-1.538H9.327zm3.807 0h1.539v-1.538h-1.539zm3.789 0h1.539v-1.538h-1.539zM5.538 9.98h1.539V8.443H5.538zm3.789 0h1.538V8.443H9.327zm3.807 0h1.539V8.443h-1.539zm3.693.097h1.538V8.539h-1.538z"></svg:path>`,
})
export class MaterialSymbolsLightKeyboardAltSharpIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
