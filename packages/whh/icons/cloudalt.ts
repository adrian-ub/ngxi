import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[whhCloudaltIcon],svg[whh-cloudalt-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M768 768H224q-93 0-158.5-65.5T0 544q0-84 55-147t137-74v-3q0-87 43-160.5T351.5 43T512 0q100 0 180.5 56T809 202q94 24 154.5 101.5T1024 480q0 111-74 193.5T768 768"></svg:path>`,
})
export class WhhCloudaltIcon {
  readonly viewBox = input("0 0 1024 768")
  readonly width = input("1.34em")
  readonly height = input("1em")
}
