import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[twemojiHushedFaceIcon],svg[twemoji-hushed-face-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="#FFCC4D" d="M36 18c0 9.941-8.059 18-18 18S0 27.941 0 18S8.059 0 18 0s18 8.059 18 18"></svg:path><svg:ellipse cx="18" cy="25.5" fill="#664500" rx="3" ry="3.5"></svg:ellipse><svg:path fill="#664500" d="M31.001 11a1 1 0 0 1-.801-.4c-2.64-3.521-6.061-3.598-6.206-3.6a1 1 0 0 1-.991-1.005A.997.997 0 0 1 24 5c.184 0 4.537.05 7.8 4.4a1 1 0 0 1-.799 1.6M4.999 11A1 1 0 0 1 4.2 9.4C7.462 5.05 11.816 5 12 5a1 1 0 0 1 .004 2c-.155.002-3.568.086-6.204 3.6a1 1 0 0 1-.801.4"></svg:path><svg:ellipse cx="12" cy="14.5" fill="#664500" rx="2.5" ry="3.5"></svg:ellipse><svg:ellipse cx="24" cy="14.5" fill="#664500" rx="2.5" ry="3.5"></svg:ellipse>`,
})
export class TwemojiHushedFaceIcon {
  readonly viewBox = input("0 0 36 36")
  readonly width = input("1em")
  readonly height = input("1em")
}
