import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[lucideImageIcon],svg[lucide-image-icon]',
  host: {
    'role': 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"><svg:rect width="18" height="18" x="3" y="3" rx="2" ry="2"></svg:rect><svg:circle cx="9" cy="9" r="2"></svg:circle><svg:path d="m21 15l-3.086-3.086a2 2 0 0 0-2.828 0L6 21"></svg:path></svg:g>`,
})
export class LucideImageIcon {
  readonly viewBox = input('0 0 24 24')
  readonly width = input('1em')
  readonly height = input('1em')
}
