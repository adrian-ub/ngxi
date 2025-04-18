import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[icSharpAlignVerticalBottomIcon],svg[ic-sharp-align-vertical-bottom-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M22 22H2v-2h20zM10 2H7v16h3zm7 6h-3v10h3z"></svg:path>`,
})
export class IcSharpAlignVerticalBottomIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
