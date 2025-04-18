import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[streamlineBill4Icon],svg[streamline-bill-4-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"><svg:path d="M10 1.75H1.5a1 1 0 0 0-1 1v6a1 1 0 0 0 1 1H10a1 1 0 0 0 1-1v-6a1 1 0 0 0-1-1"></svg:path><svg:path d="M3.5 12.25h9a1 1 0 0 0 1-1v-5M2.525 5.857a.25.25 0 0 1 0-.5m0 .5a.25.25 0 0 0 0-.5m6.45.5a.25.25 0 0 1 0-.5m0 .5a.25.25 0 0 0 0-.5M5.75 7a1.25 1.25 0 1 0 0-2.5a1.25 1.25 0 0 0 0 2.5"></svg:path></svg:g>`,
})
export class StreamlineBill4Icon {
  readonly viewBox = input("0 0 14 14")
  readonly width = input("1em")
  readonly height = input("1em")
}
