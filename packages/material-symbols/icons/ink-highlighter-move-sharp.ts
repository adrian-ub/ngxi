import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[materialSymbolsInkHighlighterMoveSharpIcon],svg[material-symbols-ink-highlighter-move-sharp-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="m2.5 21l3.15-3.15l-.75-.75v-1.4l5.7-5.7l5.4 5.4l-5.7 5.7H8.9l-.75-.75l-.65.65zm9.525-12.425L18.4 2.2l5.4 5.4l-6.375 6.375zM13.775 4H7V2h8.775zm-4 4H4V6h7.775zm-4 4H1v-2h6.775z"></svg:path>`,
})
export class MaterialSymbolsInkHighlighterMoveSharpIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
