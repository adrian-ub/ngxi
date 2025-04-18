import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[mynauiChipSolidIcon],svg[mynaui-chip-solid-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M5.25 4c0-.966.784-1.75 1.75-1.75h10c.966 0 1.75.784 1.75 1.75v1.25H21a.75.75 0 0 1 0 1.5h-2.25v2.5H21a.75.75 0 0 1 0 1.5h-2.25v2.5H21a.75.75 0 0 1 0 1.5h-2.25v2.5H21a.75.75 0 0 1 0 1.5h-2.25V20A1.75 1.75 0 0 1 17 21.75H7A1.75 1.75 0 0 1 5.25 20v-1.25H3a.75.75 0 0 1 0-1.5h2.25v-2.5H3a.75.75 0 0 1 0-1.5h2.25v-2.5H3a.75.75 0 0 1 0-1.5h2.25v-2.5H3a.75.75 0 0 1 0-1.5h2.25z"></svg:path>`,
})
export class MynauiChipSolidIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
