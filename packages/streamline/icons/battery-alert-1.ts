import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[streamlineBatteryAlert1Icon],svg[streamline-battery-alert-1-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"><svg:path d="M13.5 5.5A.5.5 0 0 0 13 5h-.5V3.5a1 1 0 0 0-1-1h-10a1 1 0 0 0-1 1v7a1 1 0 0 0 1 1h10a1 1 0 0 0 1-1V9h.5a.5.5 0 0 0 .5-.5zm-7-1V7"></svg:path><svg:path d="M6.5 9.125a.25.25 0 0 1 0-.5m0 .5a.25.25 0 0 0 0-.5"></svg:path></svg:g>`,
})
export class StreamlineBatteryAlert1Icon {
  readonly viewBox = input("0 0 14 14")
  readonly width = input("1em")
  readonly height = input("1em")
}
