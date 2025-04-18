import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[hugeiconsFerrisWheelIcon],svg[hugeicons-ferris-wheel-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" color="currentColor"><svg:circle cx="12" cy="12" r="6"></svg:circle><svg:path d="m8 22l2.684-7.648C11.234 12.784 11.51 12 12 12s.765.784 1.316 2.352L16 22M14 4a2 2 0 1 1-4 0a2 2 0 0 1 4 0m5 6a2 2 0 1 1 0-4a2 2 0 0 1 0 4M7 16a2 2 0 1 1-4 0a2 2 0 0 1 4 0m0-8.25a2 2 0 1 1-4 0a2 2 0 0 1 4 0M21 16a2 2 0 1 1-4 0a2 2 0 0 1 4 0"></svg:path></svg:g>`,
})
export class HugeiconsFerrisWheelIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
