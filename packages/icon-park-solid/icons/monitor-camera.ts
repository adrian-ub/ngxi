import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[iconParkSolidMonitorCameraIcon],svg[icon-park-solid-monitor-camera-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:defs><svg:mask id="ipSMonitorCamera0"><svg:g fill="none" stroke-linejoin="round" stroke-width="4"><svg:path fill="#fff" stroke="#fff" d="M24 34c8.284 0 15-6.716 15-15S32.284 4 24 4S9 10.716 9 19s6.716 15 15 15Z"></svg:path><svg:path fill="#000" stroke="#000" d="M24 25a6 6 0 1 0 0-12a6 6 0 0 0 0 12Z"></svg:path><svg:path stroke="#fff" stroke-linecap="round" d="M19.369 34L16 44h16l-3.396-10z" clip-rule="evenodd"></svg:path><svg:path stroke="#fff" stroke-linecap="round" d="M12 44h24"></svg:path></svg:g></svg:mask></svg:defs><svg:path fill="currentColor" d="M0 0h48v48H0z" mask="url(#ipSMonitorCamera0)"></svg:path>`,
})
export class IconParkSolidMonitorCameraIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}
