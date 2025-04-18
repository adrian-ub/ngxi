import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[hugeiconsCafeIcon],svg[hugeicons-cafe-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M18 7.792A2.5 2.5 0 0 0 19.5 5.5L18 3H6L4.5 5.5A2.5 2.5 0 0 0 6 7.792m12 0A2.5 2.5 0 0 1 14.5 5.5a2.5 2.5 0 0 1-5 0A2.5 2.5 0 0 1 6 7.792m12 0V11M6 7.792V11m-3 1v5m0 0h2c1.414 0 2.121 0 2.56.44C8 17.878 8 18.585 8 20v1m-5-4v4m18-9v5m0 0h-2c-1.414 0-2.121 0-2.56.44C16 17.878 16 18.585 16 20v1m5-4v4M7 14h5m5 0h-5m0 0v7m0 0h-1m1 0h1" color="currentColor"></svg:path>`,
})
export class HugeiconsCafeIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
