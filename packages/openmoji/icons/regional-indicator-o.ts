import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[openmojiRegionalIndicatorOIcon],svg[openmoji-regional-indicator-o-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:circle cx="36" cy="36" r="27.5" fill="#fff"></svg:circle><svg:path d="M36 21.012c-6.065 0-11 4.935-11 11v8c0 6.066 4.935 11 11 11s11-4.934 11-11v-8c0-6.065-4.935-11-11-11m9 19c0 4.963-4.037 9-9 9s-9-4.037-9-9v-8c0-4.962 4.037-9 9-9s9 4.038 9 9z"></svg:path><svg:g fill="none" stroke="#000" stroke-linejoin="round" stroke-width="2"><svg:circle cx="36" cy="36" r="28"></svg:circle><svg:path d="M36 21.012c-6.065 0-11 4.935-11 11v8c0 6.066 4.935 11 11 11s11-4.934 11-11v-8c0-6.065-4.935-11-11-11Zm9 19c0 4.963-4.037 9-9 9s-9-4.037-9-9v-8c0-4.962 4.037-9 9-9s9 4.038 9 9z"></svg:path></svg:g>`,
})
export class OpenmojiRegionalIndicatorOIcon {
  readonly viewBox = input("0 0 72 72")
  readonly width = input("1em")
  readonly height = input("1em")
}
