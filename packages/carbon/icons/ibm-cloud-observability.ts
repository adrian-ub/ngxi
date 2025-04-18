import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[carbonIbmCloudObservabilityIcon],svg[carbon-ibm-cloud-observability-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M26 15h5v2h-5zm0 8h5v2h-5zm-8-5.82l-2.59-2.59L14 16l4 4l6-6l-1.41-1.41zm0 8l-2.59-2.59L14 24l4 4l6-6l-1.41-1.41zM11 25H8.5A5.507 5.507 0 0 1 3 19.5a5.51 5.51 0 0 1 5.123-5.48L9 14l.05-.87A7.98 7.98 0 0 1 17 6a7.96 7.96 0 0 1 7.169 4.445l1.791-.89A9.95 9.95 0 0 0 17 4a9.976 9.976 0 0 0-9.822 8.124C3.655 12.754 1 15.849 1 19.5C1 23.636 4.364 27 8.5 27H11z"></svg:path>`,
})
export class CarbonIbmCloudObservabilityIcon {
  readonly viewBox = input("0 0 32 32")
  readonly width = input("1em")
  readonly height = input("1em")
}
