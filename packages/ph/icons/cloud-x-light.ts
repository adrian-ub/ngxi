import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[phCloudXLightIcon],svg[ph-cloud-x-light-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M160 42a86.11 86.11 0 0 0-77.57 48.88A62 62 0 1 0 72 214h88a86 86 0 0 0 0-172m0 160H72a50 50 0 0 1 0-100a51 51 0 0 1 5.91.35A85.6 85.6 0 0 0 74 128a6 6 0 0 0 12 0a74 74 0 1 1 74 74m28.24-85.76L168.48 136l19.76 19.76a6 6 0 1 1-8.48 8.48L160 144.48l-19.76 19.76a6 6 0 0 1-8.48-8.48L151.52 136l-19.76-19.76a6 6 0 0 1 8.48-8.48L160 127.52l19.76-19.76a6 6 0 0 1 8.48 8.48"></svg:path>`,
})
export class PhCloudXLightIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}
