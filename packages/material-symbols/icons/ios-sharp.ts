import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[materialSymbolsIosSharpIcon],svg[material-symbols-ios-sharp-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M4 9V7h2v2zm0 8v-6h2v6zm3 0V7h6v10zm2-2h2V9H9zm5 2v-2h4v-2h-4V7h6v2h-4v2h4v6z"></svg:path>`,
})
export class MaterialSymbolsIosSharpIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
