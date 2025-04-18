import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[materialSymbolsLightHighlighterSize4Icon],svg[material-symbols-light-highlighter-size-4-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="m9.171 20.479l-5.65-5.65q-.165-.165-.165-.366t.165-.367L14.096 3.521q.146-.146.357-.146q.21 0 .35.146l5.676 5.65q.165.165.165.366t-.165.367L9.904 20.479q-.165.165-.366.165t-.367-.165"></svg:path>`,
})
export class MaterialSymbolsLightHighlighterSize4Icon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
