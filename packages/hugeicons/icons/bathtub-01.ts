import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[hugeiconsBathtub01Icon],svg[hugeicons-bathtub-01-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="m6 20l-1 1m13-1l1 1M3 12v1c0 3.3 0 4.95 1.025 5.975S6.7 20 10 20h4c3.3 0 4.95 0 5.975-1.025S21 16.3 21 13v-1M2 12h20M4 12V5.523a2.523 2.523 0 0 1 4.943-.715L9 5M8 6l2.5-2" color="currentColor"></svg:path>`,
})
export class HugeiconsBathtub01Icon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
