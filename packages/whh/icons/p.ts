import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[whhPIcon],svg[whh-p-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M512 640H128v320q0 27-19 45.5T63.5 1024t-45-18.5T0 960V64q0-26 18.5-45T64 0h448q106 0 181 75t75 181v128q0 106-75 181t-181 75m128-384q0-53-37.5-90.5T512 128H128v384h384q53 0 90.5-37.5T640 384z"></svg:path>`,
})
export class WhhPIcon {
  readonly viewBox = input("0 0 768 1024")
  readonly width = input("0.75em")
  readonly height = input("1em")
}
