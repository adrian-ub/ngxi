import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[materialSymbolsLightMicrowaveGenOutlineSharpIcon],svg[material-symbols-light-microwave-gen-outline-sharp-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M3 19V5h18v14zm1-1h16V6H4zm1.885-1.884h8.23V7.885h-8.23zm1-1V8.885h6.23v6.23zm9.961-5.693h1.539V7.885h-1.539zm0 3.346h1.539v-1.538h-1.539zm0 3.347h1.539v-1.539h-1.539zM4 18V6z"></svg:path>`,
})
export class MaterialSymbolsLightMicrowaveGenOutlineSharpIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
