import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[icSharpFolderOpenIcon],svg[ic-sharp-folder-open-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M22 6H12l-2-2H2v16h20zm-2 12H4V8h16z"></svg:path>`,
})
export class IcSharpFolderOpenIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
