import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[whhFourimagesIcon],svg[whh-fourimages-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M896.428 1024h-64V832h192v64q0 53-37.5 90.5t-90.5 37.5m-64-1024h64q53 0 90.5 37.5t37.5 90.5v512h-192zm-572 623q-4 7-5 19.5t0 20.5l1 9v128q0 13 9.5 22.5t22.5 9.5h352v192h-512q-53 0-90.5-37.5T.428 896V128q0-53 37.5-90.5t90.5-37.5h479zm206 17l174-311v311z"></svg:path>`,
})
export class WhhFourimagesIcon {
  readonly viewBox = input("0 0 1025 1024")
  readonly width = input("1.01em")
  readonly height = input("1em")
}
