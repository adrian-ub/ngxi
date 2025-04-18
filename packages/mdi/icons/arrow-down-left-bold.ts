import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[mdiArrowDownLeftBoldIcon],svg[mdi-arrow-down-left-bold-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M21 3v4h-7.5C11.57 7 10 8.57 10 10.5V13h4l-6 7l-6-7h4v-2.5C6 6.36 9.36 3 13.5 3z"></svg:path>`,
})
export class MdiArrowDownLeftBoldIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
