import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[iconParkTwotoneHospitalThreeIcon],svg[icon-park-twotone-hospital-three-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:defs><svg:mask id="ipTHospitalThree0"><svg:g fill="none"><svg:path fill="#555" stroke="#fff" stroke-linejoin="round" stroke-width="4" d="M11 26v18h26V26L24 13z"></svg:path><svg:path fill="#fff" d="M3.586 21.586a2 2 0 1 0 2.828 2.828zM24 4l1.414-1.414a2 2 0 0 0-2.828 0zm17.586 20.414a2 2 0 1 0 2.828-2.828zm-35.172 0l19-19l-2.828-2.828l-19 19zm16.172-19l19 19l2.828-2.828l-19-19z"></svg:path><svg:path stroke="#fff" stroke-linecap="round" stroke-linejoin="round" stroke-width="4" d="M19 31h10m-5-5v10"></svg:path></svg:g></svg:mask></svg:defs><svg:path fill="currentColor" d="M0 0h48v48H0z" mask="url(#ipTHospitalThree0)"></svg:path>`,
})
export class IconParkTwotoneHospitalThreeIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}
