import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[hugeiconsBorderRight02Icon],svg[hugeicons-border-right-02-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M6.333 2.751c-1.048.194-1.82.536-2.43 1.14c-.61.605-.954 1.37-1.15 2.409M14 2.505q-.883-.006-1.917-.005q-1.034-.001-1.916.005M2.505 10.1q-.006.875-.005 1.9q-.001 1.025.005 1.9m.249 3.8c.195 1.04.54 1.804 1.15 2.409s1.381.946 2.43 1.14m7.666.246q-.883.006-1.917.005q-1.034.001-1.916-.005M17.5 2.5c1.094.199 1.899.55 2.535 1.17C21.5 5.1 21.5 7.4 21.5 12s0 6.9-1.465 8.33c-.636.62-1.441.972-2.535 1.17" color="currentColor"></svg:path>`,
})
export class HugeiconsBorderRight02Icon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
