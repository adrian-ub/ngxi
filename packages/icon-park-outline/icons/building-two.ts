import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[iconParkOutlineBuildingTwoIcon],svg[icon-park-outline-building-two-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="4"><svg:path d="m21 13l-10 7v24"></svg:path><svg:path d="m21 4l10 7v13l7 5v15H21z" clip-rule="evenodd"></svg:path><svg:path d="M4 44h40"></svg:path></svg:g>`,
})
export class IconParkOutlineBuildingTwoIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}
