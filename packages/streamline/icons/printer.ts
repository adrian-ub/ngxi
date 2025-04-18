import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[streamlinePrinterIcon],svg[streamline-printer-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"><svg:path d="M10.5 11h2a1 1 0 0 0 1-1V5.5a1 1 0 0 0-1-1h-11a1 1 0 0 0-1 1V10a1 1 0 0 0 1 1h2"></svg:path><svg:path d="M3.5 9.5V13a.5.5 0 0 0 .5.5h6a.5.5 0 0 0 .5-.5V9.5zm7-5V1a.5.5 0 0 0-.5-.5H4a.5.5 0 0 0-.5.5v3.5M11 7h-1"></svg:path></svg:g>`,
})
export class StreamlinePrinterIcon {
  readonly viewBox = input("0 0 14 14")
  readonly width = input("1em")
  readonly height = input("1em")
}
