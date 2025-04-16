import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[lucideBoomBoxIcon],svg[lucide-boom-box-icon]',
  host: {
    'role': 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"><svg:path d="M4 9V5a2 2 0 0 1 2-2h12a2 2 0 0 1 2 2v4M8 8v1m4-1v1m4-1v1"></svg:path><svg:rect width="20" height="12" x="2" y="9" rx="2"></svg:rect><svg:circle cx="8" cy="15" r="2"></svg:circle><svg:circle cx="16" cy="15" r="2"></svg:circle></svg:g>`,
})
export class LucideBoomBoxIcon {
  readonly viewBox = input('0 0 24 24')
  readonly width = input('1em')
  readonly height = input('1em')
}
