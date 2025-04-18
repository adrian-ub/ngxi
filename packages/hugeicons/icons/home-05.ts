import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[hugeiconsHome05Icon],svg[hugeicons-home-05-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" color="currentColor"><svg:path d="M12 17h.009M20 8.5v5c0 3.771 0 5.657-1.172 6.828S15.771 21.5 12 21.5s-5.657 0-6.828-1.172S4 17.271 4 13.5v-5"></svg:path><svg:path d="m22 10.5l-4.343-4.165C14.99 3.778 13.657 2.5 12 2.5S9.01 3.778 6.343 6.335L2 10.5"></svg:path></svg:g>`,
})
export class HugeiconsHome05Icon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
