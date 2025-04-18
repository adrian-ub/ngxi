import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[mdiArrowUDownRightBoldIcon],svg[mdi-arrow-u-down-right-bold-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M10.5 3c4.14 0 7.5 3.36 7.5 7.5V13h4l-6 7l-6-7h4v-2.5C14 8.57 12.43 7 10.5 7S7 8.57 7 10.5V18H3v-7.5C3 6.36 6.36 3 10.5 3"></svg:path>`,
})
export class MdiArrowUDownRightBoldIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
