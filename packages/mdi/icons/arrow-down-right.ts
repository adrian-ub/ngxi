import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[mdiArrowDownRightIcon],svg[mdi-arrow-down-right-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M21.5 14.5L16 20l-5.5-5.5l1.41-1.41L15 16.17V10.5C15 8 13 6 10.5 6H4V4h6.5a6.5 6.5 0 0 1 6.5 6.5v5.67l3.09-3.09z"></svg:path>`,
})
export class MdiArrowDownRightIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
