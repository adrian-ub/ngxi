import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[mynauiCornerDownRightSolidIcon],svg[mynaui-corner-down-right-solid-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M14.763 19.517a.75.75 0 0 1-1.06.027v-4.821H9a4.75 4.75 0 0 1-4.75-4.75V5a.75.75 0 0 1 1.5 0v4.973A3.25 3.25 0 0 0 9 13.223h4.703V8.402a.75.75 0 0 1 1.06.027l4.78 5.027a.75.75 0 0 1 0 1.034z"></svg:path>`,
})
export class MynauiCornerDownRightSolidIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
