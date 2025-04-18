import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[whhDeliciousIcon],svg[whh-delicious-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M896.428 1024h-768q-53 0-90.5-37.5T.428 896V128q0-53 37.5-90.5t90.5-37.5h768q53 0 90.5 37.5t37.5 90.5v768q0 53-37.5 90.5t-90.5 37.5m64-896q0-27-18.5-45.5t-45.5-18.5h-384v448h-448v384q0 27 19 45.5t45 18.5h384V512h448z"></svg:path>`,
})
export class WhhDeliciousIcon {
  readonly viewBox = input("0 0 1025 1024")
  readonly width = input("1.01em")
  readonly height = input("1em")
}
