import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[mdiArrowURightBottomBoldIcon],svg[mdi-arrow-u-right-bottom-bold-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M10.5 3H18v4h-7.5C8.57 7 7 8.57 7 10.5S8.57 14 10.5 14H13v-4l7 6l-7 6v-4h-2.5C6.36 18 3 14.64 3 10.5S6.36 3 10.5 3"></svg:path>`,
})
export class MdiArrowURightBottomBoldIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
