import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[uimHospitalIcon],svg[uim-hospital-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M12.5 14.5h-1a1 1 0 0 1 0-2h1a1 1 0 0 1 0 2m0 4h-1a1 1 0 0 1 0-2h1a1 1 0 0 1 0 2m-5-4h-1a1 1 0 0 1 0-2h1a1 1 0 0 1 0 2m0 4h-1a1 1 0 0 1 0-2h1a1 1 0 0 1 0 2m10-4h-1a1 1 0 0 1 0-2h1a1 1 0 0 1 0 2m0 4h-1a1 1 0 0 1 0-2h1a1 1 0 0 1 0 2" opacity=".5"></svg:path><svg:path fill="currentColor" d="M13.5 7H13v-.5a1 1 0 0 0-2 0V7h-.5a1 1 0 0 0 0 2h.5v.5a1 1 0 0 0 2 0V9h.5a1 1 0 0 0 0-2"></svg:path><svg:path fill="currentColor" d="M21.5 6.5h-3v-4a1 1 0 0 0-1-1h-11a1 1 0 0 0-1 1v4h-3a1 1 0 0 0-1 1v14a1 1 0 0 0 1 1h19a1 1 0 0 0 1-1v-14a1 1 0 0 0-1-1m-14 12h-1a1 1 0 0 1 0-2h1a1 1 0 0 1 0 2m0-4h-1a1 1 0 0 1 0-2h1a1 1 0 0 1 0 2m5 4h-1a1 1 0 0 1 0-2h1a1 1 0 0 1 0 2m0-4h-1a1 1 0 0 1 0-2h1a1 1 0 0 1 0 2m1-5.5H13v.5a1 1 0 0 1-2 0V9h-.5a1 1 0 0 1 0-2h.5v-.5a1 1 0 0 1 2 0V7h.5a1 1 0 0 1 0 2m4 9.5h-1a1 1 0 0 1 0-2h1a1 1 0 0 1 0 2m0-4h-1a1 1 0 0 1 0-2h1a1 1 0 0 1 0 2" opacity=".25"></svg:path>`,
})
export class UimHospitalIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
