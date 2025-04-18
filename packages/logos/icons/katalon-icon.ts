import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[logosKatalonIconIcon],svg[logos-katalon-icon-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="#19D89F" d="M256 261.407H127.998v130.725H256z"></svg:path><svg:path d="M128.001 0L0 130.725v130.726h128.001l127.958-130.726V0z"></svg:path>`,
})
export class LogosKatalonIconIcon {
  readonly viewBox = input("0 0 256 393")
  readonly width = input("0.66em")
  readonly height = input("1em")
}
