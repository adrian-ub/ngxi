import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[lucideTwitchIcon],svg[lucide-twitch-icon]',
  host: {
    'role': 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M21 2H3v16h5v4l4-4h5l4-4zm-10 9V7m5 4V7"></svg:path>`,
})
export class LucideTwitchIcon {
  readonly viewBox = input('0 0 24 24')
  readonly width = input('1em')
  readonly height = input('1em')
}
