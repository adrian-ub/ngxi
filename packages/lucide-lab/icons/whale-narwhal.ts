import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[lucideLabWhaleNarwhalIcon],svg[lucide-lab-whale-narwhal-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"><svg:path d="M20 9.98s1-3 1-7c-3 2-5 6-5 6.08"></svg:path><svg:path d="M6 9.7L3.9 8.4C2.7 7.7 2 6.4 2 5V3c2 0 4 2 4 2s2-2 4-2v2c0 1.4-.7 2.7-1.9 3.4l-3.8 2.4A5 5 0 0 0 7 20h12c1.7 0 3-1.3 3-3v-3c0-2.8-2.2-5-5-5c-2.7 0-5.1 1.4-6.4 3.6L9.7 14A2 2 0 0 1 6 13Zm9 5.3h.01"></svg:path></svg:g>`,
})
export class LucideLabWhaleNarwhalIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
