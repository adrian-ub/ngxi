import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[materialSymbolsCardsStarSharpIcon],svg[material-symbols-cards-star-sharp-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="m12.225 12.5l2.275-1.375l2.275 1.375l-.6-2.6l2-1.725l-2.625-.225L14.5 5.5l-1.05 2.45l-2.625.225l2 1.725zM3.7 22.125L1.85 7.2L5 6.85V19h13.3l.125 1.325zM7 17V2h15v15z"></svg:path>`,
})
export class MaterialSymbolsCardsStarSharpIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
