import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[tablerVersionsFilledIcon],svg[tabler-versions-filled-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M18 4h-6a3 3 0 0 0-3 3v10a3 3 0 0 0 3 3h6a3 3 0 0 0 3-3V7a3 3 0 0 0-3-3M7 6a1 1 0 0 1 .993.883L8 7v10a1 1 0 0 1-1.993.117L6 17V7a1 1 0 0 1 1-1M4 7a1 1 0 0 1 .993.883L5 8v8a1 1 0 0 1-1.993.117L3 16V8a1 1 0 0 1 1-1"></svg:path>`,
})
export class TablerVersionsFilledIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
