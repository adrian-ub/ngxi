import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[lucideAppleIcon],svg[lucide-apple-icon]',
  host: {
    'role': 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"><svg:path d="M12 20.94c1.5 0 2.75 1.06 4 1.06c3 0 6-8 6-12.22A4.91 4.91 0 0 0 17 5c-2.22 0-4 1.44-5 2c-1-.56-2.78-2-5-2a4.9 4.9 0 0 0-5 4.78C2 14 5 22 8 22c1.25 0 2.5-1.06 4-1.06"></svg:path><svg:path d="M10 2c1 .5 2 2 2 5"></svg:path></svg:g>`,
})
export class LucideAppleIcon {
  readonly viewBox = input('0 0 24 24')
  readonly width = input('1em')
  readonly height = input('1em')
}
