import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[iconParkSolidBuildingOneIcon],svg[icon-park-solid-building-one-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="4"><svg:path fill="currentColor" fill-rule="evenodd" d="M11 14L25 4v40H11z" clip-rule="evenodd"></svg:path><svg:path d="m25 13l14 10v21M4 44h40"></svg:path></svg:g>`,
})
export class IconParkSolidBuildingOneIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}
