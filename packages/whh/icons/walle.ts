import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[whhWalleIcon],svg[whh-walle-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M512 1024q-139 0-257-68.5T68.5 769T0 512q0-104 40.5-199t109-163.5T313 40.5T512 0t199 40.5t163.5 109t109 163.5t40.5 199t-40.5 199t-109 163.5t-163.5 109t-199 40.5m320-384H352q-13 0-22.5-9.5T320 608t9.5-22.5T352 576h416V448H352q-13 0-22.5-9.5T320 416t9.5-22.5T352 384h480V256H320q-53 0-90.5 37.5T192 384v256q0 53 37.5 90.5T320 768h512z"></svg:path>`,
})
export class WhhWalleIcon {
  readonly viewBox = input("0 0 1024 1024")
  readonly width = input("1em")
  readonly height = input("1em")
}
