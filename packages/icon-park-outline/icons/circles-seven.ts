import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[iconParkOutlineCirclesSevenIcon],svg[icon-park-outline-circles-seven-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="4" d="M24 12a4 4 0 1 0 0-8a4 4 0 0 0 0 8m0 16a4 4 0 1 0 0-8a4 4 0 0 0 0 8m10.393-10a4 4 0 1 0 6.928-4a4 4 0 0 0-6.928 4m0 12a4 4 0 1 0 6.928 4a4 4 0 0 0-6.928-4M24 36a4 4 0 1 0 0 8a4 4 0 0 0 0-8m-10.392-6a4 4 0 1 0-6.928 4a4 4 0 0 0 6.928-4m0-12a4 4 0 1 0-6.928-4a4 4 0 0 0 6.928 4" clip-rule="evenodd"></svg:path>`,
})
export class IconParkOutlineCirclesSevenIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}
