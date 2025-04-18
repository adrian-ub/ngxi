import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[uitArrowUpRightIcon],svg[uit-arrow-up-right-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M17.452 6H6.547a.548.548 0 0 0 0 1.096h9.585l-9.97 9.97a.545.545 0 1 0 .772.772l9.97-9.971v9.586a.548.548 0 0 0 1.096 0V6.546A.55.55 0 0 0 17.452 6"></svg:path>`,
})
export class UitArrowUpRightIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
