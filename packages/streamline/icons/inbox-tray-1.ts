import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[streamlineInboxTray1Icon],svg[streamline-inbox-tray-1-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M13.5 8H10a1 1 0 0 0-1 1a2 2 0 0 1-4 0a1 1 0 0 0-1-1H.5v4.5a1 1 0 0 0 1 1h11a1 1 0 0 0 1-1zm-9-4L7 6.5L9.5 4M7 .5v6"></svg:path>`,
})
export class StreamlineInboxTray1Icon {
  readonly viewBox = input("0 0 14 14")
  readonly width = input("1em")
  readonly height = input("1em")
}
