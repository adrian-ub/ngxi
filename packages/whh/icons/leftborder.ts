import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[whhLeftborderIcon],svg[whh-leftborder-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M896 960v-64h64v64zm0-192h64v64h-64zm0-128h64v64h-64zm0-128h64v64h-64zm-64-64h64v64h-64zm128-64v64h-64v-64zm-64-128h64v64h-64zm0-128h64v64h-64zm0-128h64v64h-64zM768 0h64v64h-64zm0 512h-64v-64h64zM640 0h64v64h-64zm0 512h-64v-64h64zM448 128V64h64v64zM384 0h64v64h-64zm128 0h64v64h-64zM384 512h-64v-64h64zM256 0h64v64h-64zm0 512h-64v-64h64zM128 0h64v64h-64zm0 512H64v448H0V0h64v448h64zm64 448h-64v-64h64zm128 0h-64v-64h64zm192-192h-64v-64h64zm0-128h-64v-64h64zm0-128h-64v-64h64zm-64-320h64v64h-64zm64 192h-64v-64h64zm0 448v64h-64v-64zm64 128h-64v-64h64zm-128 0h-64v-64h64zm256 0h-64v-64h64zm128 0h-64v-64h64z"></svg:path>`,
})
export class WhhLeftborderIcon {
  readonly viewBox = input("0 0 960 960")
  readonly width = input("1em")
  readonly height = input("1em")
}
