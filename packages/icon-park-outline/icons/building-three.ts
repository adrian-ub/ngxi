import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[iconParkOutlineBuildingThreeIcon],svg[icon-park-outline-building-three-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="4"><svg:path d="m24 8l20 13v23H4V21z" clip-rule="evenodd"></svg:path><svg:path d="M20 44V23l-8 5v16m16 0V23l8 5v16m5 0H8"></svg:path></svg:g>`,
})
export class IconParkOutlineBuildingThreeIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}
