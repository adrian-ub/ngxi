import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[openmojiRegionalIndicatorUIcon],svg[openmoji-regional-indicator-u-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:circle cx="36" cy="36" r="27.5" fill="#fff"></svg:circle><svg:path d="M46 21a1 1 0 0 0-1 1v18c0 4.962-4.037 9-9 9s-9-4.038-9-9V22a1 1 0 1 0-2 0v18c0 6.065 4.935 11 11 11s11-4.935 11-11V22a1 1 0 0 0-1-1"></svg:path><svg:g fill="none" stroke="#000" stroke-linejoin="round" stroke-width="2"><svg:circle cx="36" cy="36" r="28"></svg:circle><svg:path d="M46 21a1 1 0 0 0-1 1v18c0 4.962-4.037 9-9 9s-9-4.038-9-9V22a1 1 0 1 0-2 0v18c0 6.065 4.935 11 11 11s11-4.935 11-11V22a1 1 0 0 0-1-1Z"></svg:path></svg:g>`,
})
export class OpenmojiRegionalIndicatorUIcon {
  readonly viewBox = input("0 0 72 72")
  readonly width = input("1em")
  readonly height = input("1em")
}
