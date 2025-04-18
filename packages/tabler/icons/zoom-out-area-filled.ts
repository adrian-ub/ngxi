import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[tablerZoomOutAreaFilledIcon],svg[tabler-zoom-out-area-filled-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M15 9a6 6 0 0 1 4.891 9.476l2.816 2.817a1 1 0 0 1-1.414 1.414l-2.817-2.816A6 6 0 0 1 9 15l.004-.225A6 6 0 0 1 15 9m2 5h-4a1 1 0 0 0 0 2h4a1 1 0 0 0 0-2M3 14a1 1 0 0 1 1 1v1a1 1 0 0 0 1 1h1a1 1 0 0 1 0 2H5a3 3 0 0 1-3-3v-1a1 1 0 0 1 1-1m0-5a1 1 0 0 1 1 1v1a1 1 0 0 1-2 0v-1a1 1 0 0 1 1-1m3-7a1 1 0 1 1 0 2H5a1 1 0 0 0-1 1v1a1 1 0 1 1-2 0V5a3 3 0 0 1 3-3zm5 0a1 1 0 0 1 0 2h-1a1 1 0 1 1 0-2zm5 0a3 3 0 0 1 3 3v1a1 1 0 0 1-2 0V5a1 1 0 0 0-1-1h-1a1 1 0 0 1 0-2z"></svg:path>`,
})
export class TablerZoomOutAreaFilledIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
