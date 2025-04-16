import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[lucideImagesIcon],svg[lucide-images-icon]',
  host: {
    'role': 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"><svg:path d="M18 22H4a2 2 0 0 1-2-2V6"></svg:path><svg:path d="m22 13l-1.296-1.296a2.41 2.41 0 0 0-3.408 0L11 18"></svg:path><svg:circle cx="12" cy="8" r="2"></svg:circle><svg:rect width="16" height="16" x="6" y="2" rx="2"></svg:rect></svg:g>`,
})
export class LucideImagesIcon {
  readonly viewBox = input('0 0 24 24')
  readonly width = input('1em')
  readonly height = input('1em')
}
