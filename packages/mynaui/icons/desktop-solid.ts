import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[mynauiDesktopSolidIcon],svg[mynaui-desktop-solid-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M5 3.25A2.75 2.75 0 0 0 2.25 6v9A2.75 2.75 0 0 0 5 17.75h6.25v1.5H9a.75.75 0 0 0 0 1.5h6a.75.75 0 0 0 0-1.5h-2.25v-1.5H19A2.75 2.75 0 0 0 21.75 15V6A2.75 2.75 0 0 0 19 3.25z"></svg:path>`,
})
export class MynauiDesktopSolidIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
