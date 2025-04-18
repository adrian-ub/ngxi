import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[mynauiCornerRightUpSolidIcon],svg[mynaui-corner-right-up-solid-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M19.517 9.237c.3.285.312.76.027 1.06h-4.821V15a4.75 4.75 0 0 1-4.75 4.75H5a.75.75 0 0 1 0-1.5h4.973a3.25 3.25 0 0 0 3.25-3.25v-4.703H8.402a.75.75 0 0 1 .027-1.06l5.027-4.78a.75.75 0 0 1 1.034 0z"></svg:path>`,
})
export class MynauiCornerRightUpSolidIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
