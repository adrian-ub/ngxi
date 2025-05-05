import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[ixCloudDownloadFilledIcon],svg[ix-cloud-download-filled-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M106.478 152.546q-.009-.704-.009-1.41c0-59.423 48.171-107.594 107.594-107.594c36.23 0 68.277 17.906 87.774 45.352c14.44-6.12 30.32-9.505 46.991-9.505c66.553 0 120.506 53.952 120.506 120.506s-53.953 120.507-120.506 120.507h-71.495v76.082l42.668-42.656l30.169 30.17l-94.169 94.17l-94.17-94.17l30.17-30.17l42.666 42.655v-76.081h-6.347v-.001H127.958c-47.105 0-85.291-38.186-85.291-85.292c0-39.685 27.104-73.04 63.811-82.563" clip-rule="evenodd"></svg:path>`,
})
export class IxCloudDownloadFilledIcon {
  readonly viewBox = input("0 0 512 512")
  readonly width = input("1em")
  readonly height = input("1em")
}
