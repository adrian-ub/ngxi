import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[openmojiRegionalIndicatorGIcon],svg[openmoji-regional-indicator-g-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:circle cx="36" cy="36" r="28" fill="#fff"></svg:circle><svg:g stroke="#000" stroke-linejoin="round" stroke-width="2"><svg:circle cx="35.889" cy="36" r="28" fill="none"></svg:circle><svg:path d="M45.889 34.448h-8a1 1 0 0 0 0 2h7v3.056c0 4.963-4.038 9-9 9s-9-4.037-9-9v-8c0-4.962 4.038-9 9-9c2.209 0 4.33.804 5.972 2.264a1 1 0 1 0 1.329-1.495a10.98 10.98 0 0 0-7.301-2.769c-6.066 0-11 4.935-11 11v8c0 6.066 4.935 11 11 11s11-4.934 11-11v-4.056a1 1 0 0 0-1-1Z"></svg:path></svg:g>`,
})
export class OpenmojiRegionalIndicatorGIcon {
  readonly viewBox = input("0 0 72 72")
  readonly width = input("1em")
  readonly height = input("1em")
}
