import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[zmdiFormatClearIcon],svg[zmdi-format-clear-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="m27 43l6 5l308 309l-27 27l-121-121l-33 78H96l53-123L0 70zm58 0h299v64H260l-34 80l-45-44l16-36h-52L85 47z"></svg:path>`,
})
export class ZmdiFormatClearIcon {
  readonly viewBox = input("0 0 384 384")
  readonly width = input("1em")
  readonly height = input("1em")
}
