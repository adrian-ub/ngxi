import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[materialSymbolsLightHighlighterSize2Icon],svg[material-symbols-light-highlighter-size-2-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="m7.396 18.704l-2.1-2.1q-.165-.166-.165-.367t.165-.366L15.871 5.296q.166-.165.367-.165t.366.165l2.1 2.125q.14.14.14.354t-.14.354L8.129 18.704q-.165.165-.366.165t-.367-.165"></svg:path>`,
})
export class MaterialSymbolsLightHighlighterSize2Icon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
