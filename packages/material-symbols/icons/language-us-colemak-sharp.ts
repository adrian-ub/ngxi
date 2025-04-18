import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[materialSymbolsLanguageUsColemakSharpIcon],svg[material-symbols-language-us-colemak-sharp-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M14.5 15H18V9h-3.5zM4 17V7h6.5v2H6v6h4.5v2zm8.5 0V7H20v10z"></svg:path>`,
})
export class MaterialSymbolsLanguageUsColemakSharpIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
