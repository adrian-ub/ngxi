import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[teenyiconsExclamationSmallOutlineIcon],svg[teenyicons-exclamation-small-outline-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M8 10.5V10H7v.5zm-1 .01v.5h1v-.5zM7 4v4h1V4zm0 6.5v.01h1v-.01z"></svg:path>`,
})
export class TeenyiconsExclamationSmallOutlineIcon {
  readonly viewBox = input("0 0 15 15")
  readonly width = input("1em")
  readonly height = input("1em")
}
