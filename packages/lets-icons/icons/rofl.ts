import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[letsIconsRoflIcon],svg[lets-icons-rofl-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none"><svg:circle cx="12" cy="12" r="10" stroke="currentColor" stroke-linecap="round" stroke-width="2"></svg:circle><svg:path stroke="currentColor" stroke-linecap="round" stroke-width="2" d="m16 8l-8 3m0-3l8 3"></svg:path><svg:path fill="currentColor" d="M8 14.556c0-.052 0-.078.002-.1a.5.5 0 0 1 .454-.454c.022-.002.048-.002.1-.002h6.888c.052 0 .078 0 .1.002a.5.5 0 0 1 .454.454c.002.022.002.048.002.1V15a4 4 0 0 1-8 0z"></svg:path></svg:g>`,
})
export class LetsIconsRoflIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
