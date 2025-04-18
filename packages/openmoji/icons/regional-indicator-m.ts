import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[openmojiRegionalIndicatorMIcon],svg[openmoji-regional-indicator-m-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:circle cx="36" cy="36" r="27.5" fill="#fff"></svg:circle><svg:g stroke="#000" stroke-linejoin="round" stroke-width="2"><svg:circle cx="36" cy="36" r="28" fill="none"></svg:circle><svg:path d="M48.23 21.04a1 1 0 0 0-1.124.525L36 43.776L24.895 21.565a1 1 0 0 0-1.894.447v28a1 1 0 1 0 1.999 0V26.248l10.106 20.211c.34.678 1.449.678 1.789 0L47 26.248v23.764a1 1 0 1 0 2 0v-28a1 1 0 0 0-.77-.973Z"></svg:path></svg:g>`,
})
export class OpenmojiRegionalIndicatorMIcon {
  readonly viewBox = input("0 0 72 72")
  readonly width = input("1em")
  readonly height = input("1em")
}
