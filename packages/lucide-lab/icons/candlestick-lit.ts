import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[lucideLabCandlestickLitIcon],svg[lucide-lab-candlestick-lit-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 2s-2 1.9-2 3s.9 2 2 2s2-.9 2-2s-2-3-2-3m-2 9h4v11h-4zm5 2l-1-2"></svg:path>`,
})
export class LucideLabCandlestickLitIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
