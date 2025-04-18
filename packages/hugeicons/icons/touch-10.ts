import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[hugeiconsTouch10Icon],svg[hugeicons-touch-10-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" color="currentColor"><svg:path d="M6.5 21v-9.5a5.5 5.5 0 1 1 11 0V21"></svg:path><svg:path d="M3 13v-1a9 9 0 0 1 18 0v1"></svg:path><svg:path d="M14.5 11.5a2.5 2.5 0 0 0-5 0v1.25c0 .69.56 1.25 1.25 1.25h2.5c.69 0 1.25-.56 1.25-1.25z"></svg:path></svg:g>`,
})
export class HugeiconsTouch10Icon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
