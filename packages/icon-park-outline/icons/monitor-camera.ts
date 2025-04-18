import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[iconParkOutlineMonitorCameraIcon],svg[icon-park-outline-monitor-camera-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linejoin="round" stroke-width="4"><svg:path d="M24 34c8.284 0 15-6.716 15-15S32.284 4 24 4S9 10.716 9 19s6.716 15 15 15Z"></svg:path><svg:path d="M24 25a6 6 0 1 0 0-12a6 6 0 0 0 0 12Z"></svg:path><svg:path stroke-linecap="round" d="M19.369 34L16 44h16l-3.396-10z" clip-rule="evenodd"></svg:path><svg:path stroke-linecap="round" d="M12 44h24"></svg:path></svg:g>`,
})
export class IconParkOutlineMonitorCameraIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}
