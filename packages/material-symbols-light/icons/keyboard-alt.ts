import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[materialSymbolsLightKeyboardAltIcon],svg[material-symbols-light-keyboard-alt-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M3.616 19q-.691 0-1.153-.462T2 17.384V6.616q0-.691.463-1.153T3.616 5h16.769q.69 0 1.153.463T22 6.616v10.769q0 .69-.462 1.153T20.385 19zm5.038-2.52h6.692v-1.538H8.654zm-3.115-3.25h1.538v-1.538H5.539zm3.788 0h1.539v-1.538H9.327zm3.808 0h1.538v-1.538h-1.538zm3.788 0h1.539v-1.538h-1.539zM5.539 9.98h1.538V8.443H5.539zm3.788 0h1.539V8.443H9.327zm3.808 0h1.538V8.443h-1.538zm3.692.097h1.539V8.539h-1.539z"></svg:path>`,
})
export class MaterialSymbolsLightKeyboardAltIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
