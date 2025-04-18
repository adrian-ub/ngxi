import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[uimHospitalSquareSignIcon],svg[uim-hospital-square-sign-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M15 6a1 1 0 0 0-1 1v4h-4V7a1 1 0 0 0-2 0v10a1 1 0 0 0 2 0v-4h4v4a1 1 0 0 0 2 0V7a1 1 0 0 0-1-1"></svg:path><svg:path fill="currentColor" d="M19 2H5a3.003 3.003 0 0 0-3 3v14a3.003 3.003 0 0 0 3 3h14a3.003 3.003 0 0 0 3-3V5a3.003 3.003 0 0 0-3-3m-3 15a1 1 0 0 1-2 0v-4h-4v4a1 1 0 0 1-2 0V7a1 1 0 0 1 2 0v4h4V7a1 1 0 0 1 2 0Z" opacity=".5"></svg:path>`,
})
export class UimHospitalSquareSignIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
