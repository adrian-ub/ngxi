import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[lucideAsteriskIcon],svg[lucide-asterisk-icon]',
  host: {
    'role': 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 6v12m5.196-9L6.804 15m0-6l10.392 6"></svg:path>`,
})
export class LucideAsteriskIcon {
  readonly viewBox = input('0 0 24 24')
  readonly width = input('1em')
  readonly height = input('1em')
}
