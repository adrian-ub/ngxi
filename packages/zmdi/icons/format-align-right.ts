import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[zmdiFormatAlignRightIcon],svg[zmdi-format-align-right-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M0 384v-43h384v43zm128-85v-43h256v43zM0 213v-42h384v42zm128-85V85h256v43zM0 0h384v43H0z"></svg:path>`,
})
export class ZmdiFormatAlignRightIcon {
  readonly viewBox = input("0 0 384 384")
  readonly width = input("1em")
  readonly height = input("1em")
}
