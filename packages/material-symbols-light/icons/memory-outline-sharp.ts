import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[materialSymbolsLightMemoryOutlineSharpIcon],svg[material-symbols-light-memory-outline-sharp-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M10 14v-4h4v4zm1-1h2v-2h-2zm-1.5 6.539V18H6v-3.5H4.462v-1H6v-3H4.462v-1H6V6h3.5V4.462h1V6h3V4.462h1V6H18v3.5h1.539v1H18v3h1.539v1H18V18h-3.5v1.539h-1V18h-3v1.539zM17 17V7H7v10zm-5-5"></svg:path>`,
})
export class MaterialSymbolsLightMemoryOutlineSharpIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
