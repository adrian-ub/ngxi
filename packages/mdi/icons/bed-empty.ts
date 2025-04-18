import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[mdiBedEmptyIcon],svg[mdi-bed-empty-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M19 7H5v7H3V5H1v15h2v-3h18v3h2v-9a4 4 0 0 0-4-4"></svg:path>`,
})
export class MdiBedEmptyIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
