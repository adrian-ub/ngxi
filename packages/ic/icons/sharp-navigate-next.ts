import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[icSharpNavigateNextIcon],svg[ic-sharp-navigate-next-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M10.02 6L8.61 7.41L13.19 12l-4.58 4.59L10.02 18l6-6z"></svg:path>`,
})
export class IcSharpNavigateNextIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
