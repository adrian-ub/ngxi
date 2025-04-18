import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[iconamoonUploadThinIcon],svg[iconamoon-upload-thin-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="m7 12l5 5m0 0l5-5m-5 5V4M6 20h12"></svg:path>`,
})
export class IconamoonUploadThinIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
