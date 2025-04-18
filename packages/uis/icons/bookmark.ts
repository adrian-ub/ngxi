import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[uisBookmarkIcon],svg[uis-bookmark-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M16 2H8C6.3 2 5 3.3 5 5v16c0 .2 0 .3.1.5c.3.5.9.6 1.4.4l5.5-3.2l5.5 3.2c.2.1.3.1.5.1c.6 0 1-.4 1-1V5c0-1.7-1.3-3-3-3"></svg:path>`,
})
export class UisBookmarkIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
