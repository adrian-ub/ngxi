import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[bxPauseIcon],svg[bx-pause-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M8 7h3v10H8zm5 0h3v10h-3z"></svg:path>`,
})
export class BxPauseIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
