import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[tablerClothesRackOffIcon],svg[tabler-clothes-rack-off-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M10 5a2 2 0 1 0 4 0a2 2 0 1 0-4 0m2 2v1m0 4v9m-3 0h6M7.757 9.243a6 6 0 0 0 3.129 1.653m3.578-.424a6 6 0 0 0 1.779-1.229M3 3l18 18"></svg:path>`,
})
export class TablerClothesRackOffIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
