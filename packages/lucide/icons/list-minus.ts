import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[lucideListMinusIcon],svg[lucide-list-minus-icon]',
  host: {
    'role': 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M11 12H3m13-6H3m13 12H3m18-6h-6"></svg:path>`,
})
export class LucideListMinusIcon {
  readonly viewBox = input('0 0 24 24')
  readonly width = input('1em')
  readonly height = input('1em')
}
