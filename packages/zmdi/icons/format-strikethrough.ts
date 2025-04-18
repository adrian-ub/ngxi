import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[zmdiFormatStrikethroughIcon],svg[zmdi-format-strikethrough-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M149 341v-64h86v64zM43 21h298v64H235v64h-86V85H43zM0 235v-43h384v43z"></svg:path>`,
})
export class ZmdiFormatStrikethroughIcon {
  readonly viewBox = input("0 0 384 384")
  readonly width = input("1em")
  readonly height = input("1em")
}
