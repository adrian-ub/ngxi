import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[ixCloudNewFilledIcon],svg[ix-cloud-new-filled-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M256 234.667c58.91 0 106.667 47.756 106.667 106.666S314.911 448 256 448c-58.91 0-106.666-47.756-106.666-106.667c0-58.91 47.756-106.666 106.666-106.666m21.334 42.666h-42.667V320H192v42.667h42.666l.001 42.666h42.667v-42.667H320V320h-42.667zM298.667 64c58.91 0 106.667 47.756 106.667 106.667l-.033 2.683c36.814 9.449 64.033 42.87 64.033 82.65c0 45.7-35.925 83.01-81.075 85.229l-4.259.104c0-70.692-57.307-128-128-128c-69.22 0-125.607 54.946-127.926 123.602c-49.286-13.902-85.407-59.2-85.407-112.935c0-64.801 52.532-117.333 117.333-117.333c16.653 0 32.496 3.469 46.845 9.724C225.395 85.03 259.575 64 298.667 64"></svg:path>`,
})
export class IxCloudNewFilledIcon {
  readonly viewBox = input("0 0 512 512")
  readonly width = input("1em")
  readonly height = input("1em")
}
