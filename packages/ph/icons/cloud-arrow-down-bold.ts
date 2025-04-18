import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[phCloudArrowDownBoldIcon],svg[ph-cloud-arrow-down-bold-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M192.49 167.51a12 12 0 0 1 0 17l-32 32a12 12 0 0 1-17 0l-32-32a12 12 0 1 1 17-17L140 179v-51a12 12 0 0 1 24 0v51l11.51-11.52a12 12 0 0 1 16.98.03M160 36a92.08 92.08 0 0 0-81 48.37A68 68 0 1 0 72 220h12a12 12 0 0 0 0-24H72a44 44 0 0 1-1.81-87.95A91.7 91.7 0 0 0 68 128a12 12 0 0 0 24 0a68 68 0 0 1 136 0a67.3 67.3 0 0 1-7.25 30.59a12 12 0 1 0 21.42 10.82A91.1 91.1 0 0 0 252 128a92.1 92.1 0 0 0-92-92"></svg:path>`,
})
export class PhCloudArrowDownBoldIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}
