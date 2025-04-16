import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[lucideSpeakerIcon],svg[lucide-speaker-icon]',
  host: {
    'role': 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"><svg:rect width="16" height="20" x="4" y="2" rx="2"></svg:rect><svg:path d="M12 6h.01"></svg:path><svg:circle cx="12" cy="14" r="4"></svg:circle><svg:path d="M12 14h.01"></svg:path></svg:g>`,
})
export class LucideSpeakerIcon {
  readonly viewBox = input('0 0 24 24')
  readonly width = input('1em')
  readonly height = input('1em')
}
