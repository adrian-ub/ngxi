import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[phCloudXBoldIcon],svg[ph-cloud-x-bold-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M160 36a92.09 92.09 0 0 0-81 48.36A68 68 0 1 0 72 220h88a92 92 0 0 0 0-184m0 160H72a44 44 0 0 1-1.82-88A92 92 0 0 0 68 128a12 12 0 0 0 24 0a68 68 0 1 1 68 68m32.49-79.51L177 132l15.52 15.51a12 12 0 0 1-17 17L160 149l-15.51 15.52a12 12 0 1 1-17-17L143 132l-15.52-15.51a12 12 0 1 1 17-17L160 115l15.51-15.52a12 12 0 0 1 17 17Z"></svg:path>`,
})
export class PhCloudXBoldIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}
