import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[materialSymbolsLightHighlighterSize5Icon],svg[material-symbols-light-highlighter-size-5-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="m10.596 21.904l-8.5-8.5q-.14-.14-.14-.354t.14-.354l10.6-10.6q.14-.14.351-.13q.21.009.357.155l8.5 8.475q.14.14.14.354t-.14.354l-10.6 10.6q-.14.14-.354.14t-.354-.14"></svg:path>`,
})
export class MaterialSymbolsLightHighlighterSize5Icon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
