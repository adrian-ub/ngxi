import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[lucideArrowUp10Icon],svg[lucide-arrow-up-1-0-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"><svg:path d="m3 8l4-4l4 4M7 4v16m10-10V4h-2m0 6h4"></svg:path><svg:rect width="4" height="6" x="15" y="14" ry="2"></svg:rect></svg:g>`,
})
export class LucideArrowUp10Icon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
