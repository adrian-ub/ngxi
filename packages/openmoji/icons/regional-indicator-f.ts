import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[openmojiRegionalIndicatorFIcon],svg[openmoji-regional-indicator-f-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:circle cx="36" cy="36" r="28" fill="#fff"></svg:circle><svg:g stroke="#000" stroke-linejoin="round" stroke-width="2"><svg:circle cx="36" cy="36" r="28" fill="none"></svg:circle><svg:path d="M46 21H30a1 1 0 0 0-1 1v28a1 1 0 0 0 2 0V37h11a1 1 0 0 0 0-2H31V23h15a1 1 0 0 0 0-2Z"></svg:path></svg:g>`,
})
export class OpenmojiRegionalIndicatorFIcon {
  readonly viewBox = input("0 0 72 72")
  readonly width = input("1em")
  readonly height = input("1em")
}
