import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[carbonTriangleLeftOutlineIcon],svg[carbon-triangle-left-outline-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M27.512 2.125L3.525 15.144A.98.98 0 0 0 3 16c0 .335.181.669.525.856l23.987 13.019c.158.086.325.126.488.125c.523-.002 1-.411 1-.98V2.98c0-.569-.477-.979-1-.98c-.163 0-.33.039-.488.125M27 27.323L6.132 16L27 4.677z"></svg:path>`,
})
export class CarbonTriangleLeftOutlineIcon {
  readonly viewBox = input("0 0 32 32")
  readonly width = input("1em")
  readonly height = input("1em")
}
