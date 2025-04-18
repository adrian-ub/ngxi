import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[materialSymbolsPhpSharpIcon],svg[material-symbols-php-sharp-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M3 15V9h5v4H4.5v2zm6.5 0V9H11v2h2V9h1.5v6H13v-2.5h-2V15zm7 0V9h5v4H18v2zm-12-3.5h2v-1h-2zm13.5 0h2v-1h-2z"></svg:path>`,
})
export class MaterialSymbolsPhpSharpIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
