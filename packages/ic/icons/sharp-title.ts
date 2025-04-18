import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[icSharpTitleIcon],svg[ic-sharp-title-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M5 4v3h5.5v12h3V7H19V4z"></svg:path>`,
})
export class IcSharpTitleIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
