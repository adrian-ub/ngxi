import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[bubblesStyleThreePinTableOutlineIcon],svg[bubbles-style-three-pin-table-outline-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5"><svg:path d="m15 8.574l1 4a8.5 8.5 0 0 1-8 0l1-4m10 0H5m1 0v3"></svg:path><svg:path d="M12 .574a11.4 11.4 0 0 1 6.112 1.77c4.75 3.011 5.1 9.23 1.315 13.777a59.3 59.3 0 0 1-7.106 7.189a.5.5 0 0 1-.642 0a59.3 59.3 0 0 1-7.106-7.188C.789 11.574 1.138 5.355 5.888 2.344A11.4 11.4 0 0 1 12 .574"></svg:path></svg:g>`,
})
export class BubblesStyleThreePinTableOutlineIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
