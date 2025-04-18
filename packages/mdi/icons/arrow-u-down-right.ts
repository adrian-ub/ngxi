import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[mdiArrowUDownRightIcon],svg[mdi-arrow-u-down-right-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M21.5 14.5L16 20l-5.5-5.5l1.41-1.41L15 16.17V10.5C15 8 13 6 10.5 6S6 8 6 10.5V18H4v-7.5a6.5 6.5 0 1 1 13 0v5.67l3.09-3.09z"></svg:path>`,
})
export class MdiArrowUDownRightIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
