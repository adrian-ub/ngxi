import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[openmojiRegionalIndicatorIIcon],svg[openmoji-regional-indicator-i-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:circle cx="36" cy="36" r="28" fill="#fff"></svg:circle><svg:path d="M36 21a1 1 0 0 0-1 1v28a1 1 0 1 0 2 0V22a1 1 0 0 0-1-1"></svg:path><svg:g fill="none" stroke="#000" stroke-linejoin="round" stroke-width="2"><svg:circle cx="36" cy="36" r="28"></svg:circle><svg:path d="M36 21a1 1 0 0 0-1 1v28a1 1 0 1 0 2 0V22a1 1 0 0 0-1-1Z"></svg:path></svg:g>`,
})
export class OpenmojiRegionalIndicatorIIcon {
  readonly viewBox = input("0 0 72 72")
  readonly width = input("1em")
  readonly height = input("1em")
}
