import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[materialSymbolsLightFormatInkHighlighterSharpIcon],svg[material-symbols-light-format-ink-highlighter-sharp-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M2 24v-2h20v2zm2.442-6.173l2.535-2.535l-.73-.725v-1.136l4.45-4.45l4.015 4.021l-4.45 4.444H9.13l-.77-.769l-1.15 1.15zm6.962-9.56l5.694-5.688L21.114 6.6l-5.689 5.689z"></svg:path>`,
})
export class MaterialSymbolsLightFormatInkHighlighterSharpIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
