import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[pepiconsClockPrintIcon],svg[pepicons-clock-print-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="currentColor"><svg:path d="M18.75 11a7 7 0 1 1-14 0a7 7 0 0 1 14 0Z" opacity=".8"></svg:path><svg:path fill-rule="evenodd" d="M10 16a6 6 0 1 0 0-12a6 6 0 0 0 0 12Zm0 1a7 7 0 1 0 0-14a7 7 0 0 0 0 14Z" clip-rule="evenodd"></svg:path><svg:path fill-rule="evenodd" d="M10 6.5a.5.5 0 0 1 .5.5v3a.5.5 0 0 1-1 0V7a.5.5 0 0 1 .5-.5Z" clip-rule="evenodd"></svg:path><svg:path fill-rule="evenodd" d="M13.5 10a.5.5 0 0 1-.5.5h-3a.5.5 0 0 1 0-1h3a.5.5 0 0 1 .5.5Z" clip-rule="evenodd"></svg:path></svg:g>`,
})
export class PepiconsClockPrintIcon {
  readonly viewBox = input("0 0 20 20")
  readonly width = input("1em")
  readonly height = input("1em")
}
