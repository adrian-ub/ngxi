import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[hugeiconsInternetAntenna01Icon],svg[hugeicons-internet-antenna-01-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" color="currentColor"><svg:path d="M9.767 18.849L12 14l2.233 4.849c.647 1.406.971 2.109.628 2.617l-.029.04C14.466 22 13.644 22 12 22s-2.466 0-2.832-.493l-.03-.041c-.342-.508-.018-1.211.63-2.617"></svg:path><svg:circle cx="12" cy="12" r="2"></svg:circle><svg:path d="M4 18.001A9.96 9.96 0 0 1 2 12C2 6.477 6.477 2 12 2s10 4.477 10 10c0 2.252-.744 4.33-2 6.001"></svg:path><svg:path d="M7.528 16a6 6 0 1 1 8.944 0"></svg:path></svg:g>`,
})
export class HugeiconsInternetAntenna01Icon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
