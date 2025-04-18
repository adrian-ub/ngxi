import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[streamlineTriangleFlagSolidIcon],svg[streamline-triangle-flag-solid-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M2.666.044c.208 0 .396.085.532.222l8.61 4.305a.5.5 0 0 1 0 .894L3.416 9.661v3.545a.75.75 0 0 1-1.5 0V.793a.75.75 0 0 1 .75-.75Z" clip-rule="evenodd"></svg:path>`,
})
export class StreamlineTriangleFlagSolidIcon {
  readonly viewBox = input("0 0 14 14")
  readonly width = input("1em")
  readonly height = input("1em")
}
