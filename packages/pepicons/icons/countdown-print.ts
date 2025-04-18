import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[pepiconsCountdownPrintIcon],svg[pepicons-countdown-print-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="currentColor"><svg:path d="M19 11a7 7 0 1 1-14 0a7 7 0 0 1 14 0Z" opacity=".8"></svg:path><svg:path fill-rule="evenodd" d="M10 3a.5.5 0 0 1 .5-.5A7.5 7.5 0 1 1 3 10a.5.5 0 0 1 1 0a6.5 6.5 0 1 0 6.5-6.5a.5.5 0 0 1-.5-.5Z" clip-rule="evenodd"></svg:path><svg:path d="M8 3.25a.75.75 0 1 1-1.5 0a.75.75 0 0 1 1.5 0Zm-2.5 1.5a.75.75 0 1 1-1.5 0a.75.75 0 0 1 1.5 0ZM4 7.25a.75.75 0 1 1-1.5 0a.75.75 0 0 1 1.5 0Z"></svg:path><svg:path fill-rule="evenodd" d="M5.947 11.224a.5.5 0 0 0-.223-.671l-2-1a.5.5 0 0 0-.448.894l2 1a.5.5 0 0 0 .671-.223Z" clip-rule="evenodd"></svg:path><svg:path fill-rule="evenodd" d="M3.854 9.646a.5.5 0 0 1 0 .708l-1.5 1.5a.5.5 0 1 1-.708-.707l1.5-1.5a.5.5 0 0 1 .708 0ZM10.5 6.5a.5.5 0 0 1 .5.5v3a.5.5 0 0 1-1 0V7a.5.5 0 0 1 .5-.5Z" clip-rule="evenodd"></svg:path><svg:path fill-rule="evenodd" d="M14 10a.5.5 0 0 1-.5.5h-3a.5.5 0 0 1 0-1h3a.5.5 0 0 1 .5.5Z" clip-rule="evenodd"></svg:path></svg:g>`,
})
export class PepiconsCountdownPrintIcon {
  readonly viewBox = input("0 0 20 20")
  readonly width = input("1em")
  readonly height = input("1em")
}
