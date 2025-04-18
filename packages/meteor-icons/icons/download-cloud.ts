import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[meteorIconsDownloadCloudIcon],svg[meteor-icons-download-cloud-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M18 17a5 5 0 1 0 0-10A1 1 0 1 0 5 9a1 1 0 0 0 0 8h1m3 3l3 3l3-3m-3 3V11"></svg:path>`,
})
export class MeteorIconsDownloadCloudIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
