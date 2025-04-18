import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[lucideLabPondIcon],svg[lucide-lab-pond-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"><svg:path d="M4 3v2"></svg:path><svg:rect width="4" height="7" x="10" y="4" rx="2"></svg:rect><svg:path d="M4 12v10m8-20v2"></svg:path><svg:rect width="4" height="7" x="2" y="5" rx="2"></svg:rect><svg:path d="M12 11v4.35m3 3.15V22c-3.8 0-7-1.6-7-3.5s3.2-3.5 7-3.5s7 1.6 7 3.5c0 1.3-1.5 2.5-3.9 3.1Z"></svg:path></svg:g>`,
})
export class LucideLabPondIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
