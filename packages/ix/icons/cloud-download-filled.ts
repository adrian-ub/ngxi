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
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M298.667 42.667c58.91 0 106.667 47.756 106.667 106.667q0 1.345-.033 2.682c36.82 9.458 64.033 42.877 64.033 82.651c0 46.657-37.445 84.568-83.923 85.322l-1.41.011H277.332v76.486L320 353.83L350.17 384L256 478.17L161.83 384L192 353.83l42.666 42.655V320h-85.332l-.002-.478c-59.802-5.39-106.665-55.65-106.665-116.855c0-64.801 52.532-117.333 117.333-117.333c16.647 0 32.484 3.466 46.83 9.717c18.57-31.358 52.748-52.384 91.837-52.384"></svg:path>`,
})
export class IxCloudDownloadFilledIcon {
  readonly viewBox = input("0 0 512 512")
  readonly width = input("1em")
  readonly height = input("1em")
}
