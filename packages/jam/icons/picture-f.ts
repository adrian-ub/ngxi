import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[jamPictureFIcon],svg[jam-picture-f-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="m20 10.536l-4.416-4.44a3 3 0 0 0-4.69.582L5.072 16H3a3 3 0 0 1-3-3V3a3 3 0 0 1 3-3h14a3 3 0 0 1 3 3zm-.011 2.724A3 3 0 0 1 17 16H7.64l4.969-8.293a1 1 0 0 1 1.563-.195zM6 9a3 3 0 1 0 0-6a3 3 0 0 0 0 6"></svg:path>`,
})
export class JamPictureFIcon {
  readonly viewBox = input("-2 -4 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
