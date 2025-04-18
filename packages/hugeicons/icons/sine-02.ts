import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[hugeiconsSine02Icon],svg[hugeicons-sine-02-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M21 9.011C21 12.001 20.087 21 16.177 21c-2.045 0-3.343-3.62-4.177-9S9.868 3 7.823 3C3.913 3 3 12 3 14.989M2 12h3m3 0h2m4 0h2m3 0h3" color="currentColor"></svg:path>`,
})
export class HugeiconsSine02Icon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
