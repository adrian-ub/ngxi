import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[foundationCloudIcon],svg[foundation-cloud-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M79.437 47.349c-3.51-12.982-14.464-22.083-27.134-22.083c-8.835 0-17.065 4.454-22.414 12.018a20.2 20.2 0 0 0-4.501-.514c-11.889 0-21.563 10.539-21.563 23.498c0 4.647 1.251 9.148 3.612 13.018c.555.906 1.49 1.449 2.49 1.449h80.84c.947 0 1.836-.485 2.403-1.315a17.25 17.25 0 0 0 3.004-9.767c.001-9.658-7.814-17.473-16.737-16.304"></svg:path>`,
})
export class FoundationCloudIcon {
  readonly viewBox = input("0 0 100 100")
  readonly width = input("1em")
  readonly height = input("1em")
}
