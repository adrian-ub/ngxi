import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[ixDownloadIcon],svg[ix-download-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="m397.653 208.427l-27.307-32.853l-93.013 77.653V42.667h-42.667v210.56l-93.013-77.653l-27.307 32.853L256 326.4zM85.333 384h341.333v42.667H85.333z"></svg:path>`,
})
export class IxDownloadIcon {
  readonly viewBox = input("0 0 512 512")
  readonly width = input("1em")
  readonly height = input("1em")
}
