import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[lucideLabShirtTRulerIcon],svg[lucide-lab-shirt-t-ruler-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"><svg:path d="M6 11H3c-.6 0-1-.4-1-1V6c0-1.1.8-2.3 1.9-2.6L8 2a4 4 0 0 0 8 0l4.1 1.4C21.2 3.7 22 4.9 22 6v4c0 .6-.4 1-1 1h-3M6 18V8m12 0v10"></svg:path><svg:rect width="20" height="6" x="2" y="16" rx="2"></svg:rect><svg:path d="M10 16v2m4-2v2"></svg:path></svg:g>`,
})
export class LucideLabShirtTRulerIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
