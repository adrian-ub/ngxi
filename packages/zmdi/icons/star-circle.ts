import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[zmdiStarCircleIcon],svg[zmdi-star-circle-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M213.5 3q88.5 0 151 62.5T427 216t-62.5 150.5t-151 62.5t-151-62.5T0 216T62.5 65.5T213.5 3M304 344l-24-103l79-69l-105-9l-41-96l-41 97l-105 8l80 69l-24 103l90-54z"></svg:path>`,
})
export class ZmdiStarCircleIcon {
  readonly viewBox = input("0 0 432 432")
  readonly width = input("1em")
  readonly height = input("1em")
}
