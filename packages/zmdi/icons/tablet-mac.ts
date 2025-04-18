import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[zmdiTabletMacIcon],svg[zmdi-tablet-mac-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M352 0q22 0 37.5 15.5T405 53v406q0 22-15.5 37.5T352 512H53q-22 0-37.5-15.5T0 459V53q0-22 15.5-37.5T53 0zM202.5 491q13.5 0 23-9.5t9.5-23t-9.5-22.5t-23-9t-22.5 9t-9 22.5t9 23t22.5 9.5M363 405V64H43v341z"></svg:path>`,
})
export class ZmdiTabletMacIcon {
  readonly viewBox = input("0 0 408 512")
  readonly width = input("0.8em")
  readonly height = input("1em")
}
