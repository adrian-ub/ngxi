import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[zmdiFormatAlignCenterIcon],svg[zmdi-format-align-center-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M85 256h214v43H85zM0 384v-43h384v43zm0-171v-42h384v42zM85 85h214v43H85zM0 0h384v43H0z"></svg:path>`,
})
export class ZmdiFormatAlignCenterIcon {
  readonly viewBox = input("0 0 384 384")
  readonly width = input("1em")
  readonly height = input("1em")
}
