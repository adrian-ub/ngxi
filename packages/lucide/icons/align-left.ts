import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[lucideAlignLeftIcon],svg[lucide-align-left-icon]',
  host: {
    'role': 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 12H3m14 6H3M21 6H3"></svg:path>`,
})
export class LucideAlignLeftIcon {
  readonly viewBox = input('0 0 24 24')
  readonly width = input('1em')
  readonly height = input('1em')
}
