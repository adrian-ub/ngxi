import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[whhSquarebracketsIcon],svg[whh-squarebrackets-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M896.428 1024h-128q-26 0-45-19t-19-45.5t19-45t45-18.5h96q13 0 22.5-9.5t9.5-22.5V160q0-13-9.5-22.5t-22.5-9.5h-96q-26 0-45-18.5t-19-45t19-45.5t45-19h128q53 0 90.5 37.5t37.5 90.5v768q0 53-37.5 90.5t-90.5 37.5m-736-128h96q26 0 45 18.5t19 45t-19 45.5t-45 19h-128q-53 0-90.5-37.5T.428 896V128q0-53 37.5-90.5t90.5-37.5h128q26 0 45 19t19 45.5t-19 45t-45 18.5h-96q-13 0-22.5 9.5t-9.5 22.5v704q0 13 9.5 22.5t22.5 9.5"></svg:path>`,
})
export class WhhSquarebracketsIcon {
  readonly viewBox = input("0 0 1025 1024")
  readonly width = input("1.01em")
  readonly height = input("1em")
}
