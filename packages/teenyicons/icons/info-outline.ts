import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[teenyiconsInfoOutlineIcon],svg[teenyicons-info-outline-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M7 1.5V2h1v-.5zm1-.01v-.5H7v.5zM8 13.5V4H7v9.5zm0-12v-.01H7v.01zM4 5h3.5V4H4zm-2 9h11v-1H2z"></svg:path>`,
})
export class TeenyiconsInfoOutlineIcon {
  readonly viewBox = input("0 0 15 15")
  readonly width = input("1em")
  readonly height = input("1em")
}
