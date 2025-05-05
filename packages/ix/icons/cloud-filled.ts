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
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M102.593 220.342c3.555-63.378 56.075-113.675 120.341-113.675c44.353 0 83.11 23.955 104.039 59.633a121 121 0 0 1 21.855-1.977c66.554 0 120.506 53.953 120.506 120.507c0 66.553-53.952 120.506-120.506 120.506H228.32v-.003h-89.653c-53.02 0-96-42.98-96-96c0-40.26 24.783-74.732 59.926-88.991" clip-rule="evenodd"></svg:path>`,
})
export class IxCloudFilledIcon {
  readonly viewBox = input("0 0 512 512")
  readonly width = input("1em")
  readonly height = input("1em")
}
