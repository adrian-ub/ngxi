import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[mdiArrowUDownLeftBoldIcon],svg[mdi-arrow-u-down-left-bold-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M21 10.5V18h-4v-7.5C17 8.57 15.43 7 13.5 7S10 8.57 10 10.5V13h4l-6 7l-6-7h4v-2.5C6 6.36 9.36 3 13.5 3S21 6.36 21 10.5"></svg:path>`,
})
export class MdiArrowUDownLeftBoldIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
