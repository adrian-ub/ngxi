import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[lineiconsGoogleDriveIcon],svg[lineicons-google-drive-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M15.258 14.29L8.871 3.258h6.258l6.42 11.032zm-5.387.903l-3.13 5.549h12.13L22 15.193zM8.032 4.613L2 15.193l3.129 5.549l6.097-10.581z"></svg:path>`,
})
export class LineiconsGoogleDriveIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
