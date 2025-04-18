import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[zmdiWrenchIcon],svg[zmdi-wrench-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M464 389q6 5 6 14.5t-8 15.5l-49 49q-7 7-15.5 7t-14.5-7L189 274q-37 15-77.5 6.5T41 242q-31-32-39-75.5T14 84l94 92l64-64l-92-92q38-18 82-10.5T238 48q30 30 38.5 70.5T270 195z"></svg:path>`,
})
export class ZmdiWrenchIcon {
  readonly viewBox = input("0 0 472 480")
  readonly width = input("0.99em")
  readonly height = input("1em")
}
