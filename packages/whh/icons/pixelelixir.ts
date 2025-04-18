import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[whhPixelelixirIcon],svg[whh-pixelelixir-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M704 832v64h-64v64h-64v64H192v-64h-64v-64H64v-64h64v64h64v-64h64v64h64v64h64v-64h-64V576h64V384h-64v-64h64v-64h-64v-64h64V64h-64V0h128v64h64v128h-64v64h64v64h-64v64h64v64h64v64h64v64h64v64h64v192zm-64-128h-64v128h-64v64h64v-64h64zM320 576h-64v-64h-64v-64h64v-64h64zm-192 0v64H64v-64zv-64h64v64zm64 256h-64V640h64zm0-192v-64h64v64zM0 832V640h64v192zm256-512v-64h64v64zm-64-128h64v64h-64zm64-128h64v128h-64zm320 128v64h-64v-64z"></svg:path>`,
})
export class WhhPixelelixirIcon {
  readonly viewBox = input("0 0 768 1024")
  readonly width = input("0.75em")
  readonly height = input("1em")
}
