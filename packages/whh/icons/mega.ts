import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[whhMegaIcon],svg[whh-mega-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M896.428 1024h-768q-53 0-90.5-37.5T.428 896V128q0-53 37.5-90.5t90.5-37.5h768q53 0 90.5 37.5t37.5 90.5v768q0 53-37.5 90.5t-90.5 37.5m0-832h-128l-256 256l-256-256h-128v640h128V384l192 192h128l192-192v448h128z"></svg:path>`,
})
export class WhhMegaIcon {
  readonly viewBox = input("0 0 1025 1024")
  readonly width = input("1.01em")
  readonly height = input("1em")
}
