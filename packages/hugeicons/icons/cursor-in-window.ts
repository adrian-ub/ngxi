import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[hugeiconsCursorInWindowIcon],svg[hugeicons-cursor-in-window-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" color="currentColor"><svg:path d="M20 10c0-3.771 0-5.657-1.172-6.828S15.771 2 12 2h-2C6.229 2 4.343 2 3.172 3.172S2 6.229 2 10v2c0 3.771 0 5.657 1.172 6.828C4.235 19.892 5.886 19.99 9 20h.5"></svg:path><svg:path d="M14.529 21.06c-1.648.114-3.28-7.57-2.16-8.69c1.122-1.12 8.805.51 8.69 2.157c-.078 1.08-1.904 1.506-1.85 2.465c.015.28.37.537 1.08 1.048c.492.356.995.701 1.48 1.069a.6.6 0 0 1 .213.625a3.05 3.05 0 0 1-2.248 2.248a.6.6 0 0 1-.625-.213c-.367-.485-.712-.988-1.068-1.48c-.512-.71-.768-1.065-1.049-1.08c-.958-.054-1.385 1.772-2.464 1.85M2 7h18"></svg:path></svg:g>`,
})
export class HugeiconsCursorInWindowIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
