import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[emojioneFlagForStLuciaIcon],svg[emojione-flag-for-st-lucia-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:circle cx="32" cy="32" r="30" fill="#49c3f2"></svg:circle><svg:path fill="#fff" d="M32 15L17 45h30z"></svg:path><svg:path fill="#3e4347" d="M32 21L20 45h24z"></svg:path><svg:path fill="#ffce31" d="M32 33L20 45h24z"></svg:path>`,
})
export class EmojioneFlagForStLuciaIcon {
  readonly viewBox = input("0 0 64 64")
  readonly width = input("1em")
  readonly height = input("1em")
}
