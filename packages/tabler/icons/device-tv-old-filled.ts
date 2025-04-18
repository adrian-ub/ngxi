import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[tablerDeviceTvOldFilledIcon],svg[tabler-device-tv-old-filled-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="currentColor"><svg:path d="M8.707 2.293L12 5.585l3.293-3.292a1 1 0 0 1 1.32-.083l.094.083a1 1 0 0 1 0 1.414L14.414 6H19a3 3 0 0 1 3 3v9a3 3 0 0 1-3 3H5a3 3 0 0 1-3-3V9a3 3 0 0 1 3-3h4.585L7.293 3.707a1 1 0 0 1 1.414-1.414M19 8h-2a1 1 0 0 0-1 1v9a1 1 0 0 0 1 1h2a1 1 0 0 0 1-1V9a1 1 0 0 0-1-1"></svg:path><svg:path d="M18 14a1 1 0 0 1 .993.883l.007.127a1 1 0 0 1-1.993.117L17 15a1 1 0 0 1 1-1m0-3a1 1 0 0 1 .993.883l.007.127a1 1 0 0 1-1.993.117L17 12a1 1 0 0 1 1-1"></svg:path></svg:g>`,
})
export class TablerDeviceTvOldFilledIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
