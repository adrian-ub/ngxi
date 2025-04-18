import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[materialSymbolsLightHighlighterSize1Icon],svg[material-symbols-light-highlighter-size-1-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="m7.046 18.354l-1.4-1.4q-.165-.165-.165-.366t.165-.367L16.221 5.646q.166-.165.367-.165t.366.165l1.4 1.4q.165.166.165.367t-.165.366l-10.6 10.575q-.14.14-.354.14t-.354-.14"></svg:path>`,
})
export class MaterialSymbolsLightHighlighterSize1Icon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
