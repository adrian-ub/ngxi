import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[whhPixelshovelIcon],svg[whh-pixelshovel-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M960 256V64h64v192zM640 128V64h128v64zm-64 64v-64h64v64zm64 192h64v64h-64v64h-64v64h-64v64h-64v64h-64v64h-64v64h-64v64h-64v128H0V832h128v-64h64v-64h64v-64h64v-64h64v-64h64v-64h64v-64h64v-64h64zM128 896H64v64h64zm768-512v64h-64v-64zm64-128v128h-64V256zM832 512H704v-64h128zM512 320V192h64v128zM768 0h192v64H768z"></svg:path>`,
})
export class WhhPixelshovelIcon {
  readonly viewBox = input("0 0 1024 1024")
  readonly width = input("1em")
  readonly height = input("1em")
}
