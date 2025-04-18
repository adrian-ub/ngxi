import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[materialSymbolsBookmarkStarSharpIcon],svg[material-symbols-bookmark-star-sharp-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M9.725 14L12 12.625L14.275 14l-.6-2.6l2-1.725l-2.625-.225L12 7l-1.05 2.45l-2.625.225l2 1.725zM5 21V3h14v18l-7-3z"></svg:path>`,
})
export class MaterialSymbolsBookmarkStarSharpIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
