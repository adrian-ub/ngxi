import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[zmdiArrowsIcon],svg[zmdi-arrows-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M192 176v-64h-64L235 5l106 107h-64v64zm-21 21v86h-64v64L0 240l107-107v64zm298 43L363 347v-64h-64v-86h64v-64zm-192 64v64h64L235 475L128 368h64v-64z"></svg:path>`,
})
export class ZmdiArrowsIcon {
  readonly viewBox = input("0 0 472 480")
  readonly width = input("0.99em")
  readonly height = input("1em")
}
