import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[emojioneFlagForSwitzerlandIcon],svg[emojione-flag-for-switzerland-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:circle cx="32" cy="32" r="30" fill="#ed4c5c"></svg:circle><svg:path fill="#fff" d="M47 27H37V17H27v10H17v10h10v10h10V37h10z"></svg:path>`,
})
export class EmojioneFlagForSwitzerlandIcon {
  readonly viewBox = input("0 0 64 64")
  readonly width = input("1em")
  readonly height = input("1em")
}
