import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[lucideCheckCheckIcon],svg[lucide-check-check-icon]',
  host: {
    'role': 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M18 6L7 17l-5-5m20-2l-7.5 7.5L13 16"></svg:path>`,
})
export class LucideCheckCheckIcon {
  readonly viewBox = input('0 0 24 24')
  readonly width = input('1em')
  readonly height = input('1em')
}
