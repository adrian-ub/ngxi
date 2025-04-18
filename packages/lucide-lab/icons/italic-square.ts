import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[lucideLabItalicSquareIcon],svg[lucide-lab-italic-square-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"><svg:rect width="18" height="18" x="3" y="3" rx="2"></svg:rect><svg:path d="M16 7h-6m3.5 0l-4 10m3.5 0H7"></svg:path></svg:g>`,
})
export class LucideLabItalicSquareIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
