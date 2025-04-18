import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[iconamoonNumber5FillIcon],svg[iconamoon-number-5-fill-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M8.01 3.859A1 1 0 0 1 9 3h7a1 1 0 1 1 0 2H9.867L9.26 9.257A6 6 0 1 1 7.4 19.8a1 1 0 1 1 1.202-1.6a4 4 0 1 0 0-6.402a1 1 0 0 1-1.59-.94z" clip-rule="evenodd"></svg:path>`,
})
export class IconamoonNumber5FillIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
