import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[uimLineSpacingIcon],svg[uim-line-spacing-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M21 8H10a1 1 0 0 1 0-2h11a1 1 0 0 1 0 2m0 5H10a1 1 0 0 1 0-2h11a1 1 0 0 1 0 2" opacity=".5"></svg:path><svg:path fill="currentColor" d="M4.667 18.5a1 1 0 0 1-1-1v-11a1 1 0 0 1 2 0v11a1 1 0 0 1-1 1"></svg:path><svg:path fill="currentColor" d="M21 18H10a1 1 0 0 1 0-2h11a1 1 0 0 1 0 2" opacity=".5"></svg:path><svg:path fill="currentColor" d="M6.334 9a1 1 0 0 1-.77-.36l-.897-1.078l-.898 1.079A1 1 0 0 1 2.23 7.359l1.667-2A1 1 0 0 1 4.667 5a1 1 0 0 1 .769.36l1.666 2A1 1 0 0 1 6.334 9M4.667 19a1 1 0 0 1-.769-.36l-1.667-2a1 1 0 1 1 1.538-1.28l.898 1.078l.897-1.078a1 1 0 0 1 1.538 1.28l-1.666 2a1 1 0 0 1-.769.36"></svg:path>`,
})
export class UimLineSpacingIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
