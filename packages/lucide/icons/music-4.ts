import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[lucideMusic4Icon],svg[lucide-music-4-icon]',
  host: {
    'role': 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"><svg:path d="M9 18V5l12-2v13M9 9l12-2"></svg:path><svg:circle cx="6" cy="18" r="3"></svg:circle><svg:circle cx="18" cy="16" r="3"></svg:circle></svg:g>`,
})
export class LucideMusic4Icon {
  readonly viewBox = input('0 0 24 24')
  readonly width = input('1em')
  readonly height = input('1em')
}
