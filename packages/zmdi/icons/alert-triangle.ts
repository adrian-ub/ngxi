import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[zmdiAlertTriangleIcon],svg[zmdi-alert-triangle-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M0 408L235 3l234 405zm256-64v-43h-43v43zm0-85v-86h-43v86z"></svg:path>`,
})
export class ZmdiAlertTriangleIcon {
  readonly viewBox = input("0 0 472 408")
  readonly width = input("1.16em")
  readonly height = input("1em")
}
