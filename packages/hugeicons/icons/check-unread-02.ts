import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[hugeiconsCheckUnread02Icon],svg[hugeicons-check-unread-02-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M2.5 13.5S4.5 14 6 17c0 0 .285-.48.821-1.247M16.5 6c-1.508.754-3.062 2.055-4.497 3.503M7.5 13.5s2 .5 3.5 3.5c0 0 .715-1.105 1.864-2.636M21.5 6c-2.395 1.198-4.905 3.772-6.87 6.13M3.5 5l14 14" color="currentColor"></svg:path>`,
})
export class HugeiconsCheckUnread02Icon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
