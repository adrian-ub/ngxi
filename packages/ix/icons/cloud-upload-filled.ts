import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[ixCloudUploadFilledIcon],svg[ix-cloud-upload-filled-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M256 289.83L350.17 384L320 414.17l-42.667-42.654v97.838h-42.666v-97.84L192 414.17L161.83 384zM298.667 64c58.91 0 106.667 47.756 106.667 106.667l-.033 2.683c36.814 9.449 64.033 42.87 64.033 82.65c0 45.7-35.925 83.01-81.075 85.229l-4.259.104h-33.83L256 247.163l-94.17 94.17h-12.496l.008-.477C89.535 335.47 42.667 285.209 42.667 224c0-64.801 52.532-117.333 117.333-117.333c16.653 0 32.496 3.469 46.845 9.724C225.395 85.03 259.575 64 298.667 64"></svg:path>`,
})
export class IxCloudUploadFilledIcon {
  readonly viewBox = input("0 0 512 512")
  readonly width = input("1em")
  readonly height = input("1em")
}
