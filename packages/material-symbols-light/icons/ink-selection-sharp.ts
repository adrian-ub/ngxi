import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[materialSymbolsLightInkSelectionSharpIcon],svg[material-symbols-light-ink-selection-sharp-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M11.385 20v-8.615H20v1h-6.908L20 19.292l-.708.708l-6.908-6.908V20zm-3.693 0v-1.23h1.231V20zM4 5.23V4h1.23v1.23zm3.692 0V4h1.231v1.23zm3.692 0V4h1.232v1.23zm3.693 0V4h1.23v1.23zm3.692 0V4H20v1.23zM4 20v-1.23h1.23V20zm0-3.692v-1.231h1.23v1.23zm0-3.693v-1.23h1.23v1.23zm0-3.692v-1.23h1.23v1.23zm14.77 0v-1.23H20v1.23z"></svg:path>`,
})
export class MaterialSymbolsLightInkSelectionSharpIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
