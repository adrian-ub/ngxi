import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[streamlineInboxTray2SolidIcon],svg[streamline-inbox-tray-2-solid-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M10.193 3.546a.75.75 0 0 1-.693.463H7.75v2.75a.75.75 0 0 1-1.5 0V4.01H4.5a.75.75 0 0 1-.53-1.28l2.5-2.5a.75.75 0 0 1 1.06 0l2.5 2.5a.75.75 0 0 1 .163.817ZM.5 8.33a.5.5 0 0 0-.5.5v3.67A1.5 1.5 0 0 0 1.5 14h11a1.5 1.5 0 0 0 1.5-1.5V8.83a.5.5 0 0 0-.5-.5h-2.973a1.5 1.5 0 0 0-1.5 1.5c0 .974-.976 1.732-2.03 1.725c-1.024-.007-1.97-.768-1.97-1.725a1.5 1.5 0 0 0-1.5-1.5z" clip-rule="evenodd"></svg:path>`,
})
export class StreamlineInboxTray2SolidIcon {
  readonly viewBox = input("0 0 14 14")
  readonly width = input("1em")
  readonly height = input("1em")
}
