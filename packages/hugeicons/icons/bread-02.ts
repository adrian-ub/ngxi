import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[hugeiconsBread02Icon],svg[hugeicons-bread-02-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" color="currentColor"><svg:path d="M12 14c0 3-2.239 3-5 3s-5 0-5-3s2.239-7 5-7s5 4 5 7"></svg:path><svg:path d="M7 7h10c2.761 0 5 4 5 7s-2.239 3-5 3H7"></svg:path><svg:path d="M5.86 17C7.436 17 9 16.1 9 14s-.858-4-2.355-4s-2.327 3.97-.928 4.5c1.32.5 1.328-1.5 1.328-1.5"></svg:path></svg:g>`,
})
export class HugeiconsBread02Icon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
