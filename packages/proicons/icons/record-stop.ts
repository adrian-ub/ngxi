import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[proiconsRecordStopIcon],svg[proicons-record-stop-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none"><svg:circle cx="12" cy="12" r="9.25" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5"></svg:circle><svg:rect width="8" height="8" x="8" y="8" fill="currentColor" rx="2"></svg:rect></svg:g>`,
})
export class ProiconsRecordStopIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
