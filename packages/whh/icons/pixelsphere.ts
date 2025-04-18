import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[whhPixelsphereIcon],svg[whh-pixelsphere-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M960 704v128h-64v64h-64v64H704v64H320v-64H192v-64h-64v-64H64V704H0V320h64V192h64v-64h64V64h128V0h384v64h128v64h64v64h64v128h64v384zM576 256h-64v-64H320v64h-64v64h64v64h192v-64h64zm192 128h-64v64h64zm64 320h-64v64h-64v64h64v-64h64z"></svg:path>`,
})
export class WhhPixelsphereIcon {
  readonly viewBox = input("0 0 1024 1024")
  readonly width = input("1em")
  readonly height = input("1em")
}
