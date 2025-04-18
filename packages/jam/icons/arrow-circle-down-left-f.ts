import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[jamArrowCircleDownLeftFIcon],svg[jam-arrow-circle-down-left-f-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M6.172 12.828a.997.997 0 0 0 1 1h6a1 1 0 1 0 0-2H9.586l3.95-3.95a1 1 0 1 0-1.415-1.414l-3.95 3.95V6.828a1 1 0 1 0-2 0zM10 20C4.477 20 0 15.523 0 10S4.477 0 10 0s10 4.477 10 10s-4.477 10-10 10"></svg:path>`,
})
export class JamArrowCircleDownLeftFIcon {
  readonly viewBox = input("-2 -2 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
