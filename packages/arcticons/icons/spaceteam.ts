import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[arcticonsSpaceteamIcon],svg[arcticons-spaceteam-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="m14.618 26.218l-9.79 6.704a.752.752 0 0 0 .424 1.373h18.845a1.225 1.225 0 0 0 1.16-1.622l-2.431-7.108a2.841 2.841 0 1 1 2.847-.965l2.761 8.073a2.4 2.4 0 0 0 2.27 1.622h5.081a1.666 1.666 0 0 0 1.554-2.266l-3.378-8.752l-.003-.007l-.574-1.488l-.893-2.312"></svg:path><svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="m33.384 21.782l9.789-6.704a.752.752 0 0 0-.425-1.372H12.214a1.666 1.666 0 0 0-1.553 2.265l3.222 8.347l.735 1.9l.734 1.9"></svg:path>`,
})
export class ArcticonsSpaceteamIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}
