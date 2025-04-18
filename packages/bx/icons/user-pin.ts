import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[bxUserPinIcon],svg[bx-user-pin-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M12 10c1.151 0 2-.848 2-2s-.849-2-2-2c-1.15 0-2 .848-2 2s.85 2 2 2m0 1c-2.209 0-4 1.612-4 3.6v.386h8V14.6c0-1.988-1.791-3.6-4-3.6"></svg:path><svg:path fill="currentColor" d="M19 2H5c-1.103 0-2 .897-2 2v13c0 1.103.897 2 2 2h4l3 3l3-3h4c1.103 0 2-.897 2-2V4c0-1.103-.897-2-2-2m-5 15l-2 2l-2-2H5V4h14l.002 13z"></svg:path>`,
})
export class BxUserPinIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
