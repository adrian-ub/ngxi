import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[mdiArrowTopRightBottomLeftBoldIcon],svg[mdi-arrow-top-right-bottom-left-bold-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M18.17 8.66L21 11.5V3h-8.5l2.84 2.83l-9.51 9.51L3 12.5V21h8.5l-2.84-2.83z"></svg:path>`,
})
export class MdiArrowTopRightBottomLeftBoldIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
