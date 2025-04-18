import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[icSharpPictureInPictureAltIcon],svg[ic-sharp-picture-in-picture-alt-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M19 11h-8v6h8zm4 10V3H1v18zm-2-1.98H3V4.97h18z"></svg:path>`,
})
export class IcSharpPictureInPictureAltIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
