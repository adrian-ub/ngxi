import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[lucideMessageCircleCodeIcon],svg[lucide-message-circle-code-icon]',
  host: {
    'role': 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"><svg:path d="M10 9.5L8 12l2 2.5m4-5l2 2.5l-2 2.5"></svg:path><svg:path d="M7.9 20A9 9 0 1 0 4 16.1L2 22z"></svg:path></svg:g>`,
})
export class LucideMessageCircleCodeIcon {
  readonly viewBox = input('0 0 24 24')
  readonly width = input('1em')
  readonly height = input('1em')
}
