import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[openmojiRegionalIndicatorWIcon],svg[openmoji-regional-indicator-w-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:circle cx="36" cy="36" r="27.5" fill="#fff"></svg:circle><svg:g stroke="#000" stroke-linejoin="round" stroke-width="2"><svg:circle cx="36" cy="36" r="28" fill="none"></svg:circle><svg:path d="M52.275 21.05a1 1 0 0 0-1.236.687l-7.037 24.635l-7.042-24.636a1 1 0 0 0-1.924 0L28 46.37l-7.038-24.633a1 1 0 0 0-1.924.55l8 27.998a1 1 0 0 0 1.924 0l7.037-24.635l7.042 24.636a1 1 0 0 0 1.924 0l7.999-28a1 1 0 0 0-.688-1.236Z"></svg:path></svg:g>`,
})
export class OpenmojiRegionalIndicatorWIcon {
  readonly viewBox = input("0 0 72 72")
  readonly width = input("1em")
  readonly height = input("1em")
}
