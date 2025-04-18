import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[bxStopIcon],svg[bx-stop-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M7 7h10v10H7z"></svg:path>`,
})
export class BxStopIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
