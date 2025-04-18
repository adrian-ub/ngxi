import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[whhPingpongIcon],svg[whh-pingpong-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M865 1020L602 713q-68 44-145.5 53.5t-157.5-20T152 650Q72 570 31.5 463t-29-211t78-171t171-78.5t211.5 29T649 152q68 67 97.5 147t20 157.5T714 602l308 262q10 10-23.5 55T922 999t-57 21M605 190q-66-66-155-100T274 66t-142.5 65.5T66 274t24 176t100 155q64 64 142 87l360-360q-23-78-87-142"></svg:path>`,
})
export class WhhPingpongIcon {
  readonly viewBox = input("0 0 1025 1024")
  readonly width = input("1.01em")
  readonly height = input("1em")
}
