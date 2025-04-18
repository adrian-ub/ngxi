import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[openmojiRegionalIndicatorBIcon],svg[openmoji-regional-indicator-b-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:circle cx="36.5" cy="36.5" r="27.5" fill="#fff"></svg:circle><svg:g stroke="#000" stroke-linejoin="round" stroke-width="2"><svg:circle cx="36" cy="36" r="28" fill="none"></svg:circle><svg:path d="M46.826 29.022c0-4.398-3.578-7.976-7.976-7.976H28.174a1 1 0 0 0-1 1v27.908a1 1 0 0 0 1 1H38.85c4.398 0 7.976-3.578 7.976-7.976c0-3-1.666-5.618-4.122-6.978a7.98 7.98 0 0 0 4.122-6.978Zm-2 13.956a5.983 5.983 0 0 1-5.976 5.976h-9.676V37.006h9.676a5.98 5.98 0 0 1 5.976 5.972Zm-5.976-7.984c-.02 0-.038.01-.058.012h-9.618v-11.96h9.676a5.983 5.983 0 0 1 5.976 5.976a5.98 5.98 0 0 1-5.976 5.972Z"></svg:path></svg:g>`,
})
export class OpenmojiRegionalIndicatorBIcon {
  readonly viewBox = input("0 0 72 72")
  readonly width = input("1em")
  readonly height = input("1em")
}
