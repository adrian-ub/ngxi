import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[ixUploadIcon],svg[ix-upload-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M256 64L114.325 182.037l27.328 32.79l93.013-77.504v210.453h42.667V137.323l92.992 77.504l27.328-32.79zM85.333 448h341.333v-42.667H85.333z"></svg:path>`,
})
export class IxUploadIcon {
  readonly viewBox = input("0 0 512 512")
  readonly width = input("1em")
  readonly height = input("1em")
}
