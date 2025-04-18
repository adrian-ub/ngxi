import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[hugeiconsMouse15Icon],svg[hugeicons-mouse-15-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M6 2c0 1.802 1.744 1.5 3.007 1.5c2.04 0 2.927.377 2.993 2.5m0 16c5.2 0 6.5-3.608 6.5-8S17.2 6 12 6s-6.5 3.608-6.5 8s1.3 8 6.5 8m0-13v2" color="currentColor"></svg:path>`,
})
export class HugeiconsMouse15Icon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
