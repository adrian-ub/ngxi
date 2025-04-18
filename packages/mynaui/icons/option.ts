import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[mynauiOptionIcon],svg[mynaui-option-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M3 7h5.094c.33 0 .495 0 .643.047q.2.064.357.202c.117.103.202.245.372.528l5.068 8.446c.17.284.255.425.372.528q.156.137.356.202c.148.047.314.047.644.047H21M15 7h6"></svg:path>`,
})
export class MynauiOptionIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
