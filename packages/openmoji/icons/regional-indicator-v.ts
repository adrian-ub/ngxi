import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[openmojiRegionalIndicatorVIcon],svg[openmoji-regional-indicator-v-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:circle cx="36" cy="36" r="27.5" fill="#fff"></svg:circle><svg:g stroke="#000" stroke-linejoin="round" stroke-width="2"><svg:circle cx="36" cy="36" r="28" fill="none"></svg:circle><svg:path d="M43.274 21.039a1.003 1.003 0 0 0-1.236.686L35 46.36l-7.038-24.635a1 1 0 0 0-1.924.55l8 28a1 1 0 0 0 1.924 0l8-28a1 1 0 0 0-.688-1.236Z"></svg:path></svg:g>`,
})
export class OpenmojiRegionalIndicatorVIcon {
  readonly viewBox = input("0 0 72 72")
  readonly width = input("1em")
  readonly height = input("1em")
}
