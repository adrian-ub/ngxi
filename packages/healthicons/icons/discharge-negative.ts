import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[healthiconsDischargeNegativeIcon],svg[healthicons-discharge-negative-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none"><svg:g clip-path="url(#healthiconsDischargeNegative0)"><svg:path fill="currentColor" fill-rule="evenodd" d="M48 0H0v48h48zM23 10v3h-3v2h3v3h2v-3h3v-2h-3v-3zM4.064 21.351a1 1 0 1 1 1.873-.702l.275.735a1 1 0 0 1 1.737.3L8.72 24H18v2h-2v2h1a1 1 0 0 1 .04 2l1.714 6h10.491l1.715-6a1 1 0 0 1 .04-2h1v-2h-2v-2h9.279l.772-2.316a1 1 0 0 1 1.736-.3l.276-.735a1 1 0 0 1 1.873.702l-2.891 7.709L42.78 36H43a1 1 0 1 1 0 2H5a1 1 0 1 1 0-2h.22l1.735-6.94zM39.307 28H34v-2h6.057zM14 28v-2H7.943l.75 2zm26.72 8h-9.394l1.429-5h6.714zm-24.045 0l-1.429-5H8.531l-1.25 5z" clip-rule="evenodd"></svg:path></svg:g><svg:defs><svg:clippath id="healthiconsDischargeNegative0"><svg:path d="M0 0h48v48H0z"></svg:path></svg:clippath></svg:defs></svg:g>`,
})
export class HealthiconsDischargeNegativeIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}
