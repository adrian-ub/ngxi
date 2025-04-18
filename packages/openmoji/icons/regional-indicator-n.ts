import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[openmojiRegionalIndicatorNIcon],svg[openmoji-regional-indicator-n-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:circle cx="36" cy="36" r="27.5" fill="#fff"></svg:circle><svg:g stroke="#000" stroke-linejoin="round" stroke-width="2"><svg:circle cx="36" cy="36" r="28" fill="none"></svg:circle><svg:path d="M46 21.012a1 1 0 0 0-1 1v24.88l-18.186-25.46a1 1 0 0 0-1.814.58v28a1 1 0 1 0 2 0v-24.88l18.187 25.461a1 1 0 0 0 1.813-.58v-28a1 1 0 0 0-1-1Z"></svg:path></svg:g>`,
})
export class OpenmojiRegionalIndicatorNIcon {
  readonly viewBox = input("0 0 72 72")
  readonly width = input("1em")
  readonly height = input("1em")
}
