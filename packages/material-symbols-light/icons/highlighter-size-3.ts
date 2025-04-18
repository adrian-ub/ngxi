import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[materialSymbolsLightHighlighterSize3Icon],svg[material-symbols-light-highlighter-size-3-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="m8.096 19.404l-3.525-3.525q-.14-.14-.14-.354t.14-.354l10.575-10.6q.166-.165.379-.165t.354.165l3.525 3.55q.14.14.14.354t-.14.354L8.829 19.404q-.165.165-.366.165t-.367-.165"></svg:path>`,
})
export class MaterialSymbolsLightHighlighterSize3Icon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
