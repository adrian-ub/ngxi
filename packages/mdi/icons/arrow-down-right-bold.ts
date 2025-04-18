import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[mdiArrowDownRightBoldIcon],svg[mdi-arrow-down-right-bold-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M10.5 3c4.14 0 7.5 3.36 7.5 7.5V13h4l-6 7l-6-7h4v-2.5C14 8.57 12.43 7 10.5 7H3V3z"></svg:path>`,
})
export class MdiArrowDownRightBoldIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
