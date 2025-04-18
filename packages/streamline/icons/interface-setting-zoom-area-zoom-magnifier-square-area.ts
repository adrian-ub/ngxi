import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[streamlineInterfaceSettingZoomAreaZoomMagnifierSquareAreaIcon],svg[streamline-interface-setting-zoom-area-zoom-magnifier-square-area-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"><svg:path d="M11.5.5h1a1 1 0 0 1 1 1v1m-13 0v-1a1 1 0 0 1 1-1h1m3 0h3m5 5v2.75M.5 5.5v3m0 3v1a1 1 0 0 0 1 1h1m3 0h2.75"></svg:path><svg:circle cx="8" cy="8" r="3.5"></svg:circle><svg:path d="M10.47 10.47L13 13"></svg:path></svg:g>`,
})
export class StreamlineInterfaceSettingZoomAreaZoomMagnifierSquareAreaIcon {
  readonly viewBox = input("0 0 14 14")
  readonly width = input("1em")
  readonly height = input("1em")
}
