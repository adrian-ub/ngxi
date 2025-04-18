import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[tablerMailboxIcon],svg[tabler-mailbox-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"><svg:path d="M10 21v-6.5a3.5 3.5 0 0 0-7 0V21h18v-6a4 4 0 0 0-4-4H6.5"></svg:path><svg:path d="M12 11V3h4l2 2l-2 2h-4m-6 8h1"></svg:path></svg:g>`,
})
export class TablerMailboxIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
