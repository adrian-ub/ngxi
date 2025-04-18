import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[jamSwitchLeftFIcon],svg[jam-switch-left-f-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M6 0h8a6 6 0 1 1 0 12H6A6 6 0 1 1 6 0m1 10a4 4 0 1 0 0-8a4 4 0 0 0 0 8m0-2a2 2 0 1 1 0-4a2 2 0 0 1 0 4"></svg:path>`,
})
export class JamSwitchLeftFIcon {
  readonly viewBox = input("-2 -6 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
