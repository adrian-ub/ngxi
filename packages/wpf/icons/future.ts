import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[wpfFutureIcon],svg[wpf-future-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M13 0v2C6.955 2 2 6.955 2 13s4.955 11 11 11s11-4.955 11-11c0-2.947-1.11-5.61-3.094-7.594L19.5 6.813C21.117 8.428 22 10.546 22 13c0 4.955-4.045 9-9 9s-9-4.045-9-9s4.045-9 9-9v2l5-3zm2.094 6.563l-2.5 5A1.48 1.48 0 0 0 11.5 13a1.5 1.5 0 0 0 1.5 1.5h.063l3.218 3.219l1.438-1.438l-3.219-3.218V13c0-.197-.056-.39-.125-.563l2.531-5l-1.812-.875z"></svg:path>`,
})
export class WpfFutureIcon {
  readonly viewBox = input("0 0 26 26")
  readonly width = input("1em")
  readonly height = input("1em")
}
