import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[riMoneyCnyBoxLineIcon],svg[ri-money-cny-box-line-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M3.005 3.003h18a1 1 0 0 1 1 1v16a1 1 0 0 1-1 1h-18a1 1 0 0 1-1-1v-16a1 1 0 0 1 1-1m1 2v14h16v-14zm9 8h3v2h-3v2h-2v-2h-3v-2h3v-1h-3v-2h2.586L8.469 7.88l1.415-1.414l2.12 2.122l2.122-2.122L15.54 7.88l-2.12 2.122h2.585v2h-3z"></svg:path>`,
})
export class RiMoneyCnyBoxLineIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
