import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[flagXx4x3Icon],svg[flag-xx-4x3-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="#fff" fill-rule="evenodd" stroke="#adb5bd" stroke-width="1.1" d="M.5.5h638.9v478.9H.5z"></svg:path><svg:path fill="none" stroke="#adb5bd" stroke-width="1.1" d="m.5.5l639 479m0-479l-639 479"></svg:path>`,
})
export class FlagXx4x3Icon {
  readonly viewBox = input("0 0 640 480")
  readonly width = input("1.34em")
  readonly height = input("1em")
}
