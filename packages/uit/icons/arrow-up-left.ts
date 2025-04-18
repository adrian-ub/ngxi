import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[uitArrowUpLeftIcon],svg[uit-arrow-up-left-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M7.868 7.096h9.584a.548.548 0 0 0 0-1.096H6.548A.55.55 0 0 0 6 6.548v10.904a.548.548 0 1 0 1.096 0V7.867l9.97 9.97a.543.543 0 0 0 .773 0a.545.545 0 0 0-.001-.77z"></svg:path>`,
})
export class UitArrowUpLeftIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
