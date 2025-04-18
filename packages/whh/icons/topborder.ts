import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[whhTopborderIcon],svg[whh-topborder-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M896 960v-64h64v64zm0-192h64v64h-64zm0-128h64v64h-64zm0-128h64v64h-64zm-64-64h64v64h-64zm128-64v64h-64v-64zm-64-128h64v64h-64zm0-128h64v64h-64zM512 64v64h-64V64H0V0h960v64zM64 192H0v-64h64zm0 128H0v-64h64zm0 128H0v-64h64zm64 64H64v-64h64zM0 576v-64h64v64zm64 128H0v-64h64zm0 128H0v-64h64zm0 128H0v-64h64zm128 0h-64v-64h64zm64-448h-64v-64h64zm64-64h64v64h-64zm0 512h-64v-64h64zm192-192h-64v-64h64zm0-128h-64v-64h64zm0-128h-64v-64h64zm-64-320h64v64h-64zm64 192h-64v-64h64zm64 64h64v64h-64zm-64 384v64h-64v-64zm64 128h-64v-64h64zm-128 0h-64v-64h64zm256-512h64v64h-64zm0 512h-64v-64h64zm128 0h-64v-64h64z"></svg:path>`,
})
export class WhhTopborderIcon {
  readonly viewBox = input("0 0 960 960")
  readonly width = input("1em")
  readonly height = input("1em")
}
