import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[uitArrowDownRightIcon],svg[uit-arrow-down-right-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M17.453 6a.55.55 0 0 0-.549.548v9.585l-9.97-9.971a.546.546 0 0 0-.772.771l9.97 9.971H6.549a.548.548 0 0 0 0 1.096h10.904a.55.55 0 0 0 .548-.548V6.548A.55.55 0 0 0 17.453 6"></svg:path>`,
})
export class UitArrowDownRightIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
