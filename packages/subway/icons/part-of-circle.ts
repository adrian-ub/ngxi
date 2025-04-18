import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[subwayPartOfCircleIcon],svg[subway-part-of-circle-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M78.2 0v512L453 164C359.5 63.4 226.4 0 78.2 0"></svg:path>`,
})
export class SubwayPartOfCircleIcon {
  readonly viewBox = input("0 0 512 512")
  readonly width = input("1em")
  readonly height = input("1em")
}
