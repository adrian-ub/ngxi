import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[lucideGalleryThumbnailsIcon],svg[lucide-gallery-thumbnails-icon]',
  host: {
    'role': 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"><svg:rect width="18" height="14" x="3" y="3" rx="2"></svg:rect><svg:path d="M4 21h1m4 0h1m4 0h1m4 0h1"></svg:path></svg:g>`,
})
export class LucideGalleryThumbnailsIcon {
  readonly viewBox = input('0 0 24 24')
  readonly width = input('1em')
  readonly height = input('1em')
}
