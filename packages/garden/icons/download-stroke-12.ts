import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[gardenDownloadStroke12Icon],svg[garden-download-stroke-12-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" d="M1.5 11.5h9m-8-6l3.1 3.1c.2.2.5.2.7 0l3.1-3.1M6 8.5v-8"></svg:path>`,
})
export class GardenDownloadStroke12Icon {
  readonly viewBox = input("0 0 12 12")
  readonly width = input("1em")
  readonly height = input("1em")
}
