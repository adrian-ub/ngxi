import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[phCloudSnowIcon],svg[ph-cloud-snow-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M88 196a12 12 0 1 1-12-12a12 12 0 0 1 12 12m28 4a12 12 0 1 0 12 12a12 12 0 0 0-12-12m48-16a12 12 0 1 0 12 12a12 12 0 0 0-12-12m-96 40a12 12 0 1 0 12 12a12 12 0 0 0-12-12m88 0a12 12 0 1 0 12 12a12 12 0 0 0-12-12m76-132a76.08 76.08 0 0 1-76 76H76a52 52 0 0 1 0-104a53 53 0 0 1 8.92.76A76.08 76.08 0 0 1 232 92m-16 0a60.06 60.06 0 0 0-120-3.54a8 8 0 0 1-16-.92q.21-3.66.77-7.23A38 38 0 0 0 76 80a36 36 0 0 0 0 72h80a60.07 60.07 0 0 0 60-60"></svg:path>`,
})
export class PhCloudSnowIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}
