import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[tdesignTicketFilledIcon],svg[tdesign-ticket-filled-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M1 4h22v5.041a3 3 0 0 0 0 5.918V20H1v-5.041A3 3 0 0 0 1 9.04zm15 7V9H8v2zm0 4v-2H8v2z"></svg:path>`,
})
export class TdesignTicketFilledIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
