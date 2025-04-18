import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[whhRIcon],svg[whh-r-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M681 576q41 36 64 86t23 106v192q0 27-18.5 45.5t-45 18.5t-45.5-18.5t-19-45.5V768q0-53-37.5-90.5T512 640H128v320q0 27-19 45.5T63.5 1024t-45-18.5T0 960V64q0-26 18.5-45T64 0h448q106 0 181 75t75 181v128q0 56-23 106t-64 86m-41-320q0-53-37.5-90.5T512 128H128v384h384q53 0 90.5-37.5T640 384z"></svg:path>`,
})
export class WhhRIcon {
  readonly viewBox = input("0 0 768 1024")
  readonly width = input("0.75em")
  readonly height = input("1em")
}
