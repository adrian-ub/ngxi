import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[fontistoArrowDownIcon],svg[fontisto-arrow-down-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M1.6 8.034L1.634 8l10.633 10.608L22.901 8l.034.034v5.319L12.268 24L1.602 13.353z"></svg:path><svg:path fill="currentColor" d="M14.044 0v18.666h-3.555V0z"></svg:path>`,
})
export class FontistoArrowDownIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
