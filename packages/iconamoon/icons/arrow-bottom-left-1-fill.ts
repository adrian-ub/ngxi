import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[iconamoonArrowBottomLeft1FillIcon],svg[iconamoon-arrow-bottom-left-1-fill-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M6 7v10a1 1 0 0 0 1 1h10a1 1 0 0 0 .707-1.707L13.414 12l4.293-4.293a1 1 0 0 0-1.414-1.414L12 10.586L7.707 6.293A1 1 0 0 0 6 7" clip-rule="evenodd"></svg:path>`,
})
export class IconamoonArrowBottomLeft1FillIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
