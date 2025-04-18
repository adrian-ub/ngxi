import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[mdiArrowRightTopBoldIcon],svg[mdi-arrow-right-top-bold-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M3 13.5C3 9.36 6.36 6 10.5 6H13V2l7 6l-7 6v-4h-2.5C8.57 10 7 11.57 7 13.5V21H3z"></svg:path>`,
})
export class MdiArrowRightTopBoldIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
