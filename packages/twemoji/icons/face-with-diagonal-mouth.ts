import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[twemojiFaceWithDiagonalMouthIcon],svg[twemoji-face-with-diagonal-mouth-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="#FFCC4D" d="M36 18c0 9.941-8.059 18-18 18S0 27.941 0 18S8.059 0 18 0s18 8.059 18 18"></svg:path><svg:ellipse cx="11.5" cy="15.5" fill="#65471B" rx="2.5" ry="3.5"></svg:ellipse><svg:ellipse cx="24.5" cy="15.5" fill="#65471B" rx="2.5" ry="3.5"></svg:ellipse><svg:path fill="#65471B" d="m11.209 27.978l14-3a1.001 1.001 0 0 0-.419-1.957l-14 3a1.001 1.001 0 0 0 .419 1.957"></svg:path>`,
})
export class TwemojiFaceWithDiagonalMouthIcon {
  readonly viewBox = input("0 0 36 36")
  readonly width = input("1em")
  readonly height = input("1em")
}
