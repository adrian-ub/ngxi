import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[twemojiFaceWithOpenMouthIcon],svg[twemoji-face-with-open-mouth-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="#FFCC4D" d="M36 18c0 9.941-8.059 18-18 18S0 27.941 0 18S8.059 0 18 0s18 8.059 18 18"></svg:path><svg:ellipse cx="18" cy="25" fill="#664500" rx="4" ry="5"></svg:ellipse><svg:ellipse cx="12" cy="13.5" fill="#664500" rx="2.5" ry="3.5"></svg:ellipse><svg:ellipse cx="24" cy="13.5" fill="#664500" rx="2.5" ry="3.5"></svg:ellipse>`,
})
export class TwemojiFaceWithOpenMouthIcon {
  readonly viewBox = input("0 0 36 36")
  readonly width = input("1em")
  readonly height = input("1em")
}
