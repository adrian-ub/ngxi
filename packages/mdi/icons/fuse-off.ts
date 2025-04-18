import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[mdiFuseOffIcon],svg[mdi-fuse-off-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M15 11.8L10.2 7H15zM16 6V2c0-.55-.45-1-1-1H8c-.55 0-1 .45-1 1v1.8L9.2 6zM2.39 1.73L1.11 3L8 9.89V17h7.11l5.73 5.73l1.27-1.27zM7 22c0 .55.45 1 1 1h7c.55 0 1-.45 1-1v-4H7z"></svg:path>`,
})
export class MdiFuseOffIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
