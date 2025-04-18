import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[hugeiconsTable01Icon],svg[hugeicons-table-01-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M20 10s2.375 1.822 1.375 4.667s0 4.74.625 5.333m-2-10H4m16 0V4M4 10s-2.375 1.822-1.375 4.667s0 4.74-.625 5.333m2-10V4m18 0h-2M2 4h2m0 0h16m-9 3h2" color="currentColor"></svg:path>`,
})
export class HugeiconsTable01Icon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
