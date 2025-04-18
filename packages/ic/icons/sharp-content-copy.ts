import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[icSharpContentCopyIcon],svg[ic-sharp-content-copy-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M16 1H2v16h2V3h12zm5 4H6v18h15zm-2 16H8V7h11z"></svg:path>`,
})
export class IcSharpContentCopyIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
