import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[arcticonsEmkanIcon],svg[arcticons-emkan-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M26.405 26.1s6.252-.004 9.873 0c9.56.012 8.402 14.563-.186 14.646c-4.417.043-15.666 0-15.666 0m3.43-19.05s-9.1.007-12.514 0c-8.067-.016-8.64 13.532-.556 13.534H20.89"></svg:path><svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M18.62 21.638s.043-5.874 0-8.377c-.128-7.349 12.593-8.692 12.93 0c.126 3.255 0 10.428 0 10.428"></svg:path>`,
})
export class ArcticonsEmkanIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}
