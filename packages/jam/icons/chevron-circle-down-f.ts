import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[jamChevronCircleDownFIcon],svg[jam-chevron-circle-down-f-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M10 11.828L6.464 8.293A1 1 0 0 0 5.05 9.707l4.243 4.243a.997.997 0 0 0 1.414 0l4.243-4.243a1 1 0 1 0-1.414-1.414zM10 20C4.477 20 0 15.523 0 10S4.477 0 10 0s10 4.477 10 10s-4.477 10-10 10"></svg:path>`,
})
export class JamChevronCircleDownFIcon {
  readonly viewBox = input("-2 -2 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
