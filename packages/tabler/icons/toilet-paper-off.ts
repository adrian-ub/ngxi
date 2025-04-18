import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[tablerToiletPaperOffIcon],svg[tabler-toilet-paper-off-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4.27 4.28C3.502 5.55 3 7.639 3 10c0 3.866 1.343 7 3 7s3-3.134 3-7q0-.509-.03-1M21 10c0-3.866-1.343-7-3-7M7 3h11m3 7v7m-1.513 2.496L18 19l-3 2l-3-3l-3 2V10m-3 0h.01M3 3l18 18"></svg:path>`,
})
export class TablerToiletPaperOffIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
