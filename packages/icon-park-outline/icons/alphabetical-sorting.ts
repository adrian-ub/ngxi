import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[iconParkOutlineAlphabeticalSortingIcon],svg[icon-park-outline-alphabetical-sorting-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="4" d="M36 4v39.5M7 28h16L7 44h16M7 20l8.276-16L23 20m21 16l-8 8l-8-8"></svg:path>`,
})
export class IconParkOutlineAlphabeticalSortingIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}
