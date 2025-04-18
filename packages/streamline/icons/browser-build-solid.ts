import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[streamlineBrowserBuildSolidIcon],svg[streamline-browser-build-solid-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M1.54 12.255V3.334h3.277v4.144c0 .414.336.75.75.75h4.25a.75.75 0 0 0 .365 0h2.278v4.027a.205.205 0 0 1-.206.205H1.745a.205.205 0 0 1-.205-.206Zm9.21-5.527h2.46a.75.75 0 0 1 .75.75v4.777a1.705 1.705 0 0 1-1.706 1.705H1.745A1.705 1.705 0 0 1 .04 12.254V1.745A1.705 1.705 0 0 1 1.745.04h3.822a.75.75 0 0 1 .75.75v1.044H9.25V.79a.75.75 0 0 1 1.5 0v1.044h2.46a.75.75 0 0 1 0 1.5h-2.46zm-1.5 0V3.334H6.317v3.394z" clip-rule="evenodd"></svg:path>`,
})
export class StreamlineBrowserBuildSolidIcon {
  readonly viewBox = input("0 0 14 14")
  readonly width = input("1em")
  readonly height = input("1em")
}
