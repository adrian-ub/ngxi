import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[mdiArrowUpRightBoldIcon],svg[mdi-arrow-up-right-bold-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M3 21v-4h7.5c1.93 0 3.5-1.57 3.5-3.5V11h-4l6-7l6 7h-4v2.5c0 4.14-3.36 7.5-7.5 7.5z"></svg:path>`,
})
export class MdiArrowUpRightBoldIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
