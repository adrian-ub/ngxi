import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[mdiArrowTopLeftBottomRightBoldIcon],svg[mdi-arrow-top-left-bottom-right-bold-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M5.83 8.66L3 11.5V3h8.5L8.66 5.83l9.51 9.51L21 12.5V21h-8.5l2.84-2.83z"></svg:path>`,
})
export class MdiArrowTopLeftBottomRightBoldIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
