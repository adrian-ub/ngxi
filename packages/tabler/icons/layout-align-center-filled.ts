import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[tablerLayoutAlignCenterFilledIcon],svg[tabler-layout-align-center-filled-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M12 3a1 1 0 0 1 1 1v4h3a3 3 0 0 1 3 3v2a3 3 0 0 1-3 3h-3v4a1 1 0 0 1-2 0v-4H8a3 3 0 0 1-3-3v-2a3 3 0 0 1 3-3h3V4a1 1 0 0 1 1-1"></svg:path>`,
})
export class TablerLayoutAlignCenterFilledIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
