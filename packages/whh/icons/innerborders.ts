import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[whhInnerbordersIcon],svg[whh-innerborders-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M896 960v-64h64v64zm0-192h64v64h-64zm0-128h64v64h-64zm0-128H512v384h64v64H384v-64h64V512H64v64H0V384h64v64h384V64h-64V0h192v64h-64v384h384v-64h64v192h-64zm0-256h64v64h-64zm0-128h64v64h-64zm0-128h64v64h-64zM768 0h64v64h-64zM640 0h64v64h-64zM256 0h64v64h-64zM128 0h64v64h-64zM0 256h64v64H0zm0-128h64v64H0zM0 0h64v64H0zm64 704H0v-64h64zm0 128H0v-64h64zm0 128H0v-64h64zm128 0h-64v-64h64zm128 0h-64v-64h64zm384 0h-64v-64h64zm128 0h-64v-64h64z"></svg:path>`,
})
export class WhhInnerbordersIcon {
  readonly viewBox = input("0 0 960 960")
  readonly width = input("1em")
  readonly height = input("1em")
}
