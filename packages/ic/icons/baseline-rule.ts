import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[icBaselineRuleIcon],svg[ic-baseline-rule-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M16.54 11L13 7.46l1.41-1.41l2.12 2.12l4.24-4.24l1.41 1.41zM11 7H2v2h9zm10 6.41L19.59 12L17 14.59L14.41 12L13 13.41L15.59 16L13 18.59L14.41 20L17 17.41L19.59 20L21 18.59L18.41 16zM11 15H2v2h9z"></svg:path>`,
})
export class IcBaselineRuleIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
