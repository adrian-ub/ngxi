import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[ixCloudDownloadListFilledIcon],svg[ix-cloud-download-list-filled-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M490.667 448v42.667H384V448zm-128 0v42.667H320V448zm-102.4-405.333c50.074 0 90.667 40.41 90.667 90.256l-.028 2.271c31.292 7.995 54.428 36.275 54.428 69.935c0 38.669-30.536 70.239-68.914 72.116l-3.62.089l-119.467-.001v76.486L256 311.164l30.17 30.17l-94.17 94.17l-94.17-94.17l30.17-30.17l42.667 42.655v-76.486h-37.333l.007-.403c-50.836-4.557-90.674-47.086-90.674-98.878c0-54.832 44.652-99.282 99.733-99.282c14.155 0 27.622 2.935 39.819 8.228c15.767-26.537 44.82-44.331 78.048-44.331M490.667 384v42.667H384V384zm-128 0v42.667H320V384zm128-64v42.667H384V320zm-128 0v42.667H320V320z"></svg:path>`,
})
export class IxCloudDownloadListFilledIcon {
  readonly viewBox = input("0 0 512 512")
  readonly width = input("1em")
  readonly height = input("1em")
}
