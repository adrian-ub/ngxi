import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[iconParkSolidWeightliftingIcon],svg[icon-park-solid-weightlifting-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-miterlimit="2" stroke-width="4"><svg:path fill="currentColor" d="M24 27a5 5 0 1 0 0-10a5 5 0 0 0 0 10Z"></svg:path><svg:path stroke-linecap="round" stroke-linejoin="round" d="M4 9h40M4 4v10M44 4v10M11 9v17.1L24 34l13-8V9M24 34v10"></svg:path></svg:g>`,
})
export class IconParkSolidWeightliftingIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}
