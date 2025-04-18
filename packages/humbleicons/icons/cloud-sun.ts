import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[humbleiconsCloudSunIcon],svg[humbleicons-cloud-sun-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M10 3.5V3m-6.5 7H3m11.596-4.596l.354-.354m-9.546.354L5.05 5.05M9 13.036a3.5 3.5 0 0 1 1.975.99M12.645 7a4 4 0 0 0-6.59 3.666M5 16.5A3.5 3.5 0 0 0 8.5 20h9.75a2.75 2.75 0 0 0 .734-5.4a5 5 0 0 0-9.614-1.491A3.504 3.504 0 0 0 5 16.5"></svg:path>`,
})
export class HumbleiconsCloudSunIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
