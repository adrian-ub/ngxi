import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[icSharpEditOffIcon],svg[ic-sharp-edit-off-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="m21.41 6.33l-3.75-3.75l-2.53 2.54l3.75 3.75zM1.39 4.22l7.32 7.32L3 17.25V21h3.75l5.71-5.71l7.32 7.32l1.41-1.41L2.81 2.81zm16.42 5.72l-3.75-3.75l-2.52 2.52l3.75 3.75z"></svg:path>`,
})
export class IcSharpEditOffIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
