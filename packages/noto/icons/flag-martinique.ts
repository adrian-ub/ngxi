import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[notoFlagMartiniqueIcon],svg[noto-flag-martinique-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="#009540" d="M4 34h120v30H4z"></svg:path><svg:path fill="#1D1D1B" d="M4 64h120v30H4z"></svg:path><svg:path fill="#E20613" d="M4 34v60l44.4-30z"></svg:path>`,
})
export class NotoFlagMartiniqueIcon {
  readonly viewBox = input("0 0 128 128")
  readonly width = input("1em")
  readonly height = input("1em")
}
