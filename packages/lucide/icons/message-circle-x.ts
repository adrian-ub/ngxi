import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[lucideMessageCircleXIcon],svg[lucide-message-circle-x-icon]',
  host: {
    'role': 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M7.9 20A9 9 0 1 0 4 16.1L2 22ZM15 9l-6 6m0-6l6 6"></svg:path>`,
})
export class LucideMessageCircleXIcon {
  readonly viewBox = input('0 0 24 24')
  readonly width = input('1em')
  readonly height = input('1em')
}
