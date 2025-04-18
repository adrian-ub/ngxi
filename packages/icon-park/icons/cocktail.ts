import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[iconParkCocktailIcon],svg[icon-park-cocktail-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="#000" stroke-linecap="round" stroke-width="4"><svg:path stroke-linejoin="round" d="M35.8 13H32L21 32L9.8 13H6"></svg:path><svg:path d="M25.7509 25.5961C31.3517 28.7466 38.446 26.7602 41.5964 21.1594C44.7469 15.5586 42.7605 8.46427 37.1597 5.31383C31.5589 2.16338 24.4646 4.14978 21.3142 9.75057"></svg:path><svg:path stroke-linejoin="round" d="M26 44H16"></svg:path><svg:path stroke-linejoin="round" d="M21 44L21 32"></svg:path><svg:path stroke-linejoin="round" d="M12 16C12 16 14 14 17 14C20 14 22 17 25 17C28 17 30 16 30 16"></svg:path></svg:g>`,
})
export class IconParkCocktailIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}
