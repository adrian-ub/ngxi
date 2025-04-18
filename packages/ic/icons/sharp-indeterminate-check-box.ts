import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[icSharpIndeterminateCheckBoxIcon],svg[ic-sharp-indeterminate-check-box-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M21 3H3v18h18zm-4 10H7v-2h10z"></svg:path>`,
})
export class IcSharpIndeterminateCheckBoxIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
