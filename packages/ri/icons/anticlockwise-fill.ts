import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[riAnticlockwiseFillIcon],svg[ri-anticlockwise-fill-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M6 10h3l-4 5l-4-5h3V8a5 5 0 0 1 5-5h4v2H9a3 3 0 0 0-3 3zm5-1h10a1 1 0 0 1 1 1v10a1 1 0 0 1-1 1H11a1 1 0 0 1-1-1V10a1 1 0 0 1 1-1"></svg:path>`,
})
export class RiAnticlockwiseFillIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
