import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[teenyiconsInfoSmallOutlineIcon],svg[teenyicons-info-small-outline-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M7 4.5V5h1v-.5zm1-.01v-.5H7v.5zM8 11V7H7v4zm0-6.5v-.01H7v.01zM6 8h1.5V7H6zm0 3h3v-1H6z"></svg:path>`,
})
export class TeenyiconsInfoSmallOutlineIcon {
  readonly viewBox = input("0 0 15 15")
  readonly width = input("1em")
  readonly height = input("1em")
}
