import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[openmojiRegionalIndicatorZIcon],svg[openmoji-regional-indicator-z-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:circle cx="36" cy="36" r="27.5" fill="#fff"></svg:circle><svg:g stroke="#000" stroke-linejoin="round" stroke-width="2"><svg:circle cx="36" cy="36" r="28" fill="none"></svg:circle><svg:path d="M44 49H29.724l15.144-26.504A1 1 0 0 0 44 21H28a1 1 0 1 0 0 2h14.276L27.132 49.504A1 1 0 0 0 28 51h16a1 1 0 1 0 0-2Z"></svg:path></svg:g>`,
})
export class OpenmojiRegionalIndicatorZIcon {
  readonly viewBox = input("0 0 72 72")
  readonly width = input("1em")
  readonly height = input("1em")
}
