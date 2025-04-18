import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[laPauseIcon],svg[la-pause-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M10 6v20h2V6zm10 0v20h2V6z"></svg:path>`,
})
export class LaPauseIcon {
  readonly viewBox = input("0 0 32 32")
  readonly width = input("1em")
  readonly height = input("1em")
}
