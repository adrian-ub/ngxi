import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[icSharpPictureInPictureIcon],svg[ic-sharp-picture-in-picture-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M19 7h-8v6h8zm4-4H1v17.98h22zm-2 16.01H3V4.98h18z"></svg:path>`,
})
export class IcSharpPictureInPictureIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
