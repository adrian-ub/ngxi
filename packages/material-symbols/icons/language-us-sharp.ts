import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[materialSymbolsLanguageUsSharpIcon],svg[material-symbols-language-us-sharp-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M4 17V7h2v8h3V7h2v10zm9 0v-3h2v1h3v-2h-5V7h7v3h-2V9h-3v2h5v6z"></svg:path>`,
})
export class MaterialSymbolsLanguageUsSharpIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
