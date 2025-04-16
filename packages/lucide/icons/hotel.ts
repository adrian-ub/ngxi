import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[lucideHotelIcon],svg[lucide-hotel-icon]',
  host: {
    'role': 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"><svg:path d="M10 22v-6.57M12 11h.01M12 7h.01M14 15.43V22m1-6a5 5 0 0 0-6 0m7-5h.01M16 7h.01M8 11h.01M8 7h.01"></svg:path><svg:rect width="16" height="20" x="4" y="2" rx="2"></svg:rect></svg:g>`,
})
export class LucideHotelIcon {
  readonly viewBox = input('0 0 24 24')
  readonly width = input('1em')
  readonly height = input('1em')
}
