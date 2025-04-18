import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[iconParkOutlineCocktailIcon],svg[icon-park-outline-cocktail-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-width="4"><svg:path stroke-linejoin="round" d="M35.8 13H32L21 32L9.8 13H6"></svg:path><svg:path d="M25.75 25.596c5.602 3.15 12.696 1.164 15.846-4.437c3.15-5.6 1.165-12.695-4.436-15.845S24.465 4.15 21.314 9.75"></svg:path><svg:path stroke-linejoin="round" d="M26 44H16m5 0V32m-9-16s2-2 5-2s5 3 8 3s5-1 5-1"></svg:path></svg:g>`,
})
export class IconParkOutlineCocktailIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}
