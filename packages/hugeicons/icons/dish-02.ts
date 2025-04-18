import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[hugeiconsDish02Icon],svg[hugeicons-dish-02-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" color="currentColor"><svg:path d="M21 17a5 5 0 0 1 0-10"></svg:path><svg:path d="M21 21a9 9 0 1 1 0-18M6 3v5m0 13V11M3.5 8h5M9 3v4.352c0 4.864-6 4.864-6 0V3"></svg:path></svg:g>`,
})
export class HugeiconsDish02Icon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
