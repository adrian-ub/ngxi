import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[nrkArrowDropdownIcon],svg[nrk-arrow-dropdown-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="m12 15l5-5H7z"></svg:path>`,
})
export class NrkArrowDropdownIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
