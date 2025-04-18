import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[fontistoArrowReturnRightIcon],svg[fontisto-arrow-return-right-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M3.065 20.822H0V7.414h18.254V3.2L24 8.946l-5.746 5.746v-4.213H3.065v7.28h17.946v3.065z"></svg:path>`,
})
export class FontistoArrowReturnRightIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
