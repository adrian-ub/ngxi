import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[riTicket2LineIcon],svg[ri-ticket-2-line-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M21.005 3a1 1 0 0 1 1 1v5.5a2.5 2.5 0 0 0 0 5V20a1 1 0 0 1-1 1h-18a1 1 0 0 1-1-1v-5.5a2.5 2.5 0 0 0 0-5V4a1 1 0 0 1 1-1zm-1 2h-16v2.968l.156.08a4.5 4.5 0 0 1 2.339 3.74l.005.212a4.5 4.5 0 0 1-2.344 3.95l-.156.08V19h16v-2.97l-.156-.08a4.5 4.5 0 0 1-2.34-3.738L17.506 12a4.5 4.5 0 0 1 2.344-3.951l.156-.081zm-4 4v6h-8V9z"></svg:path>`,
})
export class RiTicket2LineIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
