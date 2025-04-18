import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[icBaselineFastRewindIcon],svg[ic-baseline-fast-rewind-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M11 18V6l-8.5 6zm.5-6l8.5 6V6z"></svg:path>`,
})
export class IcBaselineFastRewindIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
