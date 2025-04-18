import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[materialSymbolsStackedEmailOutlineSharpIcon],svg[material-symbols-stacked-email-outline-sharp-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M5 17V3h18v14zm9-4.725l-7-4.85V15h14V7.425zm0-2.425L21 5H7zM1 21V6.5h2V19h16.5v2zM21 5H7z"></svg:path>`,
})
export class MaterialSymbolsStackedEmailOutlineSharpIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
