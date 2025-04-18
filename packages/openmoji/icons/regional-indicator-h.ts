import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[openmojiRegionalIndicatorHIcon],svg[openmoji-regional-indicator-h-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:circle cx="36" cy="36" r="28" fill="#fff"></svg:circle><svg:g stroke="#000" stroke-linejoin="round" stroke-width="2"><svg:circle cx="36" cy="36" r="28" fill="none"></svg:circle><svg:path d="M44 20.508a1 1 0 0 0-1 1v12.96H29v-12.96a1 1 0 1 0-2 0v28a1 1 0 1 0 2 0v-13.04h14v13.04a1 1 0 1 0 2 0v-28a1 1 0 0 0-1-1Z"></svg:path></svg:g>`,
})
export class OpenmojiRegionalIndicatorHIcon {
  readonly viewBox = input("0 0 72 72")
  readonly width = input("1em")
  readonly height = input("1em")
}
