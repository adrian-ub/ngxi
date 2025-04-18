import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[materialSymbolsPagelessSharpIcon],svg[material-symbols-pageless-sharp-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M1 22v-8h2v6h7v2zm13 0v-2h7v-6h2v8zM1 10V2h9v2H3v6zm20 0V4h-7V2h9v8z"></svg:path>`,
})
export class MaterialSymbolsPagelessSharpIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
