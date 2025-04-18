import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[fontistoArrowSwapIcon],svg[fontisto-arrow-swap-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="m0 16.16l5.746-5.746v4.214H24v3.065H5.746v4.214zm18.254-7.28H0V5.814h18.254V1.6L24 7.346l-5.746 5.746z"></svg:path>`,
})
export class FontistoArrowSwapIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
