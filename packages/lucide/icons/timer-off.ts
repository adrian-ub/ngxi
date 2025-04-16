import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[lucideTimerOffIcon],svg[lucide-timer-off-icon]',
  host: {
    'role': 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M10 2h4m-9.4 9a8 8 0 0 0 1.7 8.7a8 8 0 0 0 8.7 1.7m-7.6-14a8 8 0 0 1 10.3 1a8 8 0 0 1 .9 10.2M2 2l20 20M12 12v-2"></svg:path>`,
})
export class LucideTimerOffIcon {
  readonly viewBox = input('0 0 24 24')
  readonly width = input('1em')
  readonly height = input('1em')
}
