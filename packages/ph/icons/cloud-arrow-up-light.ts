import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[phCloudArrowUpLightIcon],svg[ph-cloud-arrow-up-light-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M188.24 164.24a6 6 0 0 1-8.48 0L158 142.49V208a6 6 0 0 1-12 0v-65.51l-21.76 21.75a6 6 0 0 1-8.48-8.48l32-32a6 6 0 0 1 8.48 0l32 32a6 6 0 0 1 0 8.48M160 42a86.1 86.1 0 0 0-77.57 48.88A62 62 0 1 0 72 214h40a6 6 0 0 0 0-12H72a50 50 0 0 1 0-100a51 51 0 0 1 5.91.36A85.5 85.5 0 0 0 74 128a6 6 0 0 0 12 0a74 74 0 1 1 103.6 67.85a6 6 0 0 0 4.8 11A86 86 0 0 0 160 42"></svg:path>`,
})
export class PhCloudArrowUpLightIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}
