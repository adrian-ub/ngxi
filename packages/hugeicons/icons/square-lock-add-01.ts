import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[hugeiconsSquareLockAdd01Icon],svg[hugeicons-square-lock-add-01-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M11.066 22a94 94 0 0 1-4.41-.1c-1.73-.076-3.15-1.385-3.381-3.055C3.125 17.755 3 16.638 3 15.5s.124-2.255.275-3.345c.231-1.67 1.652-2.979 3.38-3.056C8.112 9.034 9.589 9 11.216 9c1.628 0 3.106.034 4.561.1A3.59 3.59 0 0 1 19 11.5M6.5 9V6.5a4.5 4.5 0 0 1 9 0V9M17 22v-8m-4 4h8" color="currentColor"></svg:path>`,
})
export class HugeiconsSquareLockAdd01Icon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
