import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[mynauiCornerLeftUpSolidIcon],svg[mynaui-corner-left-up-solid-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M4.483 9.237a.75.75 0 0 0-.026 1.06h4.82V15a4.75 4.75 0 0 0 4.75 4.75H19a.75.75 0 0 0 0-1.5h-4.973a3.25 3.25 0 0 1-3.25-3.25v-4.703h4.821a.75.75 0 0 0-.027-1.06l-5.027-4.78a.75.75 0 0 0-1.034 0z"></svg:path>`,
})
export class MynauiCornerLeftUpSolidIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
