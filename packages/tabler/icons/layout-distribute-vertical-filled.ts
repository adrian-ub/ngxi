import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[tablerLayoutDistributeVerticalFilledIcon],svg[tabler-layout-distribute-vertical-filled-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M4 3a1 1 0 0 1 1 1v16a1 1 0 0 1-2 0V4a1 1 0 0 1 1-1m16 0a1 1 0 0 1 1 1v16a1 1 0 0 1-2 0V4a1 1 0 0 1 1-1m-7 2a3 3 0 0 1 3 3v8a3 3 0 0 1-3 3h-2a3 3 0 0 1-3-3V8a3 3 0 0 1 3-3z"></svg:path>`,
})
export class TablerLayoutDistributeVerticalFilledIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
