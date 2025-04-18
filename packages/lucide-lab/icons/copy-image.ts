import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[lucideLabCopyImageIcon],svg[lucide-lab-copy-image-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"><svg:path d="M4 16a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h10a2 2 0 0 1 2 2"></svg:path><svg:rect width="14" height="14" x="8" y="8" rx="2"></svg:rect><svg:circle cx="14" cy="14" r="2"></svg:circle><svg:path d="m13.4 22l4.7-3.9c.8-.8 2-.8 2.8 0l1.1 1.1"></svg:path></svg:g>`,
})
export class LucideLabCopyImageIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
