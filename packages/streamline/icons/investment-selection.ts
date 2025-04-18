import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[streamlineInvestmentSelectionIcon],svg[streamline-investment-selection-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round"><svg:path stroke-linejoin="round" d="M6.338 3.7a1 1 0 0 0-.943-.668H4.62a.893.893 0 0 0-.19 1.765l1.178.258a1 1 0 0 1-.214 1.977h-.667a1 1 0 0 1-.943-.666m1.278-3.334v-1m0 6v-1m1.907 6.467v-5.25a1.25 1.25 0 0 1 1.25-1.25v0a1.25 1.25 0 0 1 1.25 1.25v2.75h2a2 2 0 0 1 2 2v.5"></svg:path><svg:path d="M5.063 9.564a4.531 4.531 0 1 1 4.489-3.911"></svg:path></svg:g>`,
})
export class StreamlineInvestmentSelectionIcon {
  readonly viewBox = input("0 0 14 14")
  readonly width = input("1em")
  readonly height = input("1em")
}
