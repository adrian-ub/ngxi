import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[carbonListCheckedIcon],svg[carbon-list-checked-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M16 22h14v2H16zm-2-2.6L12.6 18L6 24.6L3.4 22L2 23.4l4 4zM16 8h14v2H16zm-2-2.6L12.6 4L6 10.6L3.4 8L2 9.4l4 4z"></svg:path>`,
})
export class CarbonListCheckedIcon {
  readonly viewBox = input("0 0 32 32")
  readonly width = input("1em")
  readonly height = input("1em")
}
