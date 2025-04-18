import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[riMoneyCnyCircleLineIcon],svg[ri-money-cny-circle-line-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M12.005 22.003c-5.523 0-10-4.477-10-10s4.477-10 10-10s10 4.477 10 10s-4.477 10-10 10m0-2a8 8 0 1 0 0-16a8 8 0 0 0 0 16m1-7h3v2h-3v2h-2v-2h-3v-2h3v-1h-3v-2h2.586L8.469 7.88l1.415-1.414l2.12 2.122l2.122-2.122L15.54 7.88l-2.12 2.122h2.585v2h-3z"></svg:path>`,
})
export class RiMoneyCnyCircleLineIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
