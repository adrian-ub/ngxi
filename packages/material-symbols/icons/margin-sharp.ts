import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[materialSymbolsMarginSharpIcon],svg[material-symbols-margin-sharp-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M3 21V3h18v18zM7 9h2V7H7zm4 0h2V7h-2zm4 0h2V7h-2zm-8 4h2v-2H7zm4 0h2v-2h-2zm4 0h2v-2h-2z"></svg:path>`,
})
export class MaterialSymbolsMarginSharpIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
