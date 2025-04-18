import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[materialSymbolsInkHighlighterSharpIcon],svg[material-symbols-ink-highlighter-sharp-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="m1.5 21l3.15-3.15l-.75-.75v-1.4L9.6 10l5.4 5.4l-5.7 5.7H7.9l-.75-.75l-.65.65zm9.525-12.425L17.4 2.2l5.4 5.4l-6.375 6.375z"></svg:path>`,
})
export class MaterialSymbolsInkHighlighterSharpIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
