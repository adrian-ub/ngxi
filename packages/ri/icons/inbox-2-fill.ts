import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[riInbox2FillIcon],svg[ri-inbox-2-fill-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M5 3a1 1 0 0 0-.976.783l-2 9A1 1 0 0 0 2 13v7a1 1 0 0 0 1 1h18a1 1 0 0 0 1-1v-7q0-.11-.024-.217l-2-9A1 1 0 0 0 19 3zm14.753 9H15a3 3 0 1 1-6 0H4.247l1.555-7h12.396z"></svg:path>`,
})
export class RiInbox2FillIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
