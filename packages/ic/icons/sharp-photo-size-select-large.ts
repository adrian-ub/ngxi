import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[icSharpPhotoSizeSelectLargeIcon],svg[ic-sharp-photo-size-select-large-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M21 15h2v2h-2zm0 4h2v2h-2zm0-8h2v2h-2zm-8-8h2v2h-2zm8 4h2v2h-2zM1 7h2v2H1zm16-4h2v2h-2zm0 16h2v2h-2zM3 3H1v2h2zm20 0h-2v2h2zM9 3h2v2H9zM5 3h2v2H5zm-4 8v10h14V11zm2 8l2.5-3.21l1.79 2.15l2.5-3.22L13 19z"></svg:path>`,
})
export class IcSharpPhotoSizeSelectLargeIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
