import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[openmojiRegionalIndicatorYIcon],svg[openmoji-regional-indicator-y-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:circle cx="36" cy="36" r="27.5" fill="#fff"></svg:circle><svg:g stroke="#000" stroke-linejoin="round" stroke-width="2"><svg:circle cx="36" cy="36" r="28" fill="none"></svg:circle><svg:path d="M44.448 21.105a1 1 0 0 0-1.342.448L36 35.764l-7.105-14.211a1 1 0 1 0-1.79.894L35 38.236V50a1 1 0 1 0 2 0V38.236l7.895-15.789a1 1 0 0 0-.447-1.342Z"></svg:path></svg:g>`,
})
export class OpenmojiRegionalIndicatorYIcon {
  readonly viewBox = input("0 0 72 72")
  readonly width = input("1em")
  readonly height = input("1em")
}
