import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[twemojiFaceWithoutMouthIcon],svg[twemoji-face-without-mouth-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="#FFCC4D" d="M36 18c0 9.941-8.059 18-18 18c-9.94 0-18-8.059-18-18C0 8.06 8.06 0 18 0c9.941 0 18 8.06 18 18"></svg:path><svg:ellipse cx="11.5" cy="16.5" fill="#664500" rx="2.5" ry="3.5"></svg:ellipse><svg:ellipse cx="24.5" cy="16.5" fill="#664500" rx="2.5" ry="3.5"></svg:ellipse>`,
})
export class TwemojiFaceWithoutMouthIcon {
  readonly viewBox = input("0 0 36 36")
  readonly width = input("1em")
  readonly height = input("1em")
}
