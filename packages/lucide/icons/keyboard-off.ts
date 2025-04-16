import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[lucideKeyboardOffIcon],svg[lucide-keyboard-off-icon]',
  host: {
    'role': 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M20 4a2 2 0 0 1 2 2m0 0v10.41M7 16h9M9.69 4H20m-6 4h.01M18 8h.01M2 2l20 20m-2-2H4a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2m2 4h.01M8 12h.01"></svg:path>`,
})
export class LucideKeyboardOffIcon {
  readonly viewBox = input('0 0 24 24')
  readonly width = input('1em')
  readonly height = input('1em')
}
