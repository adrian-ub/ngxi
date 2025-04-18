import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[materialSymbolsStylusHighlighterSharpIcon],svg[material-symbols-stylus-highlighter-sharp-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M7 16V3h2.475L17 6.725V16zm-3 5l1-3h14l1 3z"></svg:path>`,
})
export class MaterialSymbolsStylusHighlighterSharpIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
