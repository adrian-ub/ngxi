import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[streamlineInboxTray1SolidIcon],svg[streamline-inbox-tray-1-solid-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M7.75.76a.75.75 0 0 0-1.5 0v2.75H4.5a.75.75 0 0 0-.53 1.28l2.5 2.5a.75.75 0 0 0 1.06 0l2.5-2.5a.75.75 0 0 0-.53-1.28H7.75zM.5 8.33a.5.5 0 0 0-.5.5v3.67A1.5 1.5 0 0 0 1.5 14h11a1.5 1.5 0 0 0 1.5-1.5V8.83a.5.5 0 0 0-.5-.5h-2.973a1.5 1.5 0 0 0-1.5 1.5c0 .974-.976 1.732-2.03 1.725c-1.024-.007-1.97-.768-1.97-1.725a1.5 1.5 0 0 0-1.5-1.5z" clip-rule="evenodd"></svg:path>`,
})
export class StreamlineInboxTray1SolidIcon {
  readonly viewBox = input("0 0 14 14")
  readonly width = input("1em")
  readonly height = input("1em")
}
