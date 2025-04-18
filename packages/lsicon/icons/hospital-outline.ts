import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[lsiconHospitalOutlineIcon],svg[lsicon-hospital-outline-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" d="M5 8h6M8 5v6M2.05 9.55l4.536 4.536a2 2 0 0 0 2.828 0L13.95 9.55a2 2 0 0 0 0-2.828L9.414 2.186a2 2 0 0 0-2.828 0L2.05 6.722a2 2 0 0 0 0 2.828Z"></svg:path>`,
})
export class LsiconHospitalOutlineIcon {
  readonly viewBox = input("0 0 16 16")
  readonly width = input("1em")
  readonly height = input("1em")
}
