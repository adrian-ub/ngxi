import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[mageUploadIcon],svg[mage-upload-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-width="1.5"><svg:path stroke-miterlimit="10" d="M12 3.212v12.026"></svg:path><svg:path stroke-linejoin="round" d="M16.625 7.456L12.66 3.49a.937.937 0 0 0-1.318 0L7.375 7.456M2.75 13.85v4.625a2.31 2.31 0 0 0 2.313 2.313h13.875a2.31 2.31 0 0 0 2.312-2.313V13.85"></svg:path></svg:g>`,
})
export class MageUploadIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
