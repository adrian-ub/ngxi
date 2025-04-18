import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[guidanceProstheticArmIcon],svg[guidance-prosthetic-arm-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" d="M10 18v6m4 0v-6.5a2 2 0 0 1 2-2v-8s-1.5-1-4-1s-4 1-4 1V11m1.5 4.5H8m0 0H6.5m1.5 0V12m3.85-7.5s-1.6-1-1.6-2.25a1.747 1.747 0 1 1 3.496 0c0 1.25-1.596 2.25-1.596 2.25z"></svg:path>`,
})
export class GuidanceProstheticArmIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
