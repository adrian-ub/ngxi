import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[vsTimeslotIcon],svg[vs-timeslot-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M320 320q-120 0-220 103.5T0 667v324q0 140 100 246.5T320 1344h1024q119 0 219.5-103.5T1664 998V667q0-139-100.5-243T1344 320zm-64 320h1152v384H256z"></svg:path>`,
})
export class VsTimeslotIcon {
  readonly viewBox = input("0 0 1664 1344")
  readonly width = input("1.24em")
  readonly height = input("1em")
}
