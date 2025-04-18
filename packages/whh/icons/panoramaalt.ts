import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[whhPanoramaaltIcon],svg[whh-panoramaalt-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M994.69 766q-129-63-226-91V94q97-28 226-90q12-7 21-1.5t9 18.5v727q0 14-9 19t-21-1m-290-106q-92-19-192-19q-99 0-192 19V109q93 20 192 20q100 0 192-19zm-704 88V21q0-13 9-18.5t21 1.5q129 62 226 90v581q-97 28-226 91q-12 6-21 1t-9-19"></svg:path>`,
})
export class WhhPanoramaaltIcon {
  readonly viewBox = input("0 0 1025 770")
  readonly width = input("1.34em")
  readonly height = input("1em")
}
