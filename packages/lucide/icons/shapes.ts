import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[lucideShapesIcon],svg[lucide-shapes-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"><svg:path d="M8.3 10a.7.7 0 0 1-.626-1.079L11.4 3a.7.7 0 0 1 1.198-.043L16.3 8.9a.7.7 0 0 1-.572 1.1Z"></svg:path><svg:rect width="7" height="7" x="3" y="14" rx="1"></svg:rect><svg:circle cx="17.5" cy="17.5" r="3.5"></svg:circle></svg:g>`,
})
export class LucideShapesIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
