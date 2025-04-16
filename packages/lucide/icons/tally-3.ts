import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[lucideTally3Icon],svg[lucide-tally-3-icon]',
  host: {
    'role': 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 4v16M9 4v16m5-16v16"></svg:path>`,
})
export class LucideTally3Icon {
  readonly viewBox = input('0 0 24 24')
  readonly width = input('1em')
  readonly height = input('1em')
}
