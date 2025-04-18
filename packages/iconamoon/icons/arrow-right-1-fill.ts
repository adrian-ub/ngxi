import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[iconamoonArrowRight1FillIcon],svg[iconamoon-arrow-right-1-fill-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M11 19a1 1 0 0 0 1.707.707l7-7a1 1 0 0 0 0-1.414l-7-7A1 1 0 0 0 11 5v6H5a1 1 0 1 0 0 2h6z" clip-rule="evenodd"></svg:path>`,
})
export class IconamoonArrowRight1FillIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
