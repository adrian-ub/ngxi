import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[solarCloudLineDuotoneIcon],svg[solar-cloud-line-duotone-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-width="1.5"><svg:path d="M14.381 9.027a5.8 5.8 0 0 1 1.905-.32a5.8 5.8 0 0 1 1.87.308C20.392 9.78 22 11.881 22 14.353C22 17.472 19.442 20 16.286 20h-10C3.919 20 2 18.104 2 15.765s1.919-4.235 4.286-4.235q.427 0 .83.079c.565.11 1.09.329 1.55.634"></svg:path><svg:path d="M7.116 11.609a5.6 5.6 0 0 1-.354-1.962C6.762 6.528 9.32 4 12.476 4c2.94 0 5.361 2.194 5.68 5.015" opacity=".5"></svg:path></svg:g>`,
})
export class SolarCloudLineDuotoneIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
