import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[jamSwitchRightIcon],svg[jam-switch-right-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M7 2a5 5 0 1 0 0 10h6a5 5 0 0 0 0-10zm0-2h6a7 7 0 0 1 0 14H7A7 7 0 0 1 7 0m6 11a4 4 0 1 1 0-8a4 4 0 0 1 0 8m0-2a2 2 0 1 0 0-4a2 2 0 0 0 0 4"></svg:path>`,
})
export class JamSwitchRightIcon {
  readonly viewBox = input("-2 -5 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
