import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[jamHeartFIcon],svg[jam-heart-f-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="m9.293 1.55l.707.708l.707-.707a5 5 0 1 1 7.071 7.071l-7.07 7.071a1 1 0 0 1-1.415 0L2.222 8.622a5 5 0 1 1 7.07-7.071z"></svg:path>`,
})
export class JamHeartFIcon {
  readonly viewBox = input("-2 -4 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
