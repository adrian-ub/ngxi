import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[iconParkTwotoneHospitalFourIcon],svg[icon-park-twotone-hospital-four-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:defs><svg:mask id="ipTHospitalFour0"><svg:g fill="none" stroke="#fff" stroke-linejoin="round" stroke-width="4"><svg:path fill="#555" d="M4 8a2 2 0 0 1 2-2h20a2 2 0 0 1 2 2v34H6a2 2 0 0 1-2-2z"></svg:path><svg:path d="M21 42v-9a3 3 0 0 0-3-3h-4a3 3 0 0 0-3 3v9"></svg:path><svg:path fill="#555" d="M28 24h14a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H28z"></svg:path><svg:path stroke-linecap="round" d="M12 18h8m14 12h4m-4 6h4M16 14v8M7 42h18"></svg:path></svg:g></svg:mask></svg:defs><svg:path fill="currentColor" d="M0 0h48v48H0z" mask="url(#ipTHospitalFour0)"></svg:path>`,
})
export class IconParkTwotoneHospitalFourIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}
