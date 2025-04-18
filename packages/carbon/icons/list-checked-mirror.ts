import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[carbonListCheckedMirrorIcon],svg[carbon-list-checked-mirror-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M30 19.4L28.6 18L22 24.6L19.4 22L18 23.4l4 4zM2 22h14v2H2zM30 5.4L28.6 4L22 10.6L19.4 8L18 9.4l4 4zM2 8h14v2H2z"></svg:path>`,
})
export class CarbonListCheckedMirrorIcon {
  readonly viewBox = input("0 0 32 32")
  readonly width = input("1em")
  readonly height = input("1em")
}
