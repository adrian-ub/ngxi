import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[faFileIcon],svg[fa-file-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M1024 512V40q22 14 36 28l408 408q14 14 28 36zm-128 32q0 40 28 68t68 28h544v1056q0 40-28 68t-68 28H96q-40 0-68-28t-28-68V96q0-40 28-68T96 0h800z"></svg:path>`,
})
export class FaFileIcon {
  readonly viewBox = input("0 0 1536 1792")
  readonly width = input("0.86em")
  readonly height = input("1em")
}
