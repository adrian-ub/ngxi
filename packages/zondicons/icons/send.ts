import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[zondiconsSendIcon],svg[zondicons-send-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="m0 0l20 10L0 20zm0 8v4l10-2z"></svg:path>`,
})
export class ZondiconsSendIcon {
  readonly viewBox = input("0 0 20 20")
  readonly width = input("1em")
  readonly height = input("1em")
}
