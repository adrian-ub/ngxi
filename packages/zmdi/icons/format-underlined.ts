import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[zmdiFormatUnderlinedIcon],svg[zmdi-format-underlined-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M149 299q-53 0-90.5-37.5T21 171V0h54v171q0 31 21.5 52.5T149 245t53-21.5t22-52.5V0h53v171q0 53-37.5 90.5T149 299M0 341h299v43H0z"></svg:path>`,
})
export class ZmdiFormatUnderlinedIcon {
  readonly viewBox = input("0 0 304 384")
  readonly width = input("0.8em")
  readonly height = input("1em")
}
