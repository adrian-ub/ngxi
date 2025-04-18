import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[ggFiltersIcon],svg[gg-filters-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M4.708 15.44a6.97 6.97 0 0 0 3.997 1.266a7 7 0 1 0 6.59-9.413A7 7 0 1 0 4.708 15.44m1.148-1.64a5 5 0 0 0 2.431.886a6.97 6.97 0 0 1 1.256-4.408a6.97 6.97 0 0 1 3.713-2.687a5 5 0 1 0-7.4 6.21m12.289-3.603a5 5 0 0 0-2.432-.885a6.97 6.97 0 0 1-1.256 4.408a6.97 6.97 0 0 1-3.713 2.687a5 5 0 1 0 7.4-6.21" clip-rule="evenodd"></svg:path>`,
})
export class GgFiltersIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
