import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[whhCirclerecordemptyIcon],svg[whh-circlerecordempty-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M512 1024q-104 0-199-40.5t-163.5-109T40.5 711T0 512t40.5-199t109-163.5T313 40.5T512 0t199 40.5t163.5 109t109 163.5t40.5 199t-40.5 199t-109 163.5t-163.5 109t-199 40.5m0-960q-91 0-174 35.5T195 195T99.5 338T64 512.5t35.5 174T195 829t143 95.5T512 960t174-35.5T829 829t95.5-142.5t35.5-174T924.5 338T829 195T686 99.5T512 64m0 704q-106 0-181-75t-75-181t75-181t181-75t181 75t75 181t-75 181t-181 75"></svg:path>`,
})
export class WhhCirclerecordemptyIcon {
  readonly viewBox = input("0 0 1024 1024")
  readonly width = input("1em")
  readonly height = input("1em")
}
