import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[openmojiRegionalIndicatorDIcon],svg[openmoji-regional-indicator-d-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:circle cx="36" cy="36" r="27.5" fill="#fff"></svg:circle><svg:g stroke="#000" stroke-linejoin="round" stroke-width="2"><svg:circle cx="36" cy="36" r="28" fill="none"></svg:circle><svg:path d="M38.694 21.052h-9.708a1 1 0 0 0-1 1v27.896a1 1 0 0 0 1 1h9.708c5.139 0 9.32-4.18 9.32-9.32v-11.26c0-5.137-4.181-9.316-9.32-9.316Zm7.32 20.576c0 4.036-3.284 7.32-7.32 7.32h-8.708V23.052h8.708c4.036 0 7.32 3.282 7.32 7.316z"></svg:path></svg:g>`,
})
export class OpenmojiRegionalIndicatorDIcon {
  readonly viewBox = input("0 0 72 72")
  readonly width = input("1em")
  readonly height = input("1em")
}
