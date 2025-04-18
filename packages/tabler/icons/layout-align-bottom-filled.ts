import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[tablerLayoutAlignBottomFilledIcon],svg[tabler-layout-align-bottom-filled-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M20 19a1 1 0 0 1 0 2H4a1 1 0 0 1 0-2zM13 3a3 3 0 0 1 3 3v8a3 3 0 0 1-3 3h-2a3 3 0 0 1-3-3V6a3 3 0 0 1 3-3z"></svg:path>`,
})
export class TablerLayoutAlignBottomFilledIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
