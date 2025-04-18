import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[whhServerIcon],svg[whh-server-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M576 1024H64q-26 0-45-18.5T0 960V64q0-27 19-45.5T64 0h512q27 0 45.5 18.5T640 64v896q0 27-18.5 45.5T576 1024M320.5 896q26.5 0 45-18.5t18.5-45t-18.5-45.5t-45-19t-45.5 19t-19 45.5t19 45t45.5 18.5M576 96q0-13-9.5-22.5T544 64H96q-13 0-22.5 9.5T64 96v64q0 13 9.5 22.5T96 192h448q13 0 22.5-9.5T576 160zm0 192q0-13-9.5-22.5T544 256H96q-13 0-22.5 9.5T64 288v64q0 13 9.5 22.5T96 384h448q13 0 22.5-9.5T576 352zm0 192q0-13-9.5-22.5T544 448H96q-13 0-22.5 9.5T64 480v64q0 13 9.5 22.5T96 576h448q13 0 22.5-9.5T576 544z"></svg:path>`,
})
export class WhhServerIcon {
  readonly viewBox = input("0 0 640 1024")
  readonly width = input("0.63em")
  readonly height = input("1em")
}
