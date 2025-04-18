import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[materialSymbolsLightLanguageUsDvorakSharpIcon],svg[material-symbols-light-language-us-dvorak-sharp-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M6 15.5h3.385l.673-.673V9.173L9.385 8.5H6zm-1 1v-9h4.846l1.212 1.212v6.577L9.846 16.5zm10.779 0l-3.067-9h1l2.644 7.642L19 7.5h1l-3.067 9z"></svg:path>`,
})
export class MaterialSymbolsLightLanguageUsDvorakSharpIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
