import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[iconamoonArrowBottomLeft2FillIcon],svg[iconamoon-arrow-bottom-left-2-fill-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M7 8v8a1 1 0 0 0 1 1h8a1 1 0 0 0 .707-1.707l-8-8A1 1 0 0 0 7 8" clip-rule="evenodd"></svg:path>`,
})
export class IconamoonArrowBottomLeft2FillIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
