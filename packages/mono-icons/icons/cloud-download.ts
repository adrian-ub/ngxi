import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[monoIconsCloudDownloadIcon],svg[mono-icons-cloud-download-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M11 4a4 4 0 0 0-3.999 4.102a1 1 0 0 1-.75.992A3.002 3.002 0 0 0 7 15h1a1 1 0 1 1 0 2H7a5 5 0 0 1-1.97-9.596a6 6 0 0 1 11.169-2.4A6 6 0 0 1 16 17a1 1 0 1 1 0-2a4 4 0 1 0-.328-7.987a1 1 0 0 1-.999-.6A4 4 0 0 0 11 4m1 6a1 1 0 0 1 1 1v7.586l.293-.293a1 1 0 0 1 1.414 1.414l-2 2a1 1 0 0 1-1.414 0l-2-2a1 1 0 1 1 1.414-1.414l.293.293V11a1 1 0 0 1 1-1"></svg:path>`,
})
export class MonoIconsCloudDownloadIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
