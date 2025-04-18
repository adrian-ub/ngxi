import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[materialSymbolsCardsStarOutlineSharpIcon],svg[material-symbols-cards-star-outline-sharp-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="m12.225 12.5l2.275-1.375l2.275 1.375l-.6-2.6l2-1.725l-2.625-.225L14.5 5.5l-1.05 2.45l-2.625.225l2 1.725zm.6 6.5h5.425l.175 1.325l-14.725 1.8L1.85 7.2L5 6.85v2l-.9.125L5.45 19.9zM7 17V2h15v15zm2-2h11V4H9zm5.5-5.5"></svg:path>`,
})
export class MaterialSymbolsCardsStarOutlineSharpIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
