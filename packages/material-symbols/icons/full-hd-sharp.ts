import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[materialSymbolsFullHdSharpIcon],svg[material-symbols-full-hd-sharp-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M9.5 15H11v-2h1.5v2H14V9h-1.5v2.5H11V9H9.5zm5.5 0h3.75l.75-.75v-4.5L18.75 9H15zm1.5-1.5v-3H18v3zM4.5 15H6v-2h2v-1.5H6v-1h2.5V9h-4zM1 20V4h22v16z"></svg:path>`,
})
export class MaterialSymbolsFullHdSharpIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
