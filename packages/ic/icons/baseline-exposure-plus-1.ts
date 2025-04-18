import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[icBaselineExposurePlus1Icon],svg[ic-baseline-exposure-plus-1-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M10 7H8v4H4v2h4v4h2v-4h4v-2h-4zm10 11h-2V7.38L15 8.4V6.7L19.7 5h.3z"></svg:path>`,
})
export class IcBaselineExposurePlus1Icon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
