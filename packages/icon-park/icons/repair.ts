import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[iconParkRepairIcon],svg[icon-park-repair-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="#000" stroke-linecap="round" stroke-linejoin="round" stroke-width="4"><svg:path d="M17 14L29 14"></svg:path><svg:path d="M23 28L23 15"></svg:path><svg:path d="M20.1429 42H8C6.89543 42 6 41.1046 6 40V7C6 5.89543 6.89543 5 8 5H40C41.1046 5 42 5.89543 42 7V16.7167"></svg:path><svg:path fill="#2F88FF" d="M27 38L37.5 23.5L42 27L31 42H27V38Z"></svg:path></svg:g>`,
})
export class IconParkRepairIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}
