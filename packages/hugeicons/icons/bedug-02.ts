import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[hugeiconsBedug02Icon],svg[hugeicons-bedug-02-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" color="currentColor"><svg:path d="M22 10c0-3.866-1.5-6-4-7c-1.466-.622-3.391-1-5.5-1S8.466 2.378 7 3"></svg:path><svg:path d="M7 3c1.466-.622 3.391-1 5.5-1s4.034.378 5.5 1c2.5 1 4 3.134 4 7s-1.5 6-4 7c-1.466.622-3.391 1-5.5 1s-4.034-.378-5.5-1m2 5l9-9M2 15l5-5"></svg:path><svg:path d="M3 10c0-3.866 1.79-7 4-7s4 3.134 4 7s-1.79 7-4 7c-1.487 0-2.784-1.42-3.474-3.526M7 10h.009M18 22l-2-2"></svg:path></svg:g>`,
})
export class HugeiconsBedug02Icon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
