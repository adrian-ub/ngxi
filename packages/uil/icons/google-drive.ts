import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[uilGoogleDriveIcon],svg[uil-google-drive-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="m21.423 13.888l-6.09-10.55H8.668l6.09 10.55ZM8.09 4.338L2 14.888l3.334 5.774l6.089-10.55Zm1.733 10.55L6.49 20.662h12.178L22 14.887Z"></svg:path>`,
})
export class UilGoogleDriveIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
