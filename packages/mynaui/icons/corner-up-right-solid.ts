import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[mynauiCornerUpRightSolidIcon],svg[mynaui-corner-up-right-solid-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M14.763 4.483a.75.75 0 0 0-1.06-.026v4.82H9a4.75 4.75 0 0 0-4.75 4.75V19a.75.75 0 0 0 1.5 0v-4.973A3.25 3.25 0 0 1 9 10.777h4.703v4.821a.75.75 0 0 0 1.06-.027l4.78-5.027a.75.75 0 0 0 0-1.034z"></svg:path>`,
})
export class MynauiCornerUpRightSolidIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
