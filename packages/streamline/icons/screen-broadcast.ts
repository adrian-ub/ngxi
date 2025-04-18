import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[streamlineScreenBroadcastIcon],svg[streamline-screen-broadcast-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M.5 8a4 4 0 0 1 4 4m-4-1.5A1.5 1.5 0 0 1 2 12m5 0h5.5a1 1 0 0 0 1-1V3a1 1 0 0 0-1-1h-11a1 1 0 0 0-1 1v2.5"></svg:path>`,
})
export class StreamlineScreenBroadcastIcon {
  readonly viewBox = input("0 0 14 14")
  readonly width = input("1em")
  readonly height = input("1em")
}
