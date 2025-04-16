import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[lucideInstagramIcon],svg[lucide-instagram-icon]',
  host: {
    'role': 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"><svg:rect width="20" height="20" x="2" y="2" rx="5" ry="5"></svg:rect><svg:path d="M16 11.37A4 4 0 1 1 12.63 8A4 4 0 0 1 16 11.37m1.5-4.87h.01"></svg:path></svg:g>`,
})
export class LucideInstagramIcon {
  readonly viewBox = input('0 0 24 24')
  readonly width = input('1em')
  readonly height = input('1em')
}
