import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[openmojiRegionalIndicatorAIcon],svg[openmoji-regional-indicator-a-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:circle cx="36.5" cy="36.5" r="27.5" fill="#fff"></svg:circle><svg:g stroke="#000" stroke-linejoin="round" stroke-width="2"><svg:circle cx="36" cy="36" r="28" fill="none"></svg:circle><svg:path d="M36.919 21.606a1 1 0 0 0-1.838 0l-12 28a1 1 0 1 0 1.838.788l2.62-6.114h16.922l2.62 6.114a1 1 0 1 0 1.838-.788zM28.396 42.28L36 24.538l7.604 17.742z"></svg:path></svg:g>`,
})
export class OpenmojiRegionalIndicatorAIcon {
  readonly viewBox = input("0 0 72 72")
  readonly width = input("1em")
  readonly height = input("1em")
}
