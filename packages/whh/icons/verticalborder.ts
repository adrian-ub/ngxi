import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[whhVerticalborderIcon],svg[whh-verticalborder-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M896 960v-64h64v64zm0-192h64v64h-64zm0-128h64v64h-64zm0-128h64v64h-64zm-64-64h64v64h-64zm128-64v64h-64v-64zm-64-128h64v64h-64zm0-128h64v64h-64zm0-128h64v64h-64zM768 0h64v64h-64zm0 512h-64v-64h64zM640 0h64v64h-64zm0 512h-64v-64h64zm-128-64v448h64v64H384v-64h64V64h-64V0h192v64h-64zm-128 64h-64v-64h64zM256 0h64v64h-64zm0 512h-64v-64h64zM128 0h64v64h-64zm0 512H64v-64h64zM0 576v-64h64v64zm0-192h64v64H0zm0-128h64v64H0zm0-128h64v64H0zM0 0h64v64H0zm64 704H0v-64h64zm0 128H0v-64h64zm0 128H0v-64h64zm128-64v64h-64v-64zm128 64h-64v-64h64zm384 0h-64v-64h64zm128 0h-64v-64h64z"></svg:path>`,
})
export class WhhVerticalborderIcon {
  readonly viewBox = input("0 0 960 960")
  readonly width = input("1em")
  readonly height = input("1em")
}
