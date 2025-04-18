import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[mdiArrowBottomRightBoldOutlineIcon],svg[mdi-arrow-bottom-right-bold-outline-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M9.88 15.54L4.22 9.88l5.66-5.66l5.66 5.66l4.24-4.24v14.14H5.64zm7.78-4.95l-2.12 2.12l-5.66-5.66l-2.83 2.83l5.66 5.66l-2.12 2.12h7.07z"></svg:path>`,
})
export class MdiArrowBottomRightBoldOutlineIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
