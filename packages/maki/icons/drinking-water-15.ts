import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[makiDrinkingWater15Icon],svg[maki-drinking-water-15-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path d="M6 1a2 2 0 0 0-2 2v3.5a.5.5 0 0 0 .5.5h2a.5.5 0 0 0 .5-.5v-2a.5.5 0 0 1 .5-.5H14V1H6z" fill="currentColor"></svg:path><svg:path d="M7 15H4a.5.5 0 0 1-.48-.38L2 8.62A.5.5 0 0 1 2.5 8h6a.5.5 0 0 1 .5.62l-1.5 6A.5.5 0 0 1 7 15zm-3.35-4h3.71l.5-2H3.14z" fill="currentColor"></svg:path>`,
})
export class MakiDrinkingWater15Icon {
  readonly viewBox = input("0 0 15 15")
  readonly width = input("1em")
  readonly height = input("1em")
}
