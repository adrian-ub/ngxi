import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[lucideLabCandlestickBigLitIcon],svg[lucide-lab-candlestick-big-lit-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"><svg:path d="M12 2S9 5.3 9 7s1.3 3 3 3s3-1.3 3-3s-3-5-3-5m4 20H8v-7c0-.6.4-1 1-1h6c.6 0 1 .4 1 1Zm-4-8v3"></svg:path><svg:path d="M17 17s-.7-1.4-1.1-2.4"></svg:path></svg:g>`,
})
export class LucideLabCandlestickBigLitIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
