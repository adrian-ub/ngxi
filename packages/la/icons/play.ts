import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[laPlayIcon],svg[la-play-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M9 5.156v21.688l1.531-1L25.844 16L10.53 6.156zm2 3.657L22.156 16L11 23.188z"></svg:path>`,
})
export class LaPlayIcon {
  readonly viewBox = input("0 0 32 32")
  readonly width = input("1em")
  readonly height = input("1em")
}
