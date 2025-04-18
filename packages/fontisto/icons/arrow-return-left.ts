import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[fontistoArrowReturnLeftIcon],svg[fontisto-arrow-return-left-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M20.935 20.822H24V7.414H5.746V3.2L0 8.946l5.746 5.746v-4.213h15.189v7.28H2.988v3.065z"></svg:path>`,
})
export class FontistoArrowReturnLeftIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
