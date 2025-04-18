import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[icSharpHorizontalDistributeIcon],svg[ic-sharp-horizontal-distribute-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M4 22H2V2h2zM22 2h-2v20h2zm-8.5 5h-3v10h3z"></svg:path>`,
})
export class IcSharpHorizontalDistributeIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
