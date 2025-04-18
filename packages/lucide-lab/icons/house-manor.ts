import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[lucideLabHouseManorIcon],svg[lucide-lab-house-manor-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"><svg:path d="M9 6V2H5v4m14 0V2h-4v4"></svg:path><svg:rect width="20" height="16" x="2" y="6" rx="2"></svg:rect><svg:path d="M2 12h4m0 10V12l5.5-6m1 0l5.5 6v10m0-10h4m-10-1h.01M10 22v-5a2 2 0 1 1 4 0v5"></svg:path></svg:g>`,
})
export class LucideLabHouseManorIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
