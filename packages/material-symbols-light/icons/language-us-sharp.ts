import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[materialSymbolsLightLanguageUsSharpIcon],svg[material-symbols-light-language-us-sharp-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M5 16.5v-9h1v8h3.904v-8h1v9zm8 0v-2h1v1h4v-3h-5v-5h6v2h-1v-1h-4v3h5v5z"></svg:path>`,
})
export class MaterialSymbolsLightLanguageUsSharpIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
