import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[icSharpShortTextIcon],svg[ic-sharp-short-text-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M4 9h16v2H4zm0 4h10v2H4z"></svg:path>`,
})
export class IcSharpShortTextIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
