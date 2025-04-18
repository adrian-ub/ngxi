import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[hugeiconsFilterMailSquareIcon],svg[hugeicons-filter-mail-square-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M2 11.5c0-4.478 0-6.718 1.391-8.109S7.021 2 11.5 2c4.478 0 6.718 0 8.109 1.391S21 7.021 21 11.5c0 4.478 0 6.718-1.391 8.109S15.979 21 11.5 21c-4.478 0-6.718 0-8.109-1.391S2 15.979 2 11.5m6.5 0h6m-5 3.5h4m-6-7h8" color="currentColor"></svg:path>`,
})
export class HugeiconsFilterMailSquareIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
