import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[materialSymbolsLooksTwoSharpIcon],svg[material-symbols-looks-two-sharp-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M9 17h6v-2h-4v-2h4V7H9v2h4v2H9zm-6 4V3h18v18z"></svg:path>`,
})
export class MaterialSymbolsLooksTwoSharpIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
