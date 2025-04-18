import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[iconamoonArrowTopRight1FillIcon],svg[iconamoon-arrow-top-right-1-fill-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M18 17V7a1 1 0 0 0-1-1H7a1 1 0 0 0-.707 1.707L10.586 12l-4.293 4.293a1 1 0 1 0 1.414 1.414L12 13.414l4.293 4.293A1 1 0 0 0 18 17" clip-rule="evenodd"></svg:path>`,
})
export class IconamoonArrowTopRight1FillIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
