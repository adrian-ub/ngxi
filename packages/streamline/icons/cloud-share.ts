import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[streamlineCloudShareIcon],svg[streamline-cloud-share-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"><svg:path d="M2 11.062A3.2 3.2 0 0 1 .52 8.577a3.193 3.193 0 0 1 2.972-3.4a.23.23 0 0 0 .21-.126a3.868 3.868 0 0 1 7.508.91a.25.25 0 0 0 .173.2A2.73 2.73 0 0 1 12 11.249M8.108 8.946L5.89 10.055"></svg:path><svg:path d="M8 8.5a1 1 0 1 0 2 0a1 1 0 1 0-2 0m-4 2a1 1 0 1 0 2 0a1 1 0 1 0-2 0m4 2a1 1 0 1 0 2 0a1 1 0 1 0-2 0m-2.11-1.555l2.218 1.109"></svg:path></svg:g>`,
})
export class StreamlineCloudShareIcon {
  readonly viewBox = input("0 0 14 14")
  readonly width = input("1em")
  readonly height = input("1em")
}
