import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[whhPixelheartIcon],svg[whh-pixelheart-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M896 448v128h-64v64h-64v-64h-64v64h-64v64h-64v64h-64v64h64v64h-64v64h-64v-64h-64v-64h-64v-64h-64v-64h-64v-64h-64v-64H64V448H0V128h64V64h64V0h192v64h64v64h64v64h64v-64h64V64h64V0h192v64h64v64h64v320zM256 64h-64v64h-64v64H64v64h64v-64h64v-64h64zm512 0h-64v64h-64v64h-64v64h64v-64h64v-64h64zM640 768v64h-64v-64zm64-64v64h-64v-64zm64-64v64h-64v-64z"></svg:path>`,
})
export class WhhPixelheartIcon {
  readonly viewBox = input("0 0 960 960")
  readonly width = input("1em")
  readonly height = input("1em")
}
