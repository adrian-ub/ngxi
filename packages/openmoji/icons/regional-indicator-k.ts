import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[openmojiRegionalIndicatorKIcon],svg[openmoji-regional-indicator-k-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:circle cx="36" cy="36" r="27.5" fill="#fff"></svg:circle><svg:g stroke="#000" stroke-linejoin="round" stroke-width="2"><svg:circle cx="36" cy="36" r="28" fill="none"></svg:circle><svg:path d="m37.316 31.46l7.746-8.79a1 1 0 0 0-1.5-1.321L29.235 37.605V22.013a1 1 0 1 0-2 0v28a1 1 0 1 0 2 0V40.63l6.663-7.56l8.98 17.413a1 1 0 1 0 1.777-.917z"></svg:path></svg:g>`,
})
export class OpenmojiRegionalIndicatorKIcon {
  readonly viewBox = input("0 0 72 72")
  readonly width = input("1em")
  readonly height = input("1em")
}
