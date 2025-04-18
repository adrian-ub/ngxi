import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[tablerMailboxOffIcon],svg[tabler-mailbox-off-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M10 21v-6.5a3.5 3.5 0 0 0-7 0V21h18m0-4v-2a4 4 0 0 0-4-4h-2m-4 0H6.5M12 8V3h4l2 2l-2 2h-4m-6 8h1M3 3l18 18"></svg:path>`,
})
export class TablerMailboxOffIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
