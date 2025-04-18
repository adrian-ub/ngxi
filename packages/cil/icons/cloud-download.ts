import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[cilCloudDownloadIcon],svg[cil-cloud-download-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M272 434.744V209.176h-32v225.568l-51.882-51.882l-22.628 22.627L256 496l90.51-90.511l-22.628-22.627z"></svg:path><svg:path fill="currentColor" d="M400 161.176c0-79.4-64.6-144-144-144s-144 64.6-144 144a96 96 0 0 0 0 192h80v-32h-80a64 64 0 0 1 0-128h32v-32a112 112 0 0 1 224 0v32h32a64 64 0 0 1 0 128h-80v32h80a96 96 0 0 0 0-192"></svg:path>`,
})
export class CilCloudDownloadIcon {
  readonly viewBox = input("0 0 512 512")
  readonly width = input("1em")
  readonly height = input("1em")
}
