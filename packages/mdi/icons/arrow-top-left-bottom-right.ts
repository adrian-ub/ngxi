import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[mdiArrowTopLeftBottomRightIcon],svg[mdi-arrow-top-left-bottom-right-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M13 21h8v-8h-2v4.59L6.41 5H11V3H3v8h2V6.41L17.59 19H13z"></svg:path>`,
})
export class MdiArrowTopLeftBottomRightIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
