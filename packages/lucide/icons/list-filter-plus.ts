import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[lucideListFilterPlusIcon],svg[lucide-list-filter-plus-icon]',
  host: {
    'role': 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M10 18h4M11 6H3m12 0h6m-3 3V3M7 12h8"></svg:path>`,
})
export class LucideListFilterPlusIcon {
  readonly viewBox = input('0 0 24 24')
  readonly width = input('1em')
  readonly height = input('1em')
}
