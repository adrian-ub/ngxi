import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[carbonAutoScrollIcon],svg[carbon-auto-scroll-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path d="M12 16a4 4 0 1 0 4-4a4 4 0 0 0-4 4zm6 0a2 2 0 1 1-2-2a2 2 0 0 1 2 2z" fill="currentColor"></svg:path><svg:path d="M16 27.17l-5.6-5.59L9 23l7 7l7-7l-1.41-1.41L16 27.17z" fill="currentColor"></svg:path><svg:path d="M16 4.83l5.58 5.57L23 9l-7-7l-7 7l1.41 1.41L16 4.83z" fill="currentColor"></svg:path>`,
})
export class CarbonAutoScrollIcon {
  readonly viewBox = input("0 0 32 32")
  readonly width = input("1em")
  readonly height = input("1em")
}
