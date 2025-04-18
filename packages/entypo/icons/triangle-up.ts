import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[entypoTriangleUpIcon],svg[entypo-triangle-up-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M15 14H5l5-9z"></svg:path>`,
})
export class EntypoTriangleUpIcon {
  readonly viewBox = input("0 0 20 20")
  readonly width = input("1em")
  readonly height = input("1em")
}
