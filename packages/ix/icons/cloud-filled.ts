import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[ixCloudFilledIcon],svg[ix-cloud-filled-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M298.667 106.667c58.91 0 106.667 47.756 106.667 106.667l-.033 2.683c36.814 9.449 64.033 42.87 64.033 82.65c0 45.7-35.925 83.01-81.075 85.229L384 384H149.334l.008-.477c-59.807-5.385-106.675-55.647-106.675-116.856c0-64.801 52.532-117.333 117.333-117.333c16.653 0 32.496 3.469 46.845 9.724c18.55-31.362 52.73-52.391 91.822-52.391"></svg:path>`,
})
export class IxCloudFilledIcon {
  readonly viewBox = input("0 0 512 512")
  readonly width = input("1em")
  readonly height = input("1em")
}
