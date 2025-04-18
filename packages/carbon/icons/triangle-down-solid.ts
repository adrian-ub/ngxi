import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[carbonTriangleDownSolidIcon],svg[carbon-triangle-down-solid-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M29.02 3c.569 0 .978.477.98 1c0 .163-.039.33-.125.489l-13.02 23.986c-.186.344-.52.525-.855.525s-.67-.181-.856-.525L2.124 4.49A1 1 0 0 1 2 4c.002-.523.411-1 .98-1z"></svg:path>`,
})
export class CarbonTriangleDownSolidIcon {
  readonly viewBox = input("0 0 32 32")
  readonly width = input("1em")
  readonly height = input("1em")
}
