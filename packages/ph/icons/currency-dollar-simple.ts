import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[phCurrencyDollarSimpleIcon],svg[ph-currency-dollar-simple-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M200 168a48.05 48.05 0 0 1-48 48h-16v16a8 8 0 0 1-16 0v-16h-16a48.05 48.05 0 0 1-48-48a8 8 0 0 1 16 0a32 32 0 0 0 32 32h48a32 32 0 0 0 0-64h-40a48 48 0 0 1 0-96h8V24a8 8 0 0 1 16 0v16h8a48.05 48.05 0 0 1 48 48a8 8 0 0 1-16 0a32 32 0 0 0-32-32h-32a32 32 0 0 0 0 64h40a48.05 48.05 0 0 1 48 48"></svg:path>`,
})
export class PhCurrencyDollarSimpleIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}
