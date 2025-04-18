import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[whhPixelpickaxeIcon],svg[whh-pixelpickaxe-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M960 640V384h64v256zm-64-320h64v64h-64zm-64-64h-64v-64h-64v-64h128V64h128v128h-64v128h-64zM640 64h64v64h-64zm-64 128H384v-64h192zm64 64h-64v-64h64zm64 64h64v64h-64v64h-64v64h-64v64h-64v64h-64v64h-64v64h-64v64h-64v64h-64v128H0V832h128v-64h64v-64h64v-64h64v-64h64v-64h64v-64h64v-64h64v-64h64v-64h64zM128 896H64v64h64zm704-448h-64v-64h64zm64 192h-64V448h64zm64 64h-64v-64h64zM320 128V64h64v64zM384 0h256v64H384z"></svg:path>`,
})
export class WhhPixelpickaxeIcon {
  readonly viewBox = input("0 0 1024 1024")
  readonly width = input("1em")
  readonly height = input("1em")
}
