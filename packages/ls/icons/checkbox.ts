import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[lsCheckboxIcon],svg[ls-checkbox-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="m517 480l74-106v303H0V87h476l-51 74H74v442l443 1zm66-449L347 372L182 250L99 365l280 214l321-461z"></svg:path>`,
})
export class LsCheckboxIcon {
  readonly viewBox = input("0 0 700 677")
  readonly width = input("1.04em")
  readonly height = input("1em")
}
