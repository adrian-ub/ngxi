import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[tablerExposureFilledIcon],svg[tabler-exposure-filled-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M19 2a3 3 0 0 1 3 3v14a3 3 0 0 1-3 3H5a3 3 0 0 1-3-3V5a3 3 0 0 1 3-3zm0 2H5a1 1 0 0 0-1 1v14c0 .29.123.55.321.732l1.61-1.584a973 973 0 0 0 6.69-6.675L19.715 4.3A1 1 0 0 0 19 4m-1 11h-4a1 1 0 0 0 0 2h4a1 1 0 0 0 0-2M8 5a1 1 0 0 1 1 1v1h1a1 1 0 0 1 .993.883L11 8a1 1 0 0 1-1 1H9v1a1 1 0 0 1-.883.993L8 11a1 1 0 0 1-1-1V9H6a1 1 0 0 1-.993-.883L5 8a1 1 0 0 1 1-1h1V6a1 1 0 0 1 .883-.993z"></svg:path>`,
})
export class TablerExposureFilledIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
