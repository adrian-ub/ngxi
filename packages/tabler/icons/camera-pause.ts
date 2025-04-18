import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[tablerCameraPauseIcon],svg[tabler-camera-pause-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"><svg:path d="M13 20H5a2 2 0 0 1-2-2V9a2 2 0 0 1 2-2h1a2 2 0 0 0 2-2a1 1 0 0 1 1-1h6a1 1 0 0 1 1 1a2 2 0 0 0 2 2h1a2 2 0 0 1 2 2v4"></svg:path><svg:path d="M14.958 13.506a3 3 0 1 0-1.735 2.235M17 17v5m4-5v5"></svg:path></svg:g>`,
})
export class TablerCameraPauseIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
