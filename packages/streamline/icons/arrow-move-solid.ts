import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[streamlineArrowMoveSolidIcon],svg[streamline-arrow-move-solid-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M13.761 7.549a.75.75 0 0 0 0-1.057l-1.994-1.995a.75.75 0 0 0-.778-.16a.74.74 0 0 0-.499.689v.997a.25.25 0 0 1-.249.25H7.997a.25.25 0 0 1-.25-.25V3.779a.25.25 0 0 1 .25-.25h.997a.74.74 0 0 0 .689-.498a.75.75 0 0 0-.16-.818L7.529.22a.75.75 0 0 0-1.058 0L4.477 2.213a.75.75 0 0 0-.16.818a.74.74 0 0 0 .688.499h.998a.25.25 0 0 1 .249.25v2.243a.25.25 0 0 1-.25.25H3.76a.25.25 0 0 1-.25-.25v-.997a.748.748 0 0 0-1.276-.529L.24 6.492a.75.75 0 0 0 0 1.057l1.994 1.994c.141.139.33.217.529.22a.8.8 0 0 0 .249-.06a.74.74 0 0 0 .499-.688v-.998a.25.25 0 0 1 .249-.249h2.244a.25.25 0 0 1 .249.25v2.243a.25.25 0 0 1-.25.25h-.997a.74.74 0 0 0-.688.458a.75.75 0 0 0 .16.818l1.994 1.994a.75.75 0 0 0 1.058 0l1.994-1.994a.75.75 0 0 0 .16-.778a.74.74 0 0 0-.689-.498h-.997a.25.25 0 0 1-.25-.25V8.017a.25.25 0 0 1 .25-.249h2.244a.25.25 0 0 1 .25.25v.997a.74.74 0 0 0 .458.688q.138.06.29.06a.77.77 0 0 0 .528-.22z"></svg:path>`,
})
export class StreamlineArrowMoveSolidIcon {
  readonly viewBox = input("0 0 14 14")
  readonly width = input("1em")
  readonly height = input("1em")
}
