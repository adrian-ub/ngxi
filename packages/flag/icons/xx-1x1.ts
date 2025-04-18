import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[flagXx1x1Icon],svg[flag-xx-1x1-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="#fff" fill-rule="evenodd" stroke="#adb5bd" d="M.5.5h511v511H.5z"></svg:path><svg:path fill="none" stroke="#adb5bd" d="m.5.5l511 511m0-511l-511 511"></svg:path>`,
})
export class FlagXx1x1Icon {
  readonly viewBox = input("0 0 512 512")
  readonly width = input("1em")
  readonly height = input("1em")
}
