import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[mynauiCornerDownLeftSolidIcon],svg[mynaui-corner-down-left-solid-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M9.237 19.517a.75.75 0 0 0 1.06.027v-4.821H15a4.75 4.75 0 0 0 4.75-4.75V5a.75.75 0 0 0-1.5 0v4.973a3.25 3.25 0 0 1-3.25 3.25h-4.703V8.402a.75.75 0 0 0-1.06.027l-4.78 5.027a.75.75 0 0 0 0 1.034z"></svg:path>`,
})
export class MynauiCornerDownLeftSolidIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
