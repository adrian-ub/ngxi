import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[fluentBookArrowClockwise24FilledIcon],svg[fluent-book-arrow-clockwise-24-filled-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M22 4.25a.75.75 0 0 1-.75.75H18.5a.75.75 0 0 1 0-1.5h1.33l-.008-.006l-.01-.007A4.5 4.5 0 1 0 21.5 7A.75.75 0 0 1 23 7a6 6 0 1 1-2.5-4.874V1.5a.746.746 0 0 1 .75-.75a.75.75 0 0 1 .75.75zM12.101 2H6.5A2.5 2.5 0 0 0 4 4.5v15A2.5 2.5 0 0 0 6.5 22h13.25a.75.75 0 0 0 0-1.5H6.5a1 1 0 0 1-1-1h14.25a.75.75 0 0 0 .75-.75v-5.687A7.003 7.003 0 0 1 10.07 8a7.1 7.1 0 0 1 .22-3q.155-.519.384-1A7 7 0 0 1 12.1 2"></svg:path>`,
})
export class FluentBookArrowClockwise24FilledIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
