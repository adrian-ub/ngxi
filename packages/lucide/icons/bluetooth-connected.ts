import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[lucideBluetoothConnectedIcon],svg[lucide-bluetooth-connected-icon]',
  host: {
    'role': 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m7 7l10 10l-5 5V2l5 5L7 17m11-5h3M3 12h3"></svg:path>`,
})
export class LucideBluetoothConnectedIcon {
  readonly viewBox = input('0 0 24 24')
  readonly width = input('1em')
  readonly height = input('1em')
}
