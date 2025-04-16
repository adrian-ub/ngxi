import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[lucideFlagTriangleLeftIcon],svg[lucide-flag-triangle-left-icon]',
  host: {
    'role': 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17 22V2L7 7l10 5"></svg:path>`,
})
export class LucideFlagTriangleLeftIcon {
  readonly viewBox = input('0 0 24 24')
  readonly width = input('1em')
  readonly height = input('1em')
}
