import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[whhCloudaltprivateIcon],svg[whh-cloudaltprivate-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M768 766v2H224q-93 0-158.5-65.5T0 544q0-84 55-147t137-74v-3q0-87 43-160.5T351.5 43T512 0q100 0 180.5 56T809 202q94 24 154.5 101.5T1024 480q0 111-73.5 192.5T768 766M640 384q0-53-37.5-90.5T512 256t-90.5 37.5T384 384v224q0 13 9.5 22.5T416 640h192q13 0 22.5-9.5T640 608zm-192 64v-64q0-27 19-45.5t45.5-18.5t45 18.5T576 384v64z"></svg:path>`,
})
export class WhhCloudaltprivateIcon {
  readonly viewBox = input("0 0 1024 768")
  readonly width = input("1.34em")
  readonly height = input("1em")
}
