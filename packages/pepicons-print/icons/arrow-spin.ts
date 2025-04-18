import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[pepiconsPrintArrowSpinIcon],svg[pepicons-print-arrow-spin-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="currentColor"><svg:circle cx="12" cy="11.5" r="6.5" opacity=".2"></svg:circle><svg:path d="M13.375 5.038a.5.5 0 0 1-.564.827A5 5 0 1 0 15 10a.5.5 0 0 1 1 0a6 6 0 1 1-2.626-4.962"></svg:path><svg:path d="M12.769 11.585a.5.5 0 1 1-.539-.842l3.482-2.227a.5.5 0 1 1 .539.842z"></svg:path><svg:path d="M17.947 12.114a.5.5 0 0 1-.913.407l-1.509-3.38a.5.5 0 1 1 .914-.408z"></svg:path></svg:g>`,
})
export class PepiconsPrintArrowSpinIcon {
  readonly viewBox = input("0 0 20 20")
  readonly width = input("1em")
  readonly height = input("1em")
}
