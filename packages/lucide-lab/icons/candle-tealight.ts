import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[lucideLabCandleTealightIcon],svg[lucide-lab-candle-tealight-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"><svg:path d="M12 12V7"></svg:path><svg:ellipse cx="12" cy="13" rx="10" ry="3"></svg:ellipse><svg:path d="M2 13v6c0 1.7 4.5 3 10 3s10-1.3 10-3v-6"></svg:path></svg:g>`,
})
export class LucideLabCandleTealightIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
