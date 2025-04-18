import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[icBaselineOpenInFullIcon],svg[ic-baseline-open-in-full-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M21 11V3h-8l3.29 3.29l-10 10L3 13v8h8l-3.29-3.29l10-10z"></svg:path>`,
})
export class IcBaselineOpenInFullIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
