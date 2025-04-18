import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[bxBxsRegisteredIcon],svg[bx-bxs-registered-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path d="M13 9h-3v2h3a1 1 0 0 0 0-2z" fill="currentColor"></svg:path><svg:path d="M12 2a10 10 0 1 0 10 10A10 10 0 0 0 12 2zm2.13 15l-2.67-4H10v4H8V7h5a3 3 0 0 1 .79 5.88L16.54 17z" fill="currentColor"></svg:path>`,
})
export class BxBxsRegisteredIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
