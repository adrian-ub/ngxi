import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[gardenDownloadStroke16Icon],svg[garden-download-stroke-16-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" d="M1.5 15.5h13m-11-7l4.1 4.1c.2.2.5.2.7 0l4.1-4.1m-4.4 4V.5"></svg:path>`,
})
export class GardenDownloadStroke16Icon {
  readonly viewBox = input("0 0 16 16")
  readonly width = input("1em")
  readonly height = input("1em")
}
