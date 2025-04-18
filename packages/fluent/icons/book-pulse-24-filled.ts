import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[fluentBookPulse24FilledIcon],svg[fluent-book-pulse-24-filled-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M4 4.5A2.5 2.5 0 0 1 6.5 2H18a2.5 2.5 0 0 1 2.5 2.5v14.25a.75.75 0 0 1-.75.75H5.5a1 1 0 0 0 1 1h13.25a.75.75 0 0 1 0 1.5H6.5A2.5 2.5 0 0 1 4 19.5zm7.69 2.958a.75.75 0 0 0-1.36-.043L8.785 10.5H7.75a.75.75 0 0 0 0 1.5h1.5a.75.75 0 0 0 .67-.415l1.023-2.044l2.116 5.001a.75.75 0 0 0 1.339.086L15.93 12h.819a.75.75 0 0 0 0-1.5H15.5a.75.75 0 0 0-.648.372l-.995 1.706z"></svg:path>`,
})
export class FluentBookPulse24FilledIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
