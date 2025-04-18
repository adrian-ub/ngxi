import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[materialSymbolsLightSmartToySharpIcon],svg[material-symbols-light-smart-toy-sharp-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M5 14q-.846 0-1.423-.577T3 12t.577-1.423T5 10V6h5q0-.846.577-1.423T12 4t1.423.577T14 6h5v4q.846 0 1.423.577T21 12t-.577 1.423T19 14v6H5zm3.998-1.5q.416 0 .709-.291t.293-.707t-.291-.709t-.707-.293t-.709.291t-.293.707t.291.709t.707.293m6 0q.416 0 .709-.291t.293-.707t-.291-.709t-.707-.293t-.709.291t-.293.707t.291.709t.707.293m-6.498 4h7v-1h-7z"></svg:path>`,
})
export class MaterialSymbolsLightSmartToySharpIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
