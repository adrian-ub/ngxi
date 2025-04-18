import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[pepiconsPrintPinpointOffIcon],svg[pepicons-print-pinpoint-off-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="currentColor"><svg:path d="M12.5 19.5c-2.777 0-7-6.875-7-10.877c0-3.932 3.132-7.123 7-7.123s7 3.191 7 7.123c0 4.002-4.223 10.877-7 10.877" opacity=".2"></svg:path><svg:path fill-rule="evenodd" d="M10 11a3 3 0 1 0 0-6a3 3 0 0 0 0 6m0-5a2 2 0 1 1 0 4a2 2 0 0 1 0-4" clip-rule="evenodd"></svg:path><svg:path fill-rule="evenodd" d="M3 8.123C3 12.125 7.223 19 10 19s7-6.875 7-10.877C17 4.191 13.868 1 10 1S3 4.191 3 8.123m13 0C16 11.643 12.096 18 10 18s-6-6.357-6-9.877C4 4.74 6.688 2 10 2s6 2.74 6 6.123" clip-rule="evenodd"></svg:path><svg:path d="M1.15 1.878a.514.514 0 0 1 .728-.727l16.971 16.971a.514.514 0 0 1-.727.727z"></svg:path></svg:g>`,
})
export class PepiconsPrintPinpointOffIcon {
  readonly viewBox = input("0 0 20 20")
  readonly width = input("1em")
  readonly height = input("1em")
}
