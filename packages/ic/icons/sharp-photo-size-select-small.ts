import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[icSharpPhotoSizeSelectSmallIcon],svg[ic-sharp-photo-size-select-small-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M23 15h-2v2h2zm0 4h-2v2h2zm0-8h-2v2h2zm-8-8h-2v2h2zm8 4h-2v2h2zM1 21h10v-6H1zM3 7H1v2h2zm12 12h-2v2h2zm4-16h-2v2h2zm4 0h-2v2h2zm-4 16h-2v2h2zM3 11H1v2h2zm8-8H9v2h2zM7 3H5v2h2zM3 3H1v2h2z"></svg:path>`,
})
export class IcSharpPhotoSizeSelectSmallIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
