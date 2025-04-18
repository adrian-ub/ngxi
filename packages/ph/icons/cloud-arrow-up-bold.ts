import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[phCloudArrowUpBoldIcon],svg[ph-cloud-arrow-up-bold-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M196.49 151.51a12 12 0 0 1-17 17L168 157v51a12 12 0 0 1-24 0v-51l-11.51 11.52a12 12 0 1 1-17-17l32-32a12 12 0 0 1 17 0ZM160 36a92.08 92.08 0 0 0-81 48.37A68 68 0 1 0 72 220h28a12 12 0 0 0 0-24H72a44 44 0 0 1-1.81-87.95A91.7 91.7 0 0 0 68 128a12 12 0 0 0 24 0a68 68 0 1 1 132.6 21.29a12 12 0 1 0 22.8 7.51A92.06 92.06 0 0 0 160 36"></svg:path>`,
})
export class PhCloudArrowUpBoldIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}
