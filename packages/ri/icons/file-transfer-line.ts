import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[riFileTransferLineIcon],svg[ri-file-transfer-line-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M15 4H5v16h14V8h-4zM3 2.992C3 2.444 3.447 2 3.999 2H16l5 5v13.993A1 1 0 0 1 20.007 22H3.993A1 1 0 0 1 3 21.008zM12 11V8l4 4l-4 4v-3H8v-2z"></svg:path>`,
})
export class RiFileTransferLineIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
