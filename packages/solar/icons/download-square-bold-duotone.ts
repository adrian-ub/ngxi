import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[solarDownloadSquareBoldDuotoneIcon],svg[solar-download-square-bold-duotone-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M2 12c0-4.714 0-7.071 1.464-8.536C4.93 2 7.286 2 12 2s7.071 0 8.535 1.464C22 4.93 22 7.286 22 12s0 7.071-1.465 8.535C19.072 22 16.714 22 12 22s-7.071 0-8.536-1.465C2 19.072 2 16.714 2 12" opacity=".5"></svg:path><svg:path fill="currentColor" d="M12.75 7a.75.75 0 0 0-1.5 0v5.19l-1.72-1.72a.75.75 0 0 0-1.06 1.06l3 3a.75.75 0 0 0 1.06 0l3-3a.75.75 0 1 0-1.06-1.06l-1.72 1.72zM8 16.25a.75.75 0 0 0 0 1.5h8a.75.75 0 0 0 0-1.5z"></svg:path>`,
})
export class SolarDownloadSquareBoldDuotoneIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
