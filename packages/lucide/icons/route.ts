import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[lucideRouteIcon],svg[lucide-route-icon]',
  host: {
    'role': 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"><svg:circle cx="6" cy="19" r="3"></svg:circle><svg:path d="M9 19h8.5a3.5 3.5 0 0 0 0-7h-11a3.5 3.5 0 0 1 0-7H15"></svg:path><svg:circle cx="18" cy="5" r="3"></svg:circle></svg:g>`,
})
export class LucideRouteIcon {
  readonly viewBox = input('0 0 24 24')
  readonly width = input('1em')
  readonly height = input('1em')
}
