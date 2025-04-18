import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[whhOuterbordersIcon],svg[whh-outerborders-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M0 960V0h960v960zm896-448h-64v-64h64V64H512v64h-64V64H64v384h64v64H64v384h384v-64h64v64h384zm-256 0h-64v-64h64zm128 0h-64v-64h64zM448 704h64v64h-64zm0-128h64v64h-64zm0-128h64v64h-64zm0-128h64v64h-64zm0-128h64v64h-64zM320 448h64v64h-64zm-128 0h64v64h-64z"></svg:path>`,
})
export class WhhOuterbordersIcon {
  readonly viewBox = input("0 0 960 960")
  readonly width = input("1em")
  readonly height = input("1em")
}
