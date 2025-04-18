import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[riMoneyCnyBoxFillIcon],svg[ri-money-cny-box-fill-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M3.005 3.003h18a1 1 0 0 1 1 1v16a1 1 0 0 1-1 1h-18a1 1 0 0 1-1-1v-16a1 1 0 0 1 1-1m10 10v-1h3v-2h-2.586L15.54 7.88l-1.414-1.414l-2.121 2.122l-2.121-2.122L8.469 7.88l2.122 2.122H8.005v2h3v1h-3v2h3v2h2v-2h3v-2z"></svg:path>`,
})
export class RiMoneyCnyBoxFillIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
