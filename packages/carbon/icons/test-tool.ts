import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[carbonTestToolIcon],svg[carbon-test-tool-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="m23 9.2l-2.6-2.6L19 8l4 4l7-7l-1.4-1.4zM12 5.4L10.6 4L8 6.6L5.4 4L4 5.4L6.6 8L4 10.6L5.4 12L8 9.4l2.6 2.6l1.4-1.4L9.4 8zm0 16L10.6 20L8 22.6L5.4 20L4 21.4L6.6 24L4 26.6L5.4 28L8 25.4l2.6 2.6l1.4-1.4L9.4 24z"></svg:path><svg:path fill="currentColor" d="M17 15V2h-2v13H2v2h13v13h2V17h13v-2z"></svg:path>`,
})
export class CarbonTestToolIcon {
  readonly viewBox = input("0 0 32 32")
  readonly width = input("1em")
  readonly height = input("1em")
}
