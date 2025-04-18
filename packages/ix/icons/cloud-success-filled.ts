import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[ixCloudSuccessFilledIcon],svg[ix-cloud-success-filled-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M298.667 64c58.91 0 106.667 47.757 106.667 106.667q0 1.345-.033 2.683c36.82 9.457 64.033 42.876 64.033 82.65c0 13.834-3.292 26.9-9.136 38.455C438.734 270.832 407.766 256 373.333 256c-53.708 0-98.987 36.085-112.916 85.334H160c-64.801 0-117.333-52.532-117.333-117.334c0-64.801 52.532-117.333 117.333-117.333c16.647 0 32.484 3.467 46.829 9.718C225.4 85.026 259.578 64 298.667 64m74.666 213.333c-53.019 0-96 42.981-96 96c0 53.02 42.981 96 96 96c53.02 0 96-42.98 96-96c0-53.019-42.98-96-96-96m62.763 62.763l-84.095 84.095l-41.428-41.429l18.856-18.856l22.572 22.572l65.239-65.238z" clip-rule="evenodd"></svg:path>`,
})
export class IxCloudSuccessFilledIcon {
  readonly viewBox = input("0 0 512 512")
  readonly width = input("1em")
  readonly height = input("1em")
}
