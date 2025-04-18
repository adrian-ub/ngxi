import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[mdiArrowLeftTopBoldIcon],svg[mdi-arrow-left-top-bold-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M21 21h-4v-7.5c0-1.93-1.57-3.5-3.5-3.5H11v4L4 8l7-6v4h2.5c4.14 0 7.5 3.36 7.5 7.5z"></svg:path>`,
})
export class MdiArrowLeftTopBoldIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
