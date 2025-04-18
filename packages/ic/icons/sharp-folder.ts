import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[icSharpFolderIcon],svg[ic-sharp-folder-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M10 4H2v16h20V6H12z"></svg:path>`,
})
export class IcSharpFolderIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
