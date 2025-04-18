import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[materialSymbolsStylusHighlighterOutlineSharpIcon],svg[material-symbols-stylus-highlighter-outline-sharp-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M7 16V3h2.475L17 6.725V16zm2-2h6V7.975L9 5zm-5 7l1-3h14l1 3zm5-7h6z"></svg:path>`,
})
export class MaterialSymbolsStylusHighlighterOutlineSharpIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
