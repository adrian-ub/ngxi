import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[zmdiFormatIndentIncreaseIcon],svg[zmdi-format-indent-increase-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M0 384v-43h384v43zm0-277l85 85l-85 85zm171 192v-43h213v43zM0 0h384v43H0zm171 128V85h213v43zm0 85v-42h213v42z"></svg:path>`,
})
export class ZmdiFormatIndentIncreaseIcon {
  readonly viewBox = input("0 0 384 384")
  readonly width = input("1em")
  readonly height = input("1em")
}
