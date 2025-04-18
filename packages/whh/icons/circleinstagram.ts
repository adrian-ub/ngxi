import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[whhCircleinstagramIcon],svg[whh-circleinstagram-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M512 1024q-104 0-199-40.5t-163.5-109T40.5 711T0 512t40.5-199t109-163.5T313 40.5T512 0t199 40.5t163.5 109t109 163.5t40.5 199t-40.5 199t-109 163.5t-163.5 109t-199 40.5m256-704q0-26-18.5-45T704 256H320q-26 0-45 19t-19 45v64h114q58-64 142-64t142 64h114zM384 512q0 53 37.5 90.5T512 640t90.5-37.5T640 512t-37.5-90.5T512 384t-90.5 37.5T384 512m384-64h-76q12 33 12 64q0 80-56 136t-136 56t-136-56t-56-136q0-31 12-64h-76v256q0 27 18.5 45.5T320 768h384q27 0 45.5-18.5T768 704z"></svg:path>`,
})
export class WhhCircleinstagramIcon {
  readonly viewBox = input("0 0 1024 1024")
  readonly width = input("1em")
  readonly height = input("1em")
}
