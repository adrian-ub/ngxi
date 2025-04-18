import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[hugeiconsImage02Icon],svg[hugeicons-image-02-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" color="currentColor"><svg:path d="M2.5 12c0-4.478 0-6.718 1.391-8.109S7.521 2.5 12 2.5c4.478 0 6.718 0 8.109 1.391S21.5 7.521 21.5 12c0 4.478 0 6.718-1.391 8.109S16.479 21.5 12 21.5c-4.478 0-6.718 0-8.109-1.391S2.5 16.479 2.5 12"></svg:path><svg:circle cx="16.5" cy="7.5" r="1.5"></svg:circle><svg:path d="M16 22c-.62-2.225-2.065-4.218-4.123-5.666c-2.22-1.561-5.005-2.387-7.861-2.331q-.51-.001-1.016.032"></svg:path><svg:path d="M13 18c1.701-1.327 3.535-2.007 5.386-2a7.8 7.8 0 0 1 3.114.662"></svg:path></svg:g>`,
})
export class HugeiconsImage02Icon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
