import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[gardenDownloadFill16Icon],svg[garden-download-fill-16-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" d="M8 12V.5m-6.5 15h13"></svg:path><svg:path fill="currentColor" d="m12.24 8.84l-3.5 3.85c-.4.44-1.08.44-1.48 0l-3.5-3.85A.504.504 0 0 1 4.13 8h7.74c.43 0 .66.52.37.84"></svg:path>`,
})
export class GardenDownloadFill16Icon {
  readonly viewBox = input("0 0 16 16")
  readonly width = input("1em")
  readonly height = input("1em")
}
