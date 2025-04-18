import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[hugeiconsBriefcase09Icon],svg[hugeicons-briefcase-09-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M7 12v9m10-9v9M3 12h18M2.5 13.75c0-3.653 0-5.48 1.113-6.615S6.517 6 10.1 6h3.8c3.583 0 5.374 0 6.487 1.135S21.5 10.097 21.5 13.75s0 5.48-1.113 6.615S17.483 21.5 13.9 21.5h-3.8c-3.583 0-5.374 0-6.487-1.135S2.5 17.403 2.5 13.75M16.5 6l-.1-.31c-.494-1.54-.742-2.31-1.331-2.75c-.59-.44-1.372-.44-2.937-.44h-.264c-1.565 0-2.348 0-2.937.44c-.59.44-.837 1.21-1.332 2.75L7.5 6" color="currentColor"></svg:path>`,
})
export class HugeiconsBriefcase09Icon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
