import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[mdiArrowBottomRightThickIcon],svg[mdi-arrow-bottom-right-thick-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M14.89 12.06V7.11h3.42v11.2H7.11v-3.42h4.95L5.69 8.5L8.5 5.69z"></svg:path>`,
})
export class MdiArrowBottomRightThickIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
