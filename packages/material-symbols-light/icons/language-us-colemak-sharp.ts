import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[materialSymbolsLightLanguageUsColemakSharpIcon],svg[material-symbols-light-language-us-colemak-sharp-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M13.577 15.5H18v-7h-4.423zM5 16.5v-9h5.577v1H6v7h4.577v1zm7.577 0v-9H19v9z"></svg:path>`,
})
export class MaterialSymbolsLightLanguageUsColemakSharpIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
