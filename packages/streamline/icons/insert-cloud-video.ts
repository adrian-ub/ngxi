import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[streamlineInsertCloudVideoIcon],svg[streamline-insert-cloud-video-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"><svg:path d="m5.344 7.948l3.875 2.422l-3.875 2.421z"></svg:path><svg:path d="M3.353 10.364a2.67 2.67 0 1 1 0-5.33q.225-.015.45 0a3.43 3.43 0 0 1 6.71 0q.23-.015.46 0a2.67 2.67 0 0 1 0 5.33"></svg:path></svg:g>`,
})
export class StreamlineInsertCloudVideoIcon {
  readonly viewBox = input("0 0 14 14")
  readonly width = input("1em")
  readonly height = input("1em")
}
