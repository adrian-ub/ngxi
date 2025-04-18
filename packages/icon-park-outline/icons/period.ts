import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[iconParkOutlinePeriodIcon],svg[icon-park-outline-period-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="square" stroke-width="4" d="M8 4q6.003 5.006 6.003 10.005c0 5-4.003 7.239-6.003 9.995s-2.995 5.931-2.995 10.003Q5.005 38.075 8 44M40.003 4Q34 9.006 34 14.005c0 5 4.004 7.239 6.004 9.995s2.995 5.931 2.995 10.003q0 4.072-2.995 9.997m-26-14.817q3.783-.363 6.281 1.08c2.5 1.445 3.707 3.097 3.715 4.694q.009 1.598 0 9.043m10.004-14.817q-3.782-.363-6.281 1.08c-2.5 1.445-3.707 3.097-3.715 4.694"></svg:path>`,
})
export class IconParkOutlinePeriodIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}
