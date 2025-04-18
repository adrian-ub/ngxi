import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[lucideLabCandleHolderLitIcon],svg[lucide-lab-candle-holder-lit-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"><svg:path d="M10 2S8 3.9 8 5s.9 2 2 2s2-.9 2-2s-2-3-2-3m-2 9h4v7H8zm5 2l-1-2"></svg:path><svg:path d="M18 18a4 4 0 0 1-4 4H6a4 4 0 0 1-4-4h18a2 2 0 1 0-2-2Z"></svg:path></svg:g>`,
})
export class LucideLabCandleHolderLitIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
