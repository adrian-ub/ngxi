import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[openmojiRegionalIndicatorJIcon],svg[openmoji-regional-indicator-j-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:defs><svg:path id="openmojiRegionalIndicatorJ0" d="M44.346 21a1 1 0 0 0-1 1v18c0 4.962-4.037 9-9 9a9 9 0 0 1-6.024-2.312a1.001 1.001 0 0 0-1.336 1.488A11 11 0 0 0 34.346 51c6.066 0 11-4.935 11-11V22a1 1 0 0 0-1-1"></svg:path></svg:defs><svg:circle cx="36" cy="36" r="28" fill="#fff"></svg:circle><svg:use href="#openmojiRegionalIndicatorJ0"></svg:use><svg:g fill="none" stroke="#000" stroke-linejoin="round" stroke-width="2"><svg:circle cx="36" cy="36" r="28"></svg:circle><svg:use href="#openmojiRegionalIndicatorJ0"></svg:use></svg:g>`,
})
export class OpenmojiRegionalIndicatorJIcon {
  readonly viewBox = input("0 0 72 72")
  readonly width = input("1em")
  readonly height = input("1em")
}
