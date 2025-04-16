import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[lucideGlassesIcon],svg[lucide-glasses-icon]',
  host: {
    'role': 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"><svg:circle cx="6" cy="15" r="4"></svg:circle><svg:circle cx="18" cy="15" r="4"></svg:circle><svg:path d="M14 15a2 2 0 0 0-2-2a2 2 0 0 0-2 2m-7.5-2L5 7c.7-1.3 1.4-2 3-2m13.5 8L19 7c-.7-1.3-1.5-2-3-2"></svg:path></svg:g>`,
})
export class LucideGlassesIcon {
  readonly viewBox = input('0 0 24 24')
  readonly width = input('1em')
  readonly height = input('1em')
}
