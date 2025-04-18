import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[mynauiCornerRightDownSolidIcon],svg[mynaui-corner-right-down-solid-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M19.517 14.763a.75.75 0 0 0 .027-1.06h-4.821V9a4.75 4.75 0 0 0-4.75-4.75H5a.75.75 0 0 0 0 1.5h4.973A3.25 3.25 0 0 1 13.223 9v4.703H8.402a.75.75 0 0 0 .027 1.06l5.027 4.78a.75.75 0 0 0 1.034 0z"></svg:path>`,
})
export class MynauiCornerRightDownSolidIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
