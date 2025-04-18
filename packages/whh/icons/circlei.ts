import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[whhCircleiIcon],svg[whh-circlei-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M512 1024q-104 0-199-40.5t-163.5-109T40.5 711T0 512t40.5-199t109-163.5T313 40.5T512 0t199 40.5t163.5 109t109 163.5t40.5 199t-40.5 199t-109 163.5t-163.5 109t-199 40.5m32-704q13 0 22.5-9.5T576 288t-9.5-22.5T544 256H416q-13 0-22.5 9.5T384 288t9.5 22.5T416 320h32v384h-32q-13 0-22.5 9.5T384 736t9.5 22.5T416 768h128q13 0 22.5-9.5T576 736t-9.5-22.5T544 704h-32V320z"></svg:path>`,
})
export class WhhCircleiIcon {
  readonly viewBox = input("0 0 1024 1024")
  readonly width = input("1em")
  readonly height = input("1em")
}
