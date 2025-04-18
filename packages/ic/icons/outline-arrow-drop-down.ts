import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[icOutlineArrowDropDownIcon],svg[ic-outline-arrow-drop-down-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="m7 10l5 5l5-5z"></svg:path>`,
})
export class IcOutlineArrowDropDownIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
