import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[tablerZoomCancelIcon],svg[tabler-zoom-cancel-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 10a7 7 0 1 0 14 0a7 7 0 1 0-14 0m5-2l4 4m0-4l-4 4m13 9l-6-6"></svg:path>`,
})
export class TablerZoomCancelIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
