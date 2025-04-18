import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[entypoSwitchIcon],svg[entypo-switch-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M13 3H7a7 7 0 1 0 0 14h6a7 7 0 1 0 0-14m0 12a5 5 0 1 1 .001-10.001A5 5 0 0 1 13 15"></svg:path>`,
})
export class EntypoSwitchIcon {
  readonly viewBox = input("0 0 20 20")
  readonly width = input("1em")
  readonly height = input("1em")
}
