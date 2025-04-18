import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[zmdiMailSendIcon],svg[zmdi-mail-send-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M0 384V235l320-43L0 149V0l448 192z"></svg:path>`,
})
export class ZmdiMailSendIcon {
  readonly viewBox = input("0 0 448 384")
  readonly width = input("1.17em")
  readonly height = input("1em")
}
