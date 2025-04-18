import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[pepiconsPrintBatteryIcon],svg[pepicons-print-battery-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="currentColor"><svg:g opacity=".2"><svg:rect width="13" height="8" x="3" y="7" rx="1"></svg:rect><svg:rect width="2" height="5" x="16.5" y="8.5" rx=".5"></svg:rect></svg:g><svg:rect width="2" height="5" x="16" y="7.5" rx=".5"></svg:rect><svg:path d="M4 7.5h2.5v5H4zm3.25 0h2.5v5h-2.5zm3.25 0H13v5h-2.5z"></svg:path><svg:path fill-rule="evenodd" d="M14 5.5H3A1.5 1.5 0 0 0 1.5 7v6A1.5 1.5 0 0 0 3 14.5h11a1.5 1.5 0 0 0 1.5-1.5V7A1.5 1.5 0 0 0 14 5.5M2.5 7a.5.5 0 0 1 .5-.5h11a.5.5 0 0 1 .5.5v6a.5.5 0 0 1-.5.5H3a.5.5 0 0 1-.5-.5z" clip-rule="evenodd"></svg:path></svg:g>`,
})
export class PepiconsPrintBatteryIcon {
  readonly viewBox = input("0 0 20 20")
  readonly width = input("1em")
  readonly height = input("1em")
}
