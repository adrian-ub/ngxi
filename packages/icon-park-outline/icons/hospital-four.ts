import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[iconParkOutlineHospitalFourIcon],svg[icon-park-outline-hospital-four-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linejoin="round" stroke-width="4"><svg:path d="M4 8a2 2 0 0 1 2-2h20a2 2 0 0 1 2 2v34H6a2 2 0 0 1-2-2z"></svg:path><svg:path d="M21 42v-9a3 3 0 0 0-3-3h-4a3 3 0 0 0-3 3v9m17-18h14a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H28z"></svg:path><svg:path stroke-linecap="round" d="M12 18h8m14 12h4m-4 6h4M16 14v8M7 42h18"></svg:path></svg:g>`,
})
export class IconParkOutlineHospitalFourIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}
