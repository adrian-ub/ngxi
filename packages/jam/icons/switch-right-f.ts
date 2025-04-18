import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[jamSwitchRightFIcon],svg[jam-switch-right-f-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M6 0h7a6 6 0 1 1 0 12H6A6 6 0 1 1 6 0m6 10a4 4 0 1 0 0-8a4 4 0 0 0 0 8m0-2a2 2 0 1 1 0-4a2 2 0 0 1 0 4"></svg:path>`,
})
export class JamSwitchRightFIcon {
  readonly viewBox = input("-2.5 -6 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
