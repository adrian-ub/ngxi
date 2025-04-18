import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[zmdiFormatBoldIcon],svg[zmdi-format-bold-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M183 166q21 10 33.5 29.5T229 239q0 34-23 57.5T150 320H0V21h133q36 0 61 25t25 61q0 35-36 59M64 75v64h64q13 0 22.5-9.5t9.5-23t-9.5-22.5t-22.5-9zm75 192q13 0 22.5-9.5t9.5-23t-9.5-22.5t-22.5-9H64v64z"></svg:path>`,
})
export class ZmdiFormatBoldIcon {
  readonly viewBox = input("0 0 232 384")
  readonly width = input("0.61em")
  readonly height = input("1em")
}
