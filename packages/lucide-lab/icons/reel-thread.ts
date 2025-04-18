import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[lucideLabReelThreadIcon],svg[lucide-lab-reel-thread-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"><svg:path d="M6 6L4.4 4.6A1.5 1.5 0 0 1 5.5 2h13a1.5 1.5 0 0 1 1.1 2.5L18 6M6 6h12v12H6zm0 5l10-5"></svg:path><svg:path d="M22 16v-3a4 4 0 0 0-4-4L6 15m2 3l10-5m0 5l1.6 1.4a1.45 1.45 0 0 1-1.1 2.5h-13a1.5 1.5 0 0 1-1.1-2.5L6 18"></svg:path></svg:g>`,
})
export class LucideLabReelThreadIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
