import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[lucideGalleryHorizontalIcon],svg[lucide-gallery-horizontal-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"><svg:path d="M2 3v18"></svg:path><svg:rect width="12" height="18" x="6" y="3" rx="2"></svg:rect><svg:path d="M22 3v18"></svg:path></svg:g>`,
})
export class LucideGalleryHorizontalIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
