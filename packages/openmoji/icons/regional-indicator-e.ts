import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[openmojiRegionalIndicatorEIcon],svg[openmoji-regional-indicator-e-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:circle cx="36" cy="36" r="28" fill="#fff"></svg:circle><svg:g stroke="#000" stroke-linejoin="round" stroke-width="2"><svg:circle cx="36" cy="36" r="28" fill="none"></svg:circle><svg:path d="M45 23a1 1 0 0 0 0-2H29a1 1 0 0 0-1 1v28a1 1 0 0 0 1 1h16a1 1 0 0 0 0-2H30V37h11a1 1 0 0 0 0-2H30V23z"></svg:path></svg:g>`,
})
export class OpenmojiRegionalIndicatorEIcon {
  readonly viewBox = input("0 0 72 72")
  readonly width = input("1em")
  readonly height = input("1em")
}
