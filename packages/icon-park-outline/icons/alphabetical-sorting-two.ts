import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[iconParkOutlineAlphabeticalSortingTwoIcon],svg[icon-park-outline-alphabetical-sorting-two-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="4" d="M36 4v39.5M7 4h16L7 20h16M7 44l8.276-16L23 44m21-8l-8 8l-8-8"></svg:path>`,
})
export class IconParkOutlineAlphabeticalSortingTwoIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}
