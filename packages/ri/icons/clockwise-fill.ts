import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[riClockwiseFillIcon],svg[ri-clockwise-fill-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M20 10h3l-4 5l-4-5h3V8a3 3 0 0 0-3-3h-4V3h4a5 5 0 0 1 5 5zm-7-1a1 1 0 0 1 1 1v10a1 1 0 0 1-1 1H3a1 1 0 0 1-1-1V10a1 1 0 0 1 1-1z"></svg:path>`,
})
export class RiClockwiseFillIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
