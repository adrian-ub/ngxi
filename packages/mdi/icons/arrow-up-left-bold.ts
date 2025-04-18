import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[mdiArrowUpLeftBoldIcon],svg[mdi-arrow-up-left-bold-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M13.5 21C9.36 21 6 17.64 6 13.5V11H2l6-7l6 7h-4v2.5c0 1.93 1.57 3.5 3.5 3.5H21v4z"></svg:path>`,
})
export class MdiArrowUpLeftBoldIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
