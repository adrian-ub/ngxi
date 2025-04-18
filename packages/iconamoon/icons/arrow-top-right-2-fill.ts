import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[iconamoonArrowTopRight2FillIcon],svg[iconamoon-arrow-top-right-2-fill-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M17 16V8a1 1 0 0 0-1-1H8a1 1 0 0 0-.707 1.707l8 8A1 1 0 0 0 17 16" clip-rule="evenodd"></svg:path>`,
})
export class IconamoonArrowTopRight2FillIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
