import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[teenyiconsExclamationOutlineIcon],svg[teenyicons-exclamation-outline-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M8 13.5V13H7v.5zm-1 .01v.5h1v-.5zM7 1v10h1V1zm0 12.5v.01h1v-.01z"></svg:path>`,
})
export class TeenyiconsExclamationOutlineIcon {
  readonly viewBox = input("0 0 15 15")
  readonly width = input("1em")
  readonly height = input("1em")
}
