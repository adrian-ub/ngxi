import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[zmdiFormatAlignJustifyIcon],svg[zmdi-format-align-justify-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M0 384v-43h384v43zm0-85v-43h384v43zm0-86v-42h384v42zm0-85V85h384v43zM0 0h384v43H0z"></svg:path>`,
})
export class ZmdiFormatAlignJustifyIcon {
  readonly viewBox = input("0 0 384 384")
  readonly width = input("1em")
  readonly height = input("1em")
}
