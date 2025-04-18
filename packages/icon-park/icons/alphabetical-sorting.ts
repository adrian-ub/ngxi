import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[iconParkAlphabeticalSortingIcon],svg[icon-park-alphabetical-sorting-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="#000" stroke-linecap="round" stroke-linejoin="round" stroke-width="4"><svg:path d="M36 4V43.5"></svg:path><svg:path d="M7 28H23L7 44H23"></svg:path><svg:path d="M7 20L15.2759 4L23 20"></svg:path><svg:path d="M44 36L36 44L28 36"></svg:path></svg:g>`,
})
export class IconParkAlphabeticalSortingIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}
