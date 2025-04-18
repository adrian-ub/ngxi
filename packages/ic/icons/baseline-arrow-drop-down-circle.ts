import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[icBaselineArrowDropDownCircleIcon],svg[ic-baseline-arrow-drop-down-circle-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10s10-4.48 10-10S17.52 2 12 2m0 12l-4-4h8z"></svg:path>`,
})
export class IcBaselineArrowDropDownCircleIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
