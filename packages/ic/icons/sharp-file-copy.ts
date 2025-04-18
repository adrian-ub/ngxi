import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[icSharpFileCopyIcon],svg[ic-sharp-file-copy-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M16 1H2v16h2V3h12zm-1 4l6 6v12H6V5zm-1 7h5.5L14 6.5z"></svg:path>`,
})
export class IcSharpFileCopyIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
