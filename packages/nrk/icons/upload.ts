import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[nrkUploadIcon],svg[nrk-upload-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="m12 .999l-6 3.9V7.17l5-3.25V16h2V3.921l5 3.25V4.9zm11 20v-2H1v2z" clip-rule="evenodd"></svg:path>`,
})
export class NrkUploadIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
