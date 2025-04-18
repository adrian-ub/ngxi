import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[carbonWarningSquareFilledIcon],svg[carbon-warning-square-filled-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M26.002 4H5.998A2 2 0 0 0 4 5.998v20.004A2 2 0 0 0 5.998 28h20.004A2 2 0 0 0 28 26.002V5.998A2 2 0 0 0 26.002 4M14.875 8h2.25v10h-2.25ZM16 24a1.5 1.5 0 1 1 1.5-1.5A1.5 1.5 0 0 1 16 24"></svg:path><svg:path fill="none" d="M14.875 8h2.25v10h-2.25ZM16 24a1.5 1.5 0 1 1 1.5-1.5A1.5 1.5 0 0 1 16 24"></svg:path>`,
})
export class CarbonWarningSquareFilledIcon {
  readonly viewBox = input("0 0 32 32")
  readonly width = input("1em")
  readonly height = input("1em")
}
