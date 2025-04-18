import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[ixAlignObjectWidthIcon],svg[ix-align-object-width-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M42.667 127.999v21.333H64v-21.333h384v21.333h21.333v-64H448v21.333H64V85.332H42.667zm0 64h426.666v234.666H42.667zm42.666 42.666v149.334h341.334V234.665z" clip-rule="evenodd"></svg:path>`,
})
export class IxAlignObjectWidthIcon {
  readonly viewBox = input("0 0 512 512")
  readonly width = input("1em")
  readonly height = input("1em")
}
