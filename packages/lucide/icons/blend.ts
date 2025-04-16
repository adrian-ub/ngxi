import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[lucideBlendIcon],svg[lucide-blend-icon]',
  host: {
    'role': 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"><svg:circle cx="9" cy="9" r="7"></svg:circle><svg:circle cx="15" cy="15" r="7"></svg:circle></svg:g>`,
})
export class LucideBlendIcon {
  readonly viewBox = input('0 0 24 24')
  readonly width = input('1em')
  readonly height = input('1em')
}
