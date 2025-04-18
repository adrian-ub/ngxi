import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[whhPlaneIcon],svg[whh-plane-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M1013.617 769q5 0 8 4.5t3 11.5v32q0 7-3 11.5t-8 4.5l-129 52l-52 129q0 5-4.5 8t-11.5 3h-32q-7 0-11.5-3t-4.5-8V900l-284-283l-100 376q0 13-9.5 22.5t-22.5 9.5h-64q-14 0-23-9.5t-9-22.5V389l-180-179q-25-26-56.5-104.5T7.117 8t97.5 12.5t104 57.5l180 179h604q13 0 22.5 9.5t9.5 22.5v64q0 13-9.5 22.5t-22.5 9.5l-376 100l285 284z"></svg:path>`,
})
export class WhhPlaneIcon {
  readonly viewBox = input("0 0 1025 1025")
  readonly width = input("1em")
  readonly height = input("1em")
}
