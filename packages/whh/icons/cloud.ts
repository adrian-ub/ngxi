import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[whhCloudIcon],svg[whh-cloud-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M768 768H224q-93 0-158.5-65.5T0 544q0-57 27-106t73-80q34 69 96.5 116.5T336 537q-66-38-105-104t-39-145q0-119 84.5-203.5T480 0q88 0 159.5 48T744 174q-68 22-118 73.5T556 369q35-52 91-82.5T768 256q106 0 181 75t75 181t-75 181t-181 75"></svg:path>`,
})
export class WhhCloudIcon {
  readonly viewBox = input("0 0 1024 768")
  readonly width = input("1.34em")
  readonly height = input("1em")
}
