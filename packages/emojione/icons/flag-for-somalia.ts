import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[emojioneFlagForSomaliaIcon],svg[emojione-flag-for-somalia-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:circle cx="32" cy="32" r="30" fill="#42ade2"></svg:circle><svg:path fill="#fff" d="m32 39.2l9.9 7.1l-3.8-11.5l9.9-7.1H35.8L32 16.3l-3.8 11.4H16l9.8 7.1l-3.7 11.5z"></svg:path>`,
})
export class EmojioneFlagForSomaliaIcon {
  readonly viewBox = input("0 0 64 64")
  readonly width = input("1em")
  readonly height = input("1em")
}
