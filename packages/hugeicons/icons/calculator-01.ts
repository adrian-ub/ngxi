import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[hugeiconsCalculator01Icon],svg[hugeicons-calculator-01-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M3 10h18m-6-4h2m4 7v-2c0-4.243 0-6.364-1.318-7.682S16.242 2 12 2S5.636 2 4.318 3.318S3 6.758 3 11v2c0 4.243 0 6.364 1.318 7.682S7.758 22 12 22s6.364 0 7.682-1.318S21 17.242 21 13M7 14h.526m4.21 0h.527m4.21 0H17M7 18h.526m4.21 0h.527m4.21 0H17" color="currentColor"></svg:path>`,
})
export class HugeiconsCalculator01Icon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
