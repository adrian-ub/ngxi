import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[lucideGroupIcon],svg[lucide-group-icon]',
  host: {
    'role': 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"><svg:path d="M3 7V5c0-1.1.9-2 2-2h2m10 0h2c1.1 0 2 .9 2 2v2m0 10v2c0 1.1-.9 2-2 2h-2M7 21H5c-1.1 0-2-.9-2-2v-2"></svg:path><svg:rect width="7" height="5" x="7" y="7" rx="1"></svg:rect><svg:rect width="7" height="5" x="10" y="12" rx="1"></svg:rect></svg:g>`,
})
export class LucideGroupIcon {
  readonly viewBox = input('0 0 24 24')
  readonly width = input('1em')
  readonly height = input('1em')
}
