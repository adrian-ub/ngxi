import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[streamlineGoogleDriveIcon],svg[streamline-google-drive-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M2.997 12.536L.742 8.93L4.8 1.715h4.51l4.057 7.214l-2.254 3.607zM4.798 1.715l4.51 7.214m4.06.003H5.023m-2.026 3.604l4.058-7.214"></svg:path>`,
})
export class StreamlineGoogleDriveIcon {
  readonly viewBox = input("0 0 14 14")
  readonly width = input("1em")
  readonly height = input("1em")
}
