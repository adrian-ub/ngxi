import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[carbonGemIcon],svg[carbon-gem-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M23.5 4h-15l-6.784 9.045L16 29.527l14.284-16.482Zm3.5 8h-5.446l-3.75-6H22.5Zm-16.698 2l3.754 10.23L5.19 14Zm2.13 0h7.136l-3.569 9.721Zm.373-2L16 6.887L19.196 12Zm8.893 2h5.112l-8.867 10.231ZM9.5 6h4.696l-3.75 6H5Z"></svg:path>`,
})
export class CarbonGemIcon {
  readonly viewBox = input("0 0 32 32")
  readonly width = input("1em")
  readonly height = input("1em")
}
