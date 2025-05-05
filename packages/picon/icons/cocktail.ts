import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[piconCocktailIcon],svg[picon-cocktail-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M4 8H1l1-1V5L0 2h5L3 5v2m3-5.5H4C6-2 9 3 5 3"></svg:path>`,
})
export class PiconCocktailIcon {
  readonly viewBox = input("0 0 8 8")
  readonly width = input("1em")
  readonly height = input("1em")
}
