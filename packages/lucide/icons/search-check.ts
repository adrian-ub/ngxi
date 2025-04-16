import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[lucideSearchCheckIcon],svg[lucide-search-check-icon]',
  host: {
    'role': 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"><svg:path d="m8 11l2 2l4-4"></svg:path><svg:circle cx="11" cy="11" r="8"></svg:circle><svg:path d="m21 21l-4.3-4.3"></svg:path></svg:g>`,
})
export class LucideSearchCheckIcon {
  readonly viewBox = input('0 0 24 24')
  readonly width = input('1em')
  readonly height = input('1em')
}
