import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[zmdiFormatAlignLeftIcon],svg[zmdi-format-align-left-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M256 256v43H0v-43zm0-171v43H0V85zM0 213v-42h384v42zm0 171v-43h384v43zM0 0h384v43H0z"></svg:path>`,
})
export class ZmdiFormatAlignLeftIcon {
  readonly viewBox = input("0 0 384 384")
  readonly width = input("1em")
  readonly height = input("1em")
}
