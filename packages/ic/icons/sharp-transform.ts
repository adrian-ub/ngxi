import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[icSharpTransformIcon],svg[ic-sharp-transform-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M22 18v-2H8V4h2L7 1L4 4h2v2H2v2h4v10h10v2h-2l3 3l3-3h-2v-2zM10 8h6v6h2V6h-8z"></svg:path>`,
})
export class IcSharpTransformIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
