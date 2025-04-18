import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[carbonTriangleLeftSolidIcon],svg[carbon-triangle-left-solid-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M29 29.02c0 .569-.477.978-1 .98c-.163 0-.33-.039-.488-.125L3.525 16.855C3.18 16.67 3 16.336 3 16s.181-.67.525-.856l23.987-13.02C27.67 2.039 27.837 2 28 2c.523.002 1 .411 1 .98z"></svg:path>`,
})
export class CarbonTriangleLeftSolidIcon {
  readonly viewBox = input("0 0 32 32")
  readonly width = input("1em")
  readonly height = input("1em")
}
