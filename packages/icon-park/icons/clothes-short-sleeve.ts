import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[iconParkClothesShortSleeveIcon],svg[icon-park-clothes-short-sleeve-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="#000" stroke-linecap="round" stroke-linejoin="round" stroke-width="4"><svg:path d="M44 4H4V12H10V44H38V12H44V4Z"></svg:path><svg:path d="M10 32H38"></svg:path><svg:path d="M10 24H38"></svg:path><svg:path d="M30 4C30 7.31371 27.3137 10 24 10C20.6863 10 18 7.31371 18 4"></svg:path></svg:g>`,
})
export class IconParkClothesShortSleeveIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}
