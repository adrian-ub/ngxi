import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[iconParkOutlineClothesShortSleeveIcon],svg[icon-park-outline-clothes-short-sleeve-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="4"><svg:path d="M44 4H4v8h6v32h28V12h6zM10 32h28m-28-8h28"></svg:path><svg:path d="M30 4a6 6 0 0 1-12 0"></svg:path></svg:g>`,
})
export class IconParkOutlineClothesShortSleeveIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}
