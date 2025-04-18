import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[iconParkSolidContrastViewCircleIcon],svg[icon-park-solid-contrast-view-circle-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linejoin="round" stroke-width="4"><svg:path stroke-linecap="round" d="M24 4C12.954 4 4 12.954 4 24s8.954 20 20 20z" clip-rule="evenodd"></svg:path><svg:path fill="currentColor" d="M24 4c11.046 0 20 8.954 20 20s-8.954 20-20 20z"></svg:path><svg:path stroke-linecap="round" d="M24 36H9m15-8H5m19-8H5m19-8H9"></svg:path></svg:g>`,
})
export class IconParkSolidContrastViewCircleIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}
