import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[hugeiconsCursorPointer01Icon],svg[hugeicons-cursor-pointer-01-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" color="currentColor"><svg:path d="M13.034 20.872c-1.977.136-3.935-9.083-2.59-10.428s10.564.612 10.428 2.589c-.094 1.295-2.286 1.807-2.222 2.957c.02.337.445.644 1.296 1.258c.592.427 1.195.842 1.776 1.282a.72.72 0 0 1 .256.75a3.65 3.65 0 0 1-2.697 2.698a.72.72 0 0 1-.75-.256c-.44-.581-.855-1.184-1.282-1.776c-.614-.852-.921-1.277-1.258-1.296c-1.15-.064-1.662 2.128-2.957 2.222"></svg:path><svg:path d="M7.051 16A7.157 7.157 0 1 1 16 7.051"></svg:path><svg:path d="M11 6.955A2.865 2.865 0 1 0 6.955 11"></svg:path></svg:g>`,
})
export class HugeiconsCursorPointer01Icon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
