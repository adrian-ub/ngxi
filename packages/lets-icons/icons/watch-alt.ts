import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[letsIconsWatchAltIcon],svg[lets-icons-watch-alt-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none"><svg:rect width="10" height="10" x="7" y="7" stroke="currentColor" stroke-width="2" rx="3"></svg:rect><svg:path fill="currentColor" d="M9 4c0-.943 0-1.414.293-1.707S10.057 2 11 2h2c.943 0 1.414 0 1.707.293S15 3.057 15 4v3H9zm0 16c0 .943 0 1.414.293 1.707S10.057 22 11 22h2c.943 0 1.414 0 1.707-.293S15 20.943 15 20v-3H9z"></svg:path></svg:g>`,
})
export class LetsIconsWatchAltIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
