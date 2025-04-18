import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[icSharpNotEqualIcon],svg[ic-sharp-not-equal-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M19 9.998H5v-2h14zm0 6H5v-2h14z"></svg:path><svg:path fill="currentColor" d="m14.08 4.605l1.84.79l-6 14l-1.84-.79z"></svg:path>`,
})
export class IcSharpNotEqualIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
