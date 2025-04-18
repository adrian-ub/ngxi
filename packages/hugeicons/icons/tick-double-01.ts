import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[hugeiconsTickDouble01Icon],svg[hugeicons-tick-double-01-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M3 13.333S4.5 14 6.5 17c0 0 .285-.48.821-1.247M17 6c-2.291 1.146-4.688 3.552-6.612 5.822M8 13.333S9.5 14 11.5 17c0 0 5.5-8.5 10.5-11" color="currentColor"></svg:path>`,
})
export class HugeiconsTickDouble01Icon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
