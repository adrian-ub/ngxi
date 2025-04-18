import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[arcticonsCoconalaIcon],svg[arcticons-coconala-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M39.927 35.728V12.379M29.77 6.408L9.455 18.136m6.773 0a6.771 6.771 0 1 0 0 11.728l20.314-11.728a6.771 6.771 0 1 0-10.157-5.864v23.456a6.771 6.771 0 1 0 10.157-5.864zM9.457 29.864l20.221 11.675"></svg:path>`,
})
export class ArcticonsCoconalaIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}
