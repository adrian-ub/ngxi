import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[zmdiFastForwardIcon],svg[zmdi-fast-forward-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M0 320V64l181 128zM192 64l181 128l-181 128z"></svg:path>`,
})
export class ZmdiFastForwardIcon {
  readonly viewBox = input("0 0 376 384")
  readonly width = input("0.98em")
  readonly height = input("1em")
}
