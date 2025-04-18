import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[hugeiconsGpsSignal01Icon],svg[hugeicons-gps-signal-01-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" color="currentColor"><svg:path d="M9 10.03A3.515 3.515 0 0 1 13.97 15"></svg:path><svg:path d="M4.853 19.147c3.196 3.196 8.06 3.707 11.789 1.533c.887-.517 1.33-.776 1.357-1.302s-.471-.89-1.468-1.618c-1.848-1.35-3.667-3-5.48-4.812C9.24 11.136 7.59 9.317 6.24 7.47c-.728-.997-1.092-1.495-1.618-1.468s-.785.47-1.302 1.357c-2.174 3.73-1.663 8.593 1.533 11.79M15.557 2c1.68.172 3.224.84 4.412 2.026c1.192 1.19 1.86 2.737 2.031 4.42M18.502 9a4.66 4.66 0 0 0-1.242-2.27A4.67 4.67 0 0 0 15 5.495"></svg:path></svg:g>`,
})
export class HugeiconsGpsSignal01Icon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
