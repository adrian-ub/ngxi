import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[materialSymbolsLightInkHighlighterSharpIcon],svg[material-symbols-light-ink-highlighter-sharp-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="m3.039 20.23l2.534-2.534l-.73-.73v-1.132l5.45-5.45l4.015 4.016l-5.45 5.45H7.727l-.77-.77l-1.15 1.15zm7.967-10.559l6.086-6.086L21.108 7.6l-6.087 6.087z"></svg:path>`,
})
export class MaterialSymbolsLightInkHighlighterSharpIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
