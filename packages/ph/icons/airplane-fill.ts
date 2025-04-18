import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[phAirplaneFillIcon],svg[ph-airplane-fill-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M240 136v32a8 8 0 0 1-8 8a7.6 7.6 0 0 1-1.57-.16L156 161v23.73l17.66 17.65A8 8 0 0 1 176 208v24a8 8 0 0 1-11 7.43l-37-14.81l-37 14.81A8 8 0 0 1 80 232v-24a8 8 0 0 1 2.34-5.66L100 184.69V161l-74.43 14.84A7.6 7.6 0 0 1 24 176a8 8 0 0 1-8-8v-32a8 8 0 0 1 4.42-7.16L100 89.06V44a28 28 0 0 1 56 0v45.06l79.58 39.78A8 8 0 0 1 240 136"></svg:path>`,
})
export class PhAirplaneFillIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}
