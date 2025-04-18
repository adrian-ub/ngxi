import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[fontistoLeftAlignIcon],svg[fontisto-left-align-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M1.334 2.666h26.665l.037.001a1.334 1.334 0 1 0 0-2.668L27.997 0h.002H1.334a1.334 1.334 0 0 0-.002 2.666zm0 5.333h19.555l.037.001a1.334 1.334 0 1 0 0-2.668l-.039.001h.002H1.334a1.334 1.334 0 0 0-.002 2.666zm26.665 2.668H1.334a1.334 1.334 0 0 0-.002 2.666h26.667a1.334 1.334 0 0 0 .002-2.666zm0 10.666H1.334a1.334 1.334 0 0 0-.002 2.666h26.667a1.334 1.334 0 0 0 .002-2.666zM1.334 18.666h19.555A1.334 1.334 0 0 0 20.891 16H1.334a1.334 1.334 0 0 0-.002 2.666z"></svg:path>`,
})
export class FontistoLeftAlignIcon {
  readonly viewBox = input("0 0 29 24")
  readonly width = input("1.21em")
  readonly height = input("1em")
}
