import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[riMoneyPoundCircleFillIcon],svg[ri-money-pound-circle-fill-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M12.005 22.003c-5.523 0-10-4.477-10-10s4.477-10 10-10s10 4.477 10 10s-4.477 10-10 10m-3-9v2h-1v2h8v-2h-5v-2h3v-2h-3v-1a1.5 1.5 0 0 1 2.76-.815l1.986-.497a3.501 3.501 0 0 0-6.746 1.312v1h-1v2z"></svg:path>`,
})
export class RiMoneyPoundCircleFillIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
