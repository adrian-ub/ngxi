import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[whhVideoIcon],svg[whh-video-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M832 960v-64H192v64H0V0h192v64h640V0h192v960zM128 64H64v64h64zm0 128H64v64h64zm0 128H64v64h64zm0 128H64v64h64zm0 128H64v64h64zm0 128H64v64h64zm0 128H64v64h64zm704-704H192v704h640zm128-64h-64v64h64zm0 128h-64v64h64zm0 128h-64v64h64zm0 128h-64v64h64zm0 128h-64v64h64zm0 128h-64v64h64zm0 128h-64v64h64z"></svg:path>`,
})
export class WhhVideoIcon {
  readonly viewBox = input("0 0 1024 960")
  readonly width = input("1.07em")
  readonly height = input("1em")
}
