import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[lucideExpandIcon],svg[lucide-expand-icon]',
  host: {
    'role': 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m15 15l6 6M15 9l6-6m0 13.2V21h-4.8M21 7.8V3h-4.8M3 16.2V21h4.8M3 21l6-6M3 7.8V3h4.8M9 9L3 3"></svg:path>`,
})
export class LucideExpandIcon {
  readonly viewBox = input('0 0 24 24')
  readonly width = input('1em')
  readonly height = input('1em')
}
