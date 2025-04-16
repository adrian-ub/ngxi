import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[lucideMessageSquareDotIcon],svg[lucide-message-square-dot-icon]',
  host: {
    'role': 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"><svg:path d="M11.7 3H5a2 2 0 0 0-2 2v16l4-4h12a2 2 0 0 0 2-2v-2.7"></svg:path><svg:circle cx="18" cy="6" r="3"></svg:circle></svg:g>`,
})
export class LucideMessageSquareDotIcon {
  readonly viewBox = input('0 0 24 24')
  readonly width = input('1em')
  readonly height = input('1em')
}
