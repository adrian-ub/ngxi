import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[openmojiRegionalIndicatorPIcon],svg[openmoji-regional-indicator-p-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:circle cx="36" cy="36" r="27.5" fill="#fff"></svg:circle><svg:g stroke="#000" stroke-linejoin="round" stroke-width="2"><svg:circle cx="36" cy="36" r="28" fill="none"></svg:circle><svg:path d="M40.85 21.012H30.174a1 1 0 0 0-1 1v28a1 1 0 1 0 2 0V36.96h9.676c4.398 0 7.976-3.576 7.976-7.972s-3.578-7.976-7.976-7.976Zm0 13.948h-9.676V23.012h9.676a5.983 5.983 0 0 1 5.976 5.976a5.98 5.98 0 0 1-5.976 5.972Z"></svg:path></svg:g>`,
})
export class OpenmojiRegionalIndicatorPIcon {
  readonly viewBox = input("0 0 72 72")
  readonly width = input("1em")
  readonly height = input("1em")
}
