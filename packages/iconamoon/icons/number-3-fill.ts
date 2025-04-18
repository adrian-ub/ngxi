import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[iconamoonNumber3FillIcon],svg[iconamoon-number-3-fill-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M7 4a1 1 0 0 1 1-1h8a1 1 0 0 1 .768 1.64l-3.884 4.662A6 6 0 1 1 7.4 19.8a1 1 0 1 1 1.2-1.6A4 4 0 1 0 11 11a1 1 0 0 1-.768-1.64L13.865 5H8a1 1 0 0 1-1-1" clip-rule="evenodd"></svg:path>`,
})
export class IconamoonNumber3FillIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
