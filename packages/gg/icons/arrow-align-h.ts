import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[ggArrowAlignHIcon],svg[gg-arrow-align-h-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M13 7h-2v10h2zm-7 .757l1.414 1.415L5.586 11H10v2H5.586l1.828 1.828L6 16.243L1.757 12zm12 8.486l-1.414-1.414L18.414 13H14v-2h4.414l-1.828-1.828L18 7.757L22.243 12z"></svg:path>`,
})
export class GgArrowAlignHIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
