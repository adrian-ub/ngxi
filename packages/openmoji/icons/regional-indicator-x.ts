import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[openmojiRegionalIndicatorXIcon],svg[openmoji-regional-indicator-x-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:circle cx="36" cy="36" r="27.5" fill="#fff"></svg:circle><svg:g stroke="#000" stroke-linejoin="round" stroke-width="2"><svg:circle cx="36" cy="36" r="28" fill="none"></svg:circle><svg:path d="M44.495 21.122a1 1 0 0 0-1.364.372l-7.137 12.49l-7.125-12.468a1 1 0 1 0-1.736.992L34.842 36l-7.71 13.492a1 1 0 1 0 1.737.992l7.125-12.469l7.137 12.49a1 1 0 0 0 1.364.373a1 1 0 0 0 .372-1.364L37.145 36l7.722-13.514a1 1 0 0 0-.372-1.364Z"></svg:path></svg:g>`,
})
export class OpenmojiRegionalIndicatorXIcon {
  readonly viewBox = input("0 0 72 72")
  readonly width = input("1em")
  readonly height = input("1em")
}
