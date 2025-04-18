import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[icOutlineElectricMeterIcon],svg[ic-outline-electric-meter-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M21 11a9 9 0 0 0-18 0c0 3.92 2.51 7.24 6 8.48V22h2v-2.06a8.3 8.3 0 0 0 2 0V22h2v-2.52c3.49-1.24 6-4.56 6-8.48m-9 7c-3.86 0-7-3.14-7-7s3.14-7 7-7s7 3.14 7 7s-3.14 7-7 7"></svg:path><svg:path fill="currentColor" d="M8 7h8v2H8zm4.75 3l-3 3L11 14.25L9.75 15.5l1.5 1.5l3-3L13 12.75l1.25-1.25z"></svg:path>`,
})
export class IcOutlineElectricMeterIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
